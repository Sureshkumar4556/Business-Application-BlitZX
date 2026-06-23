"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// User ka structure define kiya
interface User {
  name: string;
  email: string;
  avatar: string;     // Profile picture URL
}

// Context ka type
interface AuthContextType {
  user: User | null;        // Current logged in user
  login: (userData: User) => void;   // Login function
  logout: () => void;       // Logout function
}

// Context create kiya
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);   // Initially user null hai

  // Login function
  const login = (userData: User) => {
    setUser(userData);
    // Aap yaha localStorage mein bhi save kar sakte ho (optional)
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use AuthContext easily
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};