
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple mock authentication - in a real app, use proper authentication
    if (email === "admin@ambitiousacademy.edu" && password === "admin123") {
      navigate("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <div className="mb-6 flex flex-col items-center">
          <img 
            src="https://lovable.dev/opengraph-image-p98pqg.png" 
            alt="The Ambitious Academy Logo" 
            className="h-16 w-auto"
          />
          <h1 className="mt-4 text-2xl font-bold text-center">Admin Login</h1>
          <p className="text-sm text-gray-600 text-center mt-1">
            Enter your credentials to access the admin panel
          </p>
        </div>
        
        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-3 text-red-700">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="admin@ambitiousacademy.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <a href="#" className="text-xs text-academy-teal hover:underline">
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <a href="/" className="text-academy-teal hover:underline">
            Return to website
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
