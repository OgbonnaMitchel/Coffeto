import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, User } from "../Types/auth";

const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = "coffeto_user";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // 🔄 Auto-login on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const signup = (userData: User) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    setUser(userData);
  };

  const login = (email: string) => {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    if (!storedUser) return false;

    const parsedUser: User = JSON.parse(storedUser);
    if (parsedUser.email === email) {
      setUser(parsedUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
