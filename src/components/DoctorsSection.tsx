
import React from 'react';
import { Stethoscope, Clock, Phone, MapPin, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DoctorsSection = () => {
  const doctors = [
    {
      name: 'ডা. মোঃ আব্দুল করিম',
      specialty: 'শিশু বিশেষজ্ঞ (পেডিয়াট্রিক)',
      chamber: 'করিম চিকিৎসা কেন্দ্র',
      address: 'বোয়ালমারী বাজার',
      phone: '০১৭১২-৩৪৫৬৭৮',
      hours: 'সকাল ৯টা - দুপুর ১টা, বিকাল ৫টা - রাত ৮টা',
      days: 'রোববার ছাড়া প্রতিদিন',
      rating: 4.8,
      patients: 150
    },
    {
      name: 'ডা. ফাতেমা খাতুন',
      specialty: 'গাইনি ও প্রসূতি বিশেষজ্ঞ',
      chamber: 'মা ও শিশু কল্যাণ কেন্দ্র',
      address: 'বোয়ালমারী উপজেলা স্বাস্থ্য কমপ্লেক্স',
      phone: '০১৯৮৭-৬৫৪৩২১',
      hours: 'সকাল ১০টা - দুপুর ২টা, বিকাল ৪টা - রাত ৭টা',
      days: 'শুক্রবার ছাড়া প্রতিদিন',
      rating: 4.9,
      patients: 200
    },
    {
      name: 'ডা. আহমেদ হাসান',
      specialty: 'হৃদরোগ বিশেষজ্ঞ',
      chamber: 'আধুনিক হার্ট কেয়ার',
      address: 'বোয়ালমারী মূল সড়ক',
      phone: '০১৫৫৫-১২৩৪৫৬',
      hours: 'বিকাল ৪টা - রাত ৮টা',
      days: 'সোম, বুধ, শুক্রবার',
      rating: 4.7,
      patients: 120
    },
    {
      name: 'ডা. নাসির উদ্দিন',
      specialty: 'সাধারণ চিকিৎসক (এমবিবিএস)',
      chamber: 'পপুলার মেডিকেল সেন্টার',
      address: 'বোয়ালমারী চৌরাস্তা',
      phone: '০১৭৮৮-৯৯৮৮৭৭',
      hours: 'সকাল ৮টা - রাত ১০টা',
      days: 'প্রতিদিন',
      rating: 4.6,
      patients: 300
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            বিশেষজ্ঞ ডাক্তারগণ
          </h2>
          <p className="text-xl text-gray-600">
            অভিজ্ঞ ও যোগ্য ডাক্তারদের সম্পূর্ণ তথ্য
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{doctor.chamber}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{doctor.address}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{doctor.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600">{doctor.patients}+ রোগী</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{doctor.hours}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{doctor.days}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600 font-medium">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{doctor.phone}</span>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Phone className="h-4 w-4 mr-1" />
                    কল করুন
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50">
            আরও ডাক্তার দেখুন
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
