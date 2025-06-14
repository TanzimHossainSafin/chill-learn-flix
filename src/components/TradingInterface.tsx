
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TrendingUp, TrendingDown } from 'lucide-react';

const TradingInterface = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [amount, setAmount] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Live Trading</h2>
          <p className="text-xl text-gray-300">Execute trades with real-time market data</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-black/40 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">Trading Panel</CardTitle>
              <div className="flex space-x-2 mt-4">
                <Button
                  onClick={() => setActiveTab('buy')}
                  className={`flex-1 ${activeTab === 'buy' ? 'bg-green-600' : 'bg-gray-700'}`}
                >
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Buy
                </Button>
                <Button
                  onClick={() => setActiveTab('sell')}
                  className={`flex-1 ${activeTab === 'sell' ? 'bg-red-600' : 'bg-gray-700'}`}
                >
                  <TrendingDown className="h-4 w-4 mr-2" />
                  Sell
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Cryptocurrency</label>
                <select 
                  value={selectedCrypto}
                  onChange={(e) => setSelectedCrypto(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-md px-3 py-2 text-white"
                >
                  <option value="BTC">Bitcoin (BTC)</option>
                  <option value="ETH">Ethereum (ETH)</option>
                  <option value="ADA">Cardano (ADA)</option>
                  <option value="SOL">Solana (SOL)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Amount (USD)</label>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>

              <div className="flex space-x-2">
                <Button 
                  onClick={() => setAmount('100')}
                  variant="outline" 
                  size="sm"
                  className="border-gray-600 text-gray-300"
                >
                  $100
                </Button>
                <Button 
                  onClick={() => setAmount('500')}
                  variant="outline" 
                  size="sm"
                  className="border-gray-600 text-gray-300"
                >
                  $500
                </Button>
                <Button 
                  onClick={() => setAmount('1000')}
                  variant="outline" 
                  size="sm"
                  className="border-gray-600 text-gray-300"
                >
                  $1000
                </Button>
              </div>

              <Button 
                className={`w-full ${activeTab === 'buy' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
              >
                {activeTab === 'buy' ? 'Buy' : 'Sell'} {selectedCrypto}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white">Market Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$65,432.10</div>
                  <div className="text-green-400 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +$1,234 (+1.9%) today
                  </div>
                </div>
                
                <div className="h-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-end justify-center space-x-1 p-4">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-purple-500 to-blue-500 w-3 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">24h High</span>
                    <span className="text-white">$66,890</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">24h Low</span>
                    <span className="text-white">$63,120</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Volume</span>
                    <span className="text-white">$2.3B</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TradingInterface;
