
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/815cd29c-446f-40f0-b61d-5257a5640d0e.png" 
                alt="The Ambitious Academy Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Empowering legal professionals with cutting-edge education and practical skills for the modern legal landscape.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">
              Programs
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/courses?category=constitutional" className="text-gray-300 hover:text-white">
                  Constitutional Law
                </Link>
              </li>
              <li>
                <Link to="/courses?category=corporate" className="text-gray-300 hover:text-white">
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link to="/courses?category=criminal" className="text-gray-300 hover:text-white">
                  Criminal Law
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">
              About Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/about#faculty" className="text-gray-300 hover:text-white">
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">
              Connect With Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <span className="text-gray-300">Email: info@ambitiousacademy.com</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-300">Phone: +1 (888) 123-4567</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-300">1234 Legal Avenue, Suite 500<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} The Ambitious Academy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
