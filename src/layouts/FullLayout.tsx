import { NavigationMenu, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Outlet } from "react-router";

export default function FullLayout() {
  // const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="fixed top-0 right-auto z-50 w-full">
          <div className="flex justify-between items-center p-4 m-4 rounded-md bg-indigo-800">
            <NavigationMenu className="flex gap-4">
              <NavigationMenuLink className="text-white" href="/">
                Home
              </NavigationMenuLink>
              <NavigationMenuLink className="text-white" href="/about">
                About
              </NavigationMenuLink>
              <NavigationMenuLink className="text-white" href="/login">
                Login
              </NavigationMenuLink>
            </NavigationMenu>
          </div>
        </div>
      </header>
      <main>
        <div className="pt-22">
          <Outlet />
        </div>
      </main>
    </>
  );
}