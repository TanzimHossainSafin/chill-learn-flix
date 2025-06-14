
import React from 'react';
import { Pill, Clock, Phone, MapPin, Star, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PharmacySection = () => {
  const pharmacies = [
    {
      name: 'সূর্য ফার্মেসি',
      address: 'বোয়ালমারী বাজার, মূল সড়ক',
      phone: '০১৭১১-২২৩৩৪৪',
      hours: '২৪ ঘণ্টা খোলা',
      services: ['প্রেসক্রিপশন', 'জরুরি ওষুধ', 'হোম ডেলিভারি'],
      rating: 4.8,
      isOpen24: true,
      hasDelivery: true
    },
    {
      name: 'পপুলার ফার্মেসি',
      address: 'বোয়ালমারী চৌরাস্তা',
      phone: '০১৯৮৮-৭৭৬৬৫৫',
      hours: 'সকাল ৭টা - রাত ১১টা',
      services: ['সকল ধরনের ওষুধ', 'মেডিকেল ইকুইপমেন্ট'],
      rating: 4.6,
      isOpen24: false,
      hasDelivery: true
    },
    {
      name: 'আল-মদিনা ফার্মেসি',
      address: 'বোয়ালমারী উপজেলা হাসপাতালের পাশে',
      phone: '০১৫৫৫-৯৮৭৬৫৪',
      hours: 'সকাল ৮টা - রাত ১০টা',
      services: ['জরুরি ওষুধ', 'শিশুদের ওষুধ', 'ডায়াবেটিসের ওষুধ'],
      rating: 4.7,
      isOpen24: false,
      hasDelivery: false
    },
    {
      name: 'রহমত ফার্মেসি',
      address: 'বোয়ালমারী নতুন বাজার',
      phone: '০১৭৮৮-১১২২৩৳',
      hours: '২৪ ঘণ্টা খোলা',
      services: ['সকল ওষুধ', 'হোম ডেলিভারি', 'অনলাইন অর্ডার'],
      rating: 4.9,
      isOpen24: true,
      hasDelivery: true
    }
  ];

  return (
    <section id="pharmacy" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ফার্মেসি ও ওষুধের দোকান
          </h2>
          <p className="text-xl text-gray-600">
            ২৪ ঘণ্টা সেবা ও হোম ডেলিভারিসহ সকল ফার্মেসির তথ্য
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pharmacies.map((pharmacy, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900 mr-3">{pharmacy.name}</h3>
                      {pharmacy.isOpen24 && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                          ২৪ ঘণ্টা
                        </span>
                      )}
                      {pharmacy.hasDelivery && (
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium ml-2">
                          ডেলিভারি
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{pharmacy.address}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{pharmacy.hours}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{pharmacy.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">সেবাসমূহ:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pharmacy.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600 font-medium">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{pharmacy.phone}</span>
                  </div>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <Phone className="h-4 w-4 mr-1" />
                    কল করুন
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-green-200 text-green-600 hover:bg-green-50">
            আরও ফার্মেসি দেখুন
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PharmacySection;
