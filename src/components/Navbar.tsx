
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/815cd29c-446f-40f0-b61d-5257a5640d0e.png" 
                alt="The Ambitious Academy Logo" 
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-gray-900">The Ambitious Academy</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link to="/" className="nav-link font-medium text-gray-700">Home</Link>
              <Link to="/courses" className="nav-link font-medium text-gray-700">Courses</Link>
              <Link to="/about" className="nav-link font-medium text-gray-700">About</Link>
              <Link to="/blog" className="nav-link font-medium text-gray-700">Blog</Link>
              <Link to="/contact" className="nav-link font-medium text-gray-700">Contact</Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-academy-teal text-white hover:bg-academy-teal/90">
              Enroll Now
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-academy-teal"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-academy-teal"
              onClick={toggleMenu}
            >
              Courses
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-academy-teal"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-academy-teal"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-academy-teal"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="px-3 py-3">
              <Button className="w-full bg-academy-teal text-white hover:bg-academy-teal/90">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
