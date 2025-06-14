
import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const specialties = [
    'সব বিশেষত্ব',
    'শিশু বিশেষজ্ঞ',
    'হৃদরোগ বিশেষজ্ঞ',
    'চর্মরোগ বিশেষজ্ঞ',
    'গাইনি বিশেষজ্ঞ',
    'অর্থোপেডিক',
    'চক্ষু বিশেষজ্ঞ',
    'দন্ত চিকিৎসক',
    'সাধারণ চিকিৎসক'
  ];

  return (
    <section id="search" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            আপনার প্রয়োজনীয় সেবা খুঁজুন
          </h2>
          <p className="text-xl text-gray-600">
            বিশেষত্ব, নাম বা এলাকা অনুযায়ী খুঁজে নিন
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="ডাক্তারের নাম বা ফার্মেসি খুঁজুন..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                  <Search className="h-5 w-5 mr-2" />
                  খুঁজুন
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-sm text-gray-600">জনপ্রিয় অনুসন্ধান:</span>
              {['শিশু ডাক্তার', 'জরুরি ফার্মেসি', 'দন্ত চিকিৎসক', 'চক্ষু বিশেষজ্ঞ'].map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SearchSection;
