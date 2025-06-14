
import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-900">TeleMedica</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition-colors">Doctors</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
              <Phone className="h-4 w-4 mr-2" />
              Emergency
            </Button>
            <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Calendar className="h-4 w-4 mr-2" />
              Book Appointment
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <nav className="flex flex-col space-y-3">
              <a href="#services" className="text-gray-700 hover:text-blue-600 py-2">Services</a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 py-2">Doctors</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 py-2">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2">Contact</a>
              <div className="pt-3 space-y-2">
                <Button variant="outline" size="sm" className="w-full">Login</Button>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">Book Appointment</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
