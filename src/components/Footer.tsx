
import React from 'react';
import { BookOpen, Phone, Mail, MapPin, Facebook, User, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-green-400" />
              <h3 className="text-2xl font-bold">ডিজিটাল খাতা</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              আধুনিক প্রযুক্তির সাহায্যে ছোট ব্যবসায়ীদের হিসাবরক্ষণ সহজ করে তোলা। 
              আপনার ব্যবসা, আমাদের প্রযুক্তি।
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <User className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">সেবাসমূহ</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">বিক্রয় খাতা</a></li>
              <li><a href="#" className="hover:text-white transition-colors">স্টক ব্যবস্থাপনা</a></li>
              <li><a href="#" className="hover:text-white transition-colors">বাকির খাতা</a></li>
              <li><a href="#" className="hover:text-white transition-colors">লাভ-ক্ষতি হিসাব</a></li>
              <li><a href="#" className="hover:text-white transition-colors">মোবাইল অ্যাপ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">সহায়তা</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">টিউটোরিয়াল</a></li>
              <li><a href="#" className="hover:text-white transition-colors">প্রশিক্ষণ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">সাপোর্ট</a></li>
              <li><a href="#" className="hover:text-white transition-colors">যোগাযোগ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">যোগাযোগ</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-green-400" />
                <span>+৮৮ ০১৭ ১২৩৪ ৫৬৭৮</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-green-400" />
                <span>info@digitalkhata.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-green-400" />
                <span>বোয়ালমারী, ফরিদপুর, বাংলাদেশ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © ২০২৪ ডিজিটাল খাতা। সকল অধিকার সংরক্ষিত।
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">গোপনীয়তা নীতি</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">শর্তাবলী</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">সাহায্য</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
