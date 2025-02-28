import { BrowserRouter, Route, Routes } from "react-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "@/pages/Dashboard";
import Layout from "@/layouts/MainLayouts";
import { AuthProvider } from "@/providers/AuthProvider";
import FullLayout from "@/layouts/FullLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<FullLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="dashboard">
            <Route index 
              element={
                <ProtectedRoute>
                  <Layout>
                    <Dashboard />
                  </Layout>
                </ProtectedRoute>
              } />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}