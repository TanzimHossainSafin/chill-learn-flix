
import React from 'react';
import { Calculator, BarChart3, Users, Clock, Shield, Smartphone } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Calculator,
      title: "বিক্রয় হিসাব",
      description: "দৈনিক বিক্রয়ের পূর্ণাঙ্গ হিসাব রাখুন এবং স্বয়ংক্রিয় গণনা করুন।"
    },
    {
      icon: BarChart3,
      title: "স্টক ব্যবস্থাপনা",
      description: "পণ্যের স্টক ট্র্যাক করুন এবং কম স্টকের জন্য সতর্কতা পান।"
    },
    {
      icon: Users,
      title: "গ্রাহক বাকির খাতা",
      description: "গ্রাহকদের বাকি টাকার হিসাব সহজভাবে পরিচালনা করুন।"
    },
    {
      icon: Clock,
      title: "দ্রুত এন্ট্রি",
      description: "মোবাইল বা কম্পিউটার থেকে দ্রুত ডেটা এন্ট্রি করুন।"
    },
    {
      icon: Shield,
      title: "ডেটা সুরক্ষা",
      description: "আপনার ব্যবসায়িক তথ্য সম্পূর্ণ নিরাপদ এবং ব্যাকআপ থাকবে।"
    },
    {
      icon: Smartphone,
      title: "মোবাইল অ্যাপ",
      description: "যেকোনো জায়গা থেকে মোবাইল দিয়ে আপনার খাতা দেখুন।"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            কেন ডিজিটাল খাতা বেছে নিবেন?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আধুনিক প্রযুক্তির সাহায্যে আপনার ব্যবসার হিসাবরক্ষণ করুন সহজ ও নির্ভুলভাবে।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
