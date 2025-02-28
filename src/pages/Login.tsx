import { Button } from "@/components/ui/button";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

export default function Login() {
  const authCtx = useContext(AuthContext);
  const login = () => authCtx?.login({ username: "admin", password: "admin" });
  return (
    <div>
      <h1>Login Page</h1>
      <Button onClick={login}>Login</Button>
    </div>
  );
}