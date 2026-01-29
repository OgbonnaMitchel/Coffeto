export interface User {
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signup: (user: User) => void;
  login: (email: string) => boolean;
  logout: () => void;
}
