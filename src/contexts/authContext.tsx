import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
} from 'react';

import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

type AuthContextProps = {
  token: string | null;
  isAuthenticated: boolean;
  login: (newToken: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const navigate = useNavigate();

  const login = (newToken: string) => {
    setIsAuthenticated(true);

    setToken(newToken);
    Cookies.set('token', newToken);

    navigate('/');
  };

  const logout = () => {
    setToken(null);
    Cookies.remove('token');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const storedToken = Cookies.get('token');

    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const authContextValue = useMemo(
    () => ({
      token,
      login,
      logout,
      isAuthenticated,
    }),
    [token, login, logout, isAuthenticated]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider.');
  }
  return context;
}
