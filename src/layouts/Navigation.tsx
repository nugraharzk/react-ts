import { NavigationMenu, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Navigation () {
  const authCtx = useContext(AuthContext);
  const sidebarContext = useSidebar();
  const params = useLocation();
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 right-auto z-50 w-full">
      <div className={`flex justify-between items-center p-4 m-4 rounded-md bg-indigo-800 transition-all duration-500 ${sidebarContext.open ? 'w-[calc(100vw-18rem)]' : 'w-[calc(100vw-2rem)]'}`}>
        <div>
          <SidebarTrigger className="hover:text-indigo-800" />
        </div>
        <NavigationMenu className="flex gap-4">
          <NavigationMenuLink className="text-white" onClick={() => authCtx?.user ? navigate("/") : navigate("/login")}>
            {authCtx?.user ? "Logout" : "Login"}
          </NavigationMenuLink>
        </NavigationMenu>
      </div>
    </div>
  );
}