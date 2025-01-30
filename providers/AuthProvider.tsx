import React, { createContext, useContext, useState } from 'react';

type User = {
  email: string;
  name: string;
} | null;

type AuthContextType = {
  user: User;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, name: string, password: string) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);

  const signIn = async (email: string, password: string) => {
    // Implement your sign in logic here
    // For now, just setting a mock user
    setUser({ email, name: 'Test User' });
  };

  const signUp = async (email: string, name: string, password: string) => {
    // Implement your sign up logic here
    setUser({ email, name });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 