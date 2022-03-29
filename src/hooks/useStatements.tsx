import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useAuth } from './useAuth';
import { api } from '../services/api';
import { toast } from 'react-toastify';
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
  deleteStatement(id: string | undefined): Promise<void>;
}

const StatementsContext = createContext<StatementsContextData>(
    {} as StatementsContextData
  );

export function StatementProvider({ children }: StatementProviderProps) {
  const [statements, setStatements] = useState<Statement[]>([]);
  const [balance, setBalance] = useState<number>(0);

  const { user } = useAuth();

  useEffect(() => {
    async function loadStatements(): Promise<void> {
      if (user) {
        const response = await api.get<StatementState>('/statements/balance');

        const statementsFormatted = response.data.statement.map((statement: Statement) => ({
          ...statement,
        }))

        setStatements(statementsFormatted);
        setBalance(response.data.balance);
      }
    }
    
    loadStatements();
  }, [statements, user]);

  async function createStatement({ description, type, amount }: Statement): Promise<void> {
    try {
      await api.post(`/statements/${type}`, {
        description,
        amount,
      });
    } catch (err) {
      toast.error("Fundos insuficientes!");
    }
  }
  
  async function deleteStatement(id: string): Promise<void> {
    try {
      await api.delete(`/statements/${id}`);

      toast.success("Transação removida com sucesso!");
    } catch {
      toast.error("Erro ao remover!")
    }
  }

  return (
    <StatementsContext.Provider value={{ statements: statements, balance, createStatement, deleteStatement }}>
      {children}
    </StatementsContext.Provider>
  )
}

export function useStatements() {
  const context = useContext(StatementsContext);

  return context;
}
