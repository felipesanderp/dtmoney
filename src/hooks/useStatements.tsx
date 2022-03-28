import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';
export interface Statement {
  id?: string,
  amount: number,
  description: string,
  type: string,
  created_at?: Date,
}

interface StatementState {
  statement: Statement[];
  balance: number;
}

interface StatementProviderProps {
  children: ReactNode;
}

interface StatementsContextData {
  statements: Statement[];
  balance: number;
  createStatement(data: Statement): Promise<void>;
}

const StatementsContext = createContext<StatementsContextData>(
    {} as StatementsContextData
  );

export function StatementProvider({ children }: StatementProviderProps) {
  const [statements, setStatements] = useState<Statement[]>({} as Statement[]);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    async function loadStatements(): Promise<void> {
      const response = await api.get<StatementState>('/statements/balance');

      const statementsFormatted = response.data.statement.map((statement: Statement) => ({
        ...statement,
      }))

      setStatements(statementsFormatted);
      setBalance(response.data.balance);
    }
    
    loadStatements();
  }, [statements]);

  async function createStatement({ description, type, amount }: Statement): Promise<void> {
    await api.post(`/statements/${type}`, {
      description,
      amount,
    });
  }

  return (
    <StatementsContext.Provider value={{ statements: statements, balance, createStatement }}>
      {children}
    </StatementsContext.Provider>
  )
}

export function useStatements() {
  const context = useContext(StatementsContext);

  return context;
}
