
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bitcoin, TrendingUp, Gamepad2 } from 'lucide-react';

const CommunitySection = () => {
  const posts = [
    {
      user: 'CryptoGamer',
      avatar: 'CG',
      time: '2 hours ago',
      content: 'Just hit a massive win on Crypto Slots! 🎰 $500 turned into $2,000! This platform is incredible!',
      likes: 24,
      type: 'game'
    },
    {
      user: 'InvestorPro',
      avatar: 'IP',
      time: '4 hours ago',
      content: 'AI recommendations helped me catch the BTC pump perfectly. Up 15% this week thanks to the insights! 📈',
      likes: 18,
      type: 'investment'
    },
    {
      user: 'BlockchainBoss',
      avatar: 'BB',
      time: '6 hours ago',
      content: 'Community challenge completed! Won 10 games in a row. The competition here is amazing! 🏆',
      likes: 31,
      type: 'game'
    },
    {
      user: 'HODLQueen',
      avatar: 'HQ',
      time: '8 hours ago',
      content: 'Love the social features here. Made some great connections and learned so much from other traders! 💪',
      likes: 12,
      type: 'social'
    }
  ];

  const topUsers = [
    { name: 'CryptoKing', points: 15420, badge: '👑' },
    { name: 'BitMaster', points: 12890, badge: '🥇' },
    { name: 'GamePro', points: 11230, badge: '🥈' },
    { name: 'InvestGuru', points: 9870, badge: '🥉' },
  ];

  return (
    <section id="community" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Community Hub</h2>
          <p className="text-xl text-gray-300">Connect, share, and learn with fellow crypto enthusiasts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-black/40 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">Share Your Success</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">You</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <Input
                      placeholder="Share your wins, insights, or ask questions..."
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                          <Bitcoin className="h-4 w-4 mr-1" />
                          Investment
                        </Button>
                        <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
                          <Gamepad2 className="h-4 w-4 mr-1" />
                          Gaming
                        </Button>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">Post</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {posts.map((post, index) => (
                <Card key={index} className="bg-black/30 border-purple-500/20 hover:border-purple-400/40 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{post.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-white font-semibold">{post.user}</span>
                          <span className="text-gray-400 text-sm">{post.time}</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            post.type === 'game' ? 'bg-green-900/50 text-green-400' :
                            post.type === 'investment' ? 'bg-blue-900/50 text-blue-400' :
                            'bg-purple-900/50 text-purple-400'
                          }`}>
                            {post.type}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">{post.content}</p>
                        <div className="flex items-center space-x-4">
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400 p-0">
                            ❤️ {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400 p-0">
                            💬 Reply
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400 p-0">
                            🔄 Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">🏆 Top Contributors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-800/30">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{user.badge}</span>
                      <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-gray-400 text-sm">{user.points.toLocaleString()} points</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">Live Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">BitTrader just won $450 on Lucky Dice!</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">InvestPro made a successful BTC trade</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">CryptoGamer reached level 15!</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">New daily challenge available</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-400" />
                  Weekly Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-xl font-bold text-green-400 mb-2">Community Goal</div>
                  <p className="text-gray-300 text-sm mb-3">Reach 10,000 total games played</p>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full" style={{ width: '73%' }}></div>
                  </div>
                  <p className="text-green-400 text-sm mt-2">7,300 / 10,000</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-300 text-sm mb-2">Community Reward:</p>
                  <p className="text-green-400 font-semibold">$5,000 Prize Pool</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
