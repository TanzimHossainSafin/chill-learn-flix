
import React from 'react';
import { Code, Palette, BarChart3, Smartphone, Globe, Database } from 'lucide-react';

const categories = [
  { icon: Code, name: 'Programming', count: '150+ courses', color: 'from-blue-500 to-purple-600' },
  { icon: Palette, name: 'Design', count: '80+ courses', color: 'from-pink-500 to-rose-600' },
  { icon: BarChart3, name: 'Data Science', count: '60+ courses', color: 'from-green-500 to-emerald-600' },
  { icon: Smartphone, name: 'Mobile Dev', count: '45+ courses', color: 'from-orange-500 to-amber-600' },
  { icon: Globe, name: 'Web Dev', count: '120+ courses', color: 'from-cyan-500 to-blue-600' },
  { icon: Database, name: 'Database', count: '35+ courses', color: 'from-indigo-500 to-purple-600' },
];

const CategorySection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gray-900/50 rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
