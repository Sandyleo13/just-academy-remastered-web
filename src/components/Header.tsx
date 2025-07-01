
import { Button } from "@/components/ui/button";
import { Smartphone, Phone } from "lucide-react";
import QueryForm from "./QueryForm";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            JustAcademy
          </span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#course" className="text-gray-700 hover:text-blue-600 transition-colors">Course</a>
          <a href="#curriculum" className="text-gray-700 hover:text-blue-600 transition-colors">Curriculum</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
          <a href="#locations" className="text-gray-700 hover:text-blue-600 transition-colors">Locations</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <QueryForm />
      </div>
    </header>
  );
};

export default Header;
