
import React, { useState } from 'react';
import { Menu, X, Calculator, BarChart3, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-green-900">ডিজিটাল খাতা</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">বৈশিষ্ট্য</a>
            <a href="#dashboard" className="text-gray-700 hover:text-green-600 transition-colors">ড্যাশবোর্ড</a>
            <a href="#templates" className="text-gray-700 hover:text-green-600 transition-colors">টেমপ্লেট</a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">পর্যালোচনা</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-green-600">
              <Calculator className="h-4 w-4 mr-2" />
              ক্যালকুলেটর
            </Button>
            <Button variant="outline" size="sm" className="border-green-200 text-green-600 hover:bg-green-50">
              <Users className="h-4 w-4 mr-2" />
              লগইন
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
              <BarChart3 className="h-4 w-4 mr-2" />
              শুরু করুন
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
          <div className="md:hidden py-4 border-t border-green-100">
            <nav className="flex flex-col space-y-3">
              <a href="#features" className="text-gray-700 hover:text-green-600 py-2">বৈশিষ্ট্য</a>
              <a href="#dashboard" className="text-gray-700 hover:text-green-600 py-2">ড্যাশবোর্ড</a>
              <a href="#templates" className="text-gray-700 hover:text-green-600 py-2">টেমপ্লেট</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 py-2">পর্যালোচনা</a>
              <div className="pt-3 space-y-2">
                <Button variant="outline" size="sm" className="w-full">লগইন</Button>
                <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">শুরু করুন</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
