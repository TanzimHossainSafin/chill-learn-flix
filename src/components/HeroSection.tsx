
import React from 'react';
import { BookOpen, Shield, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                আপনার দোকানের
                <span className="text-green-600 block">ডিজিটাল খাতা</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                ঐতিহ্যবাহী কাগজের খাতা থেকে আধুনিক ডিজিটাল সিস্টেমে পরিবর্তন করুন। 
                বিক্রয়, স্টক এবং বাকির হিসাব সহজেই রাখুন।
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                <BookOpen className="h-5 w-5 mr-2" />
                বিনামূল্যে শুরু করুন
              </Button>
              <Button size="lg" variant="outline" className="border-green-200 text-green-600 hover:bg-green-50 px-8 py-4 text-lg">
                ডেমো দেখুন
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3 mx-auto">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">নিরাপদ ও সুরক্ষিত</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3 mx-auto">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">স্বয়ংক্রিয় হিসাব</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-3 mx-auto">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">সহজ ব্যবহার</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">ডিজিটাল খাতা সিস্টেম</p>
                  <p className="text-sm opacity-80">আধুনিক হিসাবরক্ষণ সমাধান</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">১০০+</div>
                  <div className="text-sm text-gray-600">সন্তুষ্ট দোকানদার</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">৫০০+</div>
                  <div className="text-sm text-gray-600">দৈনিক লেনদেন</div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -top-8 -right-8 w-full h-full bg-green-200 rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
