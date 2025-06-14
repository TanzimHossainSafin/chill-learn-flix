
import React from 'react';
import { Stethoscope, Phone, MapPin, Mail, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Stethoscope className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold">বোয়ালমারী স্বাস্থ্য সেবা</h3>
            </div>
            <p className="text-gray-300 mb-6">
              বোয়ালমারী এলাকার সবচেয়ে বিশ্বস্ত স্বাস্থ্য সেবা নির্দেশিকা। 
              আপনার প্রয়োজনীয় সকল স্বাস্থ্য সেবার তথ্য এক জায়গায়।
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Heart className="h-4 w-4 text-red-400" />
              <span>সম্প্রদায়ের স্বাস্থ্যসেবায় নিবেদিত</span>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">দ্রুত লিংক</h4>
            <ul className="space-y-3">
              <li><a href="#doctors" className="text-gray-300 hover:text-blue-400 transition-colors">ডাক্তারগণ</a></li>
              <li><a href="#pharmacy" className="text-gray-300 hover:text-blue-400 transition-colors">ফার্মেসি</a></li>
              <li><a href="#emergency" className="text-gray-300 hover:text-blue-400 transition-colors">জরুরি সেবা</a></li>
              <li><a href="#search" className="text-gray-300 hover:text-blue-400 transition-colors">খুঁজুন</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">বিশেষত্ব</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">শিশু বিশেষজ্ঞ</span></li>
              <li><span className="text-gray-300">গাইনি বিশেষজ্ঞ</span></li>
              <li><span className="text-gray-300">হৃদরোগ বিশেষজ্ঞ</span></li>
              <li><span className="text-gray-300">সাধারণ চিকিৎসক</span></li>
              <li><span className="text-gray-300">দন্ত চিকিৎসক</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">যোগাযোগ</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">বোয়ালমারী, ফরিদপুর</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">জরুরি: ৯৯৯</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">২৪/৭ আপডেট</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@boalmarihealth.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © ২০২৪ বোয়ালমারী স্বাস্থ্য সেবা নির্দেশিকা। সকল অধিকার সংরক্ষিত।
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">গোপনীয়তা</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">শর্তাবলী</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">যোগাযোগ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
