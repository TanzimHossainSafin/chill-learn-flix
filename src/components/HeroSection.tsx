
import React from 'react';
import { TrendingUp, Gamepad2, Bitcoin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-black/40 to-blue-900/80"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Crypto Gaming
            </span>
            <br />
            <span className="text-white">Revolution</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Invest in crypto, play exciting games, and earn rewards. Join the future of decentralized gaming and investment with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
              <TrendingUp className="h-5 w-5 mr-2" />
              Start Investing
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg">
              <Gamepad2 className="h-5 w-5 mr-2" />
              Play Games
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <Bitcoin className="h-12 w-12 text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Smart Investing</h3>
            <p className="text-gray-300">AI-powered crypto investment strategies</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <Gamepad2 className="h-12 w-12 text-purple-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Play & Earn</h3>
            <p className="text-gray-300">Exciting games with crypto rewards</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <TrendingUp className="h-12 w-12 text-green-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Real Returns</h3>
            <p className="text-gray-300">Track and grow your portfolio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
