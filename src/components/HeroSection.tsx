
import React from 'react';
import { Play, Plus } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Master JavaScript
            <span className="block text-blue-400">Like a Pro</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            From basics to advanced concepts. Build real projects, solve coding challenges, and become a JavaScript expert with our comprehensive course series.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Play className="h-5 w-5" />
              Start Learning
            </button>
            <button className="bg-gray-600/80 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-600 transition-colors flex items-center justify-center gap-2">
              <Plus className="h-5 w-5" />
              Add to List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
