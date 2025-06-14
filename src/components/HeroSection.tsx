
import React from 'react';
import { Video, Shield, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Healthcare at Your
                <span className="text-blue-600 block">Fingertips</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Connect with certified doctors instantly through secure video consultations. 
                Get quality healthcare from the comfort of your home, 24/7.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Video className="h-5 w-5 mr-2" />
                Start Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3 mx-auto">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Secure & Private</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3 mx-auto">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Available 24/7</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-3 mx-auto">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Expert Doctors</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">Virtual Consultation</p>
                  <p className="text-sm opacity-80">Connect with doctors instantly</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Certified Doctors</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -top-8 -right-8 w-full h-full bg-blue-200 rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
