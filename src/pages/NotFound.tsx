import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-blue-100">
      <div className="text-center p-8 bg-white/70 rounded-3xl shadow-xl backdrop-blur-md animate-fadeIn">
        <h1 className="mb-4 text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 animate-bounce">
          404
        </h1>
        <p className="mb-6 text-xl md:text-2xl text-gray-700">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <p className="mb-6 text-gray-600">
          Maybe go back to the homepage or explore other sections.
        </p>
        <a href="/">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500 transition-all transform hover:scale-105">
            Return Home
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
