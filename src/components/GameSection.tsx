
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gamepad2, TrendingUp } from 'lucide-react';

const GameSection = () => {
  const [selectedGame, setSelectedGame] = useState('coinflip');
  const [betAmount, setBetAmount] = useState(10);
  const [gameResult, setGameResult] = useState('');

  const games = [
    {
      id: 'coinflip',
      name: 'Crypto Flip',
      description: 'Classic coin flip with crypto rewards',
      minBet: 5,
      maxBet: 1000,
      multiplier: '2x'
    },
    {
      id: 'dice',
      name: 'Lucky Dice',
      description: 'Roll the dice and multiply your crypto',
      minBet: 1,
      maxBet: 500,
      multiplier: '6x'
    },
    {
      id: 'slots',
      name: 'Crypto Slots',
      description: 'Spin to win big crypto prizes',
      minBet: 2,
      maxBet: 200,
      multiplier: '100x'
    }
  ];

  const playGame = () => {
    const isWin = Math.random() > 0.5;
    if (isWin) {
      setGameResult(`🎉 You won $${betAmount * 2}!`);
    } else {
      setGameResult(`😔 You lost $${betAmount}. Try again!`);
    }
    setTimeout(() => setGameResult(''), 3000);
  };

  return (
    <section id="games" className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Play & Earn Games</h2>
          <p className="text-xl text-gray-300">Have fun while earning crypto rewards</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-black/40 border-purple-500/30 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Gamepad2 className="h-5 w-5 mr-2 text-purple-400" />
                  Game Selection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {games.map((game) => (
                    <div
                      key={game.id}
                      onClick={() => setSelectedGame(game.id)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedGame === game.id
                          ? 'border-purple-500 bg-purple-900/30'
                          : 'border-gray-600 bg-gray-800/30 hover:border-purple-400'
                      }`}
                    >
                      <h3 className="text-white font-semibold mb-2">{game.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{game.description}</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-green-400">Max: {game.multiplier}</span>
                        <span className="text-gray-300">${game.minBet}-${game.maxBet}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-white text-xl font-semibold mb-4">
                    {games.find(g => g.id === selectedGame)?.name}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Bet Amount ($)</label>
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => setBetAmount(Math.max(1, betAmount - 5))}
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300"
                        >
                          -
                        </Button>
                        <div className="bg-gray-800 px-4 py-2 rounded text-white min-w-[80px] text-center">
                          ${betAmount}
                        </div>
                        <Button
                          onClick={() => setBetAmount(betAmount + 5)}
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={playGame}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg py-3"
                  >
                    Play Now - Bet ${betAmount}
                  </Button>

                  {gameResult && (
                    <div className="mt-4 p-4 bg-blue-900/30 border border-blue-500/50 rounded-lg">
                      <p className="text-center text-white font-semibold text-lg">{gameResult}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-black/40 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">Game Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Winnings</span>
                  <span className="text-green-400 font-semibold">$2,156.78</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Games Played</span>
                  <span className="text-white">147</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Win Rate</span>
                  <span className="text-yellow-400">62.4%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Biggest Win</span>
                  <span className="text-purple-400">$890.00</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-yellow-400" />
                  Daily Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">Win 5 Games</div>
                  <p className="text-gray-300 text-sm">Progress: 3/5</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-300 text-sm mb-2">Reward:</p>
                  <p className="text-yellow-400 font-semibold">$50 Bonus + 100 XP</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white">Leaderboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { rank: 1, name: 'CryptoKing', winnings: '$5,432' },
                  { rank: 2, name: 'BitMaster', winnings: '$4,567' },
                  { rank: 3, name: 'You', winnings: '$2,156' },
                  { rank: 4, name: 'GamePro', winnings: '$1,890' },
                ].map((player, index) => (
                  <div key={index} className={`flex items-center justify-between p-2 rounded ${
                    player.name === 'You' ? 'bg-purple-900/30 border border-purple-500/50' : ''
                  }`}>
                    <div className="flex items-center space-x-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        player.rank === 1 ? 'bg-yellow-500 text-black' :
                        player.rank === 2 ? 'bg-gray-400 text-black' :
                        player.rank === 3 ? 'bg-amber-600 text-black' : 'bg-gray-600 text-white'
                      }`}>
                        {player.rank}
                      </span>
                      <span className="text-white">{player.name}</span>
                    </div>
                    <span className="text-green-400 font-semibold">{player.winnings}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection;
