
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileSpreadsheet, Users, Package, TrendingUp } from 'lucide-react';

const TemplatesSection = () => {
  const templates = [
    {
      icon: FileSpreadsheet,
      title: "দৈনিক বিক্রয় খাতা",
      description: "প্রতিদিনের বিক্রয়ের হিসাব রাখার জন্য সহজ টেমপ্লেট। স্বয়ংক্রিয় গণনা সহ।",
      features: ["দৈনিক বিক্রয় এন্ট্রি", "মোট বিক্রয় গণনা", "পণ্যভিত্তিক বিক্রয়", "মাসিক সামারি"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Package,
      title: "স্টক ব্যবস্থাপনা",
      description: "পণ্যের স্টক ট্র্যাক করুন এবং কখন নতুন স্টক আনতে হবে জানুন।",
      features: ["বর্তমান স্টক", "কম স্টক সতর্কতা", "নতুন স্টক এন্ট্রি", "স্টক ভ্যালুয়েশন"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Users,
      title: "গ্রাহক বাকির খাতা",
      description: "কোন গ্রাহকের কত টাকা বাকি আছে সব একসাথে দেখুন এবং ট্র্যাক করুন।",
      features: ["গ্রাহকের তালিকা", "বাকি টাকার পরিমাণ", "পেমেন্ট এন্ট্রি", "বাকির ইতিহাস"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "মাসিক লাভ-ক্ষতি",
      description: "মাসিক আয়-ব্যয় এবং লাভ-ক্ষতির হিসাব রাখুন সহজেই।",
      features: ["মোট আয়", "মোট ব্যয়", "নিট লাভ", "চার্ট ও গ্রাফ"],
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="templates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            প্রস্তুত টেমপ্লেট
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আমাদের বিশেষজ্ঞরা তৈরি করা স্প্রেডশিট টেমপ্লেট ডাউনলোড করুন এবং এখনই ব্যবহার শুরু করুন।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {templates.map((template, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg ${template.color} flex items-center justify-center`}>
                    <template.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{template.title}</CardTitle>
                    <CardDescription className="mt-2">{template.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">এই টেমপ্লেটে যা আছে:</h4>
                    <ul className="space-y-1">
                      {template.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-3">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                      <Download className="h-4 w-4 mr-2" />
                      ডাউনলোড করুন
                    </Button>
                    <Button variant="outline" className="flex-1">
                      প্রিভিউ দেখুন
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              টেমপ্লেট ব্যবহারের জন্য প্রয়োজন
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileSpreadsheet className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-medium">Google Sheets</h4>
                <p className="text-sm text-gray-600">বিনামূল্যে অনলাইন স্প্রেডশিট</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-medium">Microsoft Excel</h4>
                <p className="text-sm text-gray-600">কম্পিউটার বা মোবাইল অ্যাপ</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-medium">সাপোর্ট</h4>
                <p className="text-sm text-gray-600">বিনামূল্যে প্রশিক্ষণ ও সহায়তা</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
