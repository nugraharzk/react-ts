import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Navigation from "./Navigation"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <Navigation />
        <div className="container mx-auto p-4 mt-20">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}