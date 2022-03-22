import { createContext, ReactNode, useCallback, useContext, useState } from 'react'
import { api } from '../services/api';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface AuthProps {
  children: ReactNode;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  // updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProps) {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@FinApi:token');
    const user = localStorage.getItem('@FinApi:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@FinApi:token', token);
    localStorage.setItem('@FinApi:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@FinApi:token');
    localStorage.removeItem('@FinApi:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}


export { AuthProvider, useAuth }