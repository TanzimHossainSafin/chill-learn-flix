
import React from 'react';
import { Stethoscope, MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full">
              <Stethoscope className="h-10 w-10 text-blue-600" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            বোয়ালমারী এলাকার
            <span className="text-blue-600 block">স্বাস্থ্য সেবা নির্দেশিকা</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            আপনার প্রয়োজনীয় ডাক্তার, ফার্মেসি এবং স্বাস্থ্য সেবার সম্পূর্ণ তথ্য একই জায়গায়।
            দ্রুত এবং সহজে খুঁজে নিন আপনার কাছের স্বাস্থ্য সেবা।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Search className="h-5 w-5 mr-2" />
              ডাক্তার খুঁজুন
            </Button>
            <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              <MapPin className="h-5 w-5 mr-2" />
              ফার্মেসি দেখুন
            </Button>
            <Button size="lg" variant="destructive" className="bg-red-600 hover:bg-red-700 px-8 py-4 text-lg">
              <Phone className="h-5 w-5 mr-2" />
              জরুরি কল
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4">
                <Stethoscope className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">৫০+ ডাক্তার</h3>
              <p className="text-gray-600">বিভিন্ন বিশেষত্বের অভিজ্ঞ ডাক্তারদের তথ্য</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">২০+ ফার্মেসি</h3>
              <p className="text-gray-600">২৪ ঘণ্টা সেবাসহ সকল ফার্মেসির তথ্য</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mx-auto mb-4">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">২৪/৭ আপডেট</h3>
              <p className="text-gray-600">সর্বদা আপডেট থাকা তথ্য ও যোগাযোগ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
