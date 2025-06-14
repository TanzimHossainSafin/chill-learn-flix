
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Bitcoin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIInsights = () => {
  const insights = [
    {
      type: 'bullish',
      title: 'Bitcoin Momentum Building',
      description: 'AI analysis shows strong bullish signals for BTC with 78% confidence',
      confidence: 78,
      timeframe: '7 days'
    },
    {
      type: 'bearish',
      title: 'Ethereum Correction Expected',
      description: 'Technical indicators suggest a short-term pullback for ETH',
      confidence: 65,
      timeframe: '3 days'
    },
    {
      type: 'bullish',
      title: 'Solana Breaking Resistance',
      description: 'SOL showing strong momentum with high trading volume',
      confidence: 82,
      timeframe: '5 days'
    }
  ];

  return (
    <section id="ai" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Insights</h2>
          <p className="text-xl text-gray-300">Advanced machine learning analysis for smarter investments</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {insights.map((insight, index) => (
              <Card key={index} className="bg-black/40 border-purple-500/30 hover:border-purple-400/50 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {insight.type === 'bullish' ? (
                        <TrendingUp className="h-5 w-5 text-green-400" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-400" />
                      )}
                      <CardTitle className="text-white text-lg">{insight.title}</CardTitle>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      insight.type === 'bullish' ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'
                    }`}>
                      {insight.timeframe}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{insight.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">Confidence:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${insight.type === 'bullish' ? 'bg-green-400' : 'bg-red-400'}`}
                            style={{ width: `${insight.confidence}%` }}
                          />
                        </div>
                        <span className="text-white font-medium">{insight.confidence}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Bitcoin className="h-5 w-5 mr-2 text-yellow-400" />
                AI Trading Bot
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">+24.7%</div>
                <p className="text-green-400">AI Bot Performance This Month</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Success Rate</span>
                  <span className="text-white font-semibold">87.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Trades</span>
                  <span className="text-white font-semibold">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Avg. Hold Time</span>
                  <span className="text-white font-semibold">4.2 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Risk Level</span>
                  <span className="text-yellow-400 font-semibold">Moderate</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Enable AI Trading
                </Button>
                <Button variant="outline" className="w-full border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white">
                  Customize AI Settings
                </Button>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
                <p className="text-yellow-400 text-sm">
                  <strong>Pro Tip:</strong> AI analysis shows optimal entry points for DCA strategies during market dips.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;
