
import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">LearnFlix</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Browse</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">My Courses</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Categories</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
