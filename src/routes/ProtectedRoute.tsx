import { JSX, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const auth = useContext(AuthContext);
  if (!auth) return null; // Handle missing context
  return auth.user ? children : <Navigate to="/login" />;
}
