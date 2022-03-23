import { ReactNode } from 'react';

import { AuthProvider } from './useAuth';
import { StatementProvider } from './useStatements';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <StatementProvider>{children}</StatementProvider>
    </AuthProvider>
  )
};
