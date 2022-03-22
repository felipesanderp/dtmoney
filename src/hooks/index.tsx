import { ReactNode } from 'react';

import { AuthProvider } from './useAuth';
import { TransactionsProvider } from './useTransactions';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <TransactionsProvider>{children}</TransactionsProvider>
    </AuthProvider>
  )
};
