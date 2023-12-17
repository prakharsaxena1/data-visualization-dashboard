import React, { createContext, useState, useEffect } from 'react';

// Define the shape of the context
interface AuthContextProps {
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
}

// Create the context
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

type AuthProviderType = {
  children: React.ReactNode;
}

// AuthProvider component
export const AuthProvider: React.FC<AuthProviderType> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => {
      const storedAuth = localStorage.getItem('isAuthenticated');
      return storedAuth ? JSON.parse(storedAuth) : false;
    }
  );

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const signIn = () => {
    setIsAuthenticated(true);
  };

  const signOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
