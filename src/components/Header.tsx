
import React, { useState } from 'react';
import { Menu, X, Stethoscope, MapPin, Phone, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-blue-900">বোয়ালমারী স্বাস্থ্য সেবা</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#doctors" className="text-gray-700 hover:text-blue-600 transition-colors">ডাক্তারগণ</a>
            <a href="#pharmacy" className="text-gray-700 hover:text-blue-600 transition-colors">ফার্মেসি</a>
            <a href="#emergency" className="text-gray-700 hover:text-blue-600 transition-colors">জরুরি সেবা</a>
            <a href="#search" className="text-gray-700 hover:text-blue-600 transition-colors">খুঁজুন</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
              <Search className="h-4 w-4 mr-2" />
              খুঁজুন
            </Button>
            <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              <MapPin className="h-4 w-4 mr-2" />
              এলাকা
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Phone className="h-4 w-4 mr-2" />
              জরুরি কল
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
              <a href="#doctors" className="text-gray-700 hover:text-blue-600 py-2">ডাক্তারগণ</a>
              <a href="#pharmacy" className="text-gray-700 hover:text-blue-600 py-2">ফার্মেসি</a>
              <a href="#emergency" className="text-gray-700 hover:text-blue-600 py-2">জরুরি সেবা</a>
              <a href="#search" className="text-gray-700 hover:text-blue-600 py-2">খুঁজুন</a>
              <div className="pt-3 space-y-2">
                <Button variant="outline" size="sm" className="w-full">এলাকা নির্বাচন</Button>
                <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">জরুরি কল করুন</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
