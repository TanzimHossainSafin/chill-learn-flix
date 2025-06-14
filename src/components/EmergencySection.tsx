
import React from 'react';
import { Phone, Ambulance, Shield, Clock, AlertTriangle, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EmergencySection = () => {
  const emergencyContacts = [
    {
      title: 'জাতীয় জরুরি সেবা',
      number: '৯৯৯',
      description: 'সকল ধরনের জরুরি সেবার জন্য',
      icon: Shield,
      color: 'bg-red-500'
    },
    {
      title: 'অ্যাম্বুলেন্স সেবা',
      number: '০১৭১১-১১২২৩৩',
      description: 'বোয়ালমারী এলাকার জরুরি অ্যাম্বুলেন্স',
      icon: Ambulance,
      color: 'bg-blue-500'
    },
    {
      title: 'উপজেলা স্বাস্থ্য কমপ্লেক্স',
      number: '০৪৬৮১-৫৬১২৩',
      description: 'বোয়ালমারী উপজেলা হাসপাতাল',
      icon: Heart,
      color: 'bg-green-500'
    },
    {
      title: 'ফায়ার সার্ভিস',
      number: '০১৩২২-৮১০৬৮৬',
      description: 'ফরিদপুর ফায়ার স্টেশন',
      icon: AlertTriangle,
      color: 'bg-orange-500'
    }
  ];

  const quickTips = [
    'জরুরি অবস্থায় প্রথমে ৯৯৯ নম্বরে কল করুন',
    'রোগীর বয়স, লক্ষণ ও ঠিকানা স্পষ্ট করে বলুন',
    'অ্যাম্বুলেন্স আসার আগে প্রাথমিক চিকিৎসা দিন',
    'রোগীকে নিরাপদ ও আরামদায়ক অবস্থানে রাখুন'
  ];

  return (
    <section id="emergency" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            জরুরি সেবা ও যোগাযোগ
          </h2>
          <p className="text-xl text-gray-600">
            জরুরি প্রয়োজনে এই নম্বরগুলোতে যোগাযোগ করুন
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {emergencyContacts.map((contact, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`flex items-center justify-center w-16 h-16 ${contact.color} rounded-full mx-auto mb-4`}>
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                <div className="text-2xl font-bold text-red-600 mb-3">{contact.number}</div>
                <p className="text-sm text-gray-600 mb-4">{contact.description}</p>
                <Button 
                  size="sm" 
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => window.location.href = `tel:${contact.number}`}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  এখনই কল করুন
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">জরুরি কলের নির্দেশনা</h3>
              </div>
              <ul className="space-y-3">
                {quickTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">কখন জরুরি কল করবেন</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  হার্ট অ্যাটাক বা বুকে ব্যথা
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  দুর্ঘটনা বা গুরুতর আঘাত
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  শ্বাসকষ্ট বা অজ্ঞান হয়ে যাওয়া
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  গুরুতর রক্তক্ষরণ
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  বিষক্রিয়া বা অতিরিক্ত ওষুধ সেবন
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
