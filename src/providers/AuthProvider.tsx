import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

interface User {
  id: number;
  username: string;
}

interface AuthContextType {
  user: User | null;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/api/auth/me", { withCredentials: true })
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  useEffect(() => {
    if (user) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${user.id}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [user]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = async (credentials: { username: string; password: string }) => {
    // const res = await axios.post("/api/auth/login", credentials, { withCredentials: true });
    // setUser(res.data.user);
    setUser({ id: 1, username: "admin" });
    navigate("/dashboard");
  };

  const logout = async () => {
    // await axios.post("/api/auth/logout", {}, { withCredentials: true });
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
