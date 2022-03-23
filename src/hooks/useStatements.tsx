import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

export interface Statements {
  statement: [
    {
      id: string,
      amount: number,
      description: string,
      type: string,
      created_at: Date,
    }
  ],
  balance: number;
}

interface StatementProviderProps {
  children: ReactNode;
}

interface StatementsContextData {
  statements: Statements[];
}

const StatementsContext = createContext<StatementsContextData>(
    {} as StatementsContextData
  );

export function StatementProvider({ children }: StatementProviderProps) {
  const [statements, setStatements] = useState<Statements[]>([]);

  useEffect(() => {
    async function loadStatements(): Promise<void> {
      const response = await api.get('/statements/balance');

      console.log(response.data.statement);
    }

    loadStatements();
  }, [statements]);

  return (
    <StatementsContext.Provider value={{ statements }}>
      {children}
    </StatementsContext.Provider>
  )
}

export function useStatements() {
  const context = useContext(StatementsContext);

  return context;
}
