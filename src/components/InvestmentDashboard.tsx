
import React from 'react';
import { TrendingUp, TrendingDown, Bitcoin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const InvestmentDashboard = () => {
  const cryptos = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$65,432', change: '+5.2%', positive: true },
    { name: 'Ethereum', symbol: 'ETH', price: '$3,245', change: '+3.8%', positive: true },
    { name: 'Cardano', symbol: 'ADA', price: '$0.52', change: '-2.1%', positive: false },
    { name: 'Solana', symbol: 'SOL', price: '$98.45', change: '+7.3%', positive: true },
  ];

  return (
    <section id="dashboard" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Investment Dashboard</h2>
          <p className="text-xl text-gray-300">Track your crypto portfolio and make smart investments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$45,231.89</div>
              <p className="text-green-400 text-sm flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12.5% this month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 border-green-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Today's Profit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">+$1,234.56</div>
              <p className="text-green-400 text-sm">+2.8% today</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border-yellow-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Active Investments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">12</div>
              <p className="text-yellow-400 text-sm">Across 8 coins</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-900/50 to-rose-900/50 border-pink-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Game Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$2,156.78</div>
              <p className="text-pink-400 text-sm">From gaming rewards</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-black/30 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bitcoin className="h-5 w-5 mr-2 text-yellow-400" />
                Top Cryptocurrencies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cryptos.map((crypto, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{crypto.symbol.slice(0, 2)}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{crypto.name}</p>
                      <p className="text-gray-400 text-sm">{crypto.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">{crypto.price}</p>
                    <p className={`text-sm flex items-center ${crypto.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {crypto.positive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                      {crypto.change}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-black/30 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
                Buy Crypto
              </Button>
              <Button variant="outline" className="w-full border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white">
                Sell Holdings
              </Button>
              <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                Auto-Invest Setup
              </Button>
              <Button variant="outline" className="w-full border-yellow-500 text-yellow-400 hover:bg-yellow-600 hover:text-white">
                View AI Recommendations
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentDashboard;
