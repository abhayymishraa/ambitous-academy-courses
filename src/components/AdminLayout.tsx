
import { ReactNode, useState } from "react";
import { Navigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, BookOpen, Newspaper, Users, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  // Simple mock authentication - in a real app, use proper authentication
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const location = useLocation();
  
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  const navigationItems = [
    { name: "Dashboard", icon: Home, path: "/admin" },
    { name: "Courses", icon: BookOpen, path: "/admin/courses" },
    { name: "Blog Posts", icon: Newspaper, path: "/admin/blog" },
    { name: "Instructors", icon: Users, path: "/admin/instructors" },
    { name: "Settings", icon: Settings, path: "/admin/settings" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top navigation */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex flex-col gap-6 py-6">
                  <div className="px-2">
                    <h2 className="text-xl font-semibold text-academy-teal">Admin Panel</h2>
                  </div>
                  <nav className="flex flex-col gap-1">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          location.pathname === item.path
                            ? "bg-gray-100 text-academy-teal"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            <img 
              src="https://lovable.dev/opengraph-image-p98pqg.png" 
              alt="The Ambitious Academy Logo" 
              className="h-8 w-auto"
            />
            <span className="font-semibold text-lg text-academy-teal">The Ambitious Academy</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={() => setIsAuthenticated(false)}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar for desktop */}
        <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)]">
          <div className="flex flex-col gap-6 p-6">
            <div className="px-2">
              <h2 className="text-xl font-semibold text-academy-teal">Admin Panel</h2>
            </div>
            <nav className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-gray-100 text-academy-teal"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
