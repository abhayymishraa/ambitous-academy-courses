
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <div className="bg-gray-800 text-center py-2">
        <a href="/admin/login" className="text-xs text-gray-400 hover:text-white transition-colors">
          Admin Login
        </a>
      </div>
    </div>
  );
};

export default Layout;
