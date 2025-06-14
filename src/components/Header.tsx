
import React from 'react';
import { Search, Bell, User, Gamepad2, TrendingUp, Bitcoin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-purple-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Bitcoin className="h-8 w-8 text-yellow-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
                CryptoPlay
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#dashboard" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Invest
              </a>
              <a href="#games" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2">
                <Gamepad2 className="h-4 w-4" />
                Games
              </a>
              <a href="#community" className="text-gray-300 hover:text-purple-400 transition-colors">Community</a>
              <a href="#ai" className="text-gray-300 hover:text-purple-400 transition-colors">AI Insights</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white">
              Connect Wallet
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
