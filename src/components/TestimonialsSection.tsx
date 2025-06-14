
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "মোহাম্মদ করিম",
      business: "করিম জেনারেল স্টোর",
      rating: 5,
      text: "ডিজিটাল খাতা ব্যবহার করার পর আমার দোকানের হিসাব রাখা অনেক সহজ হয়ে গেছে। আগে কাগজের খাতায় ভুল হতো, এখন সব স্বয়ংক্রিয় হিসাব হয়।",
      image: "/placeholder.svg"
    },
    {
      name: "সালমা বেগম",
      business: "সালমা ট্রেডার্স",
      rating: 5,
      text: "বাকির খাতা রাখা এখন খুবই সহজ। কোন গ্রাহকের কত টাকা বাকি আছে সব মোবাইলেই দেখতে পাই। গ্রাহকরাও খুশি কারণ হিসাব পরিষ্কার।",
      image: "/placeholder.svg"
    },
    {
      name: "আব্দুল রহমান",
      business: "রহমান ইলেকট্রনিক্স",
      rating: 5,
      text: "স্টক ব্যবস্থাপনা অনেক ভালো হয়েছে। কোন পণ্য কম হয়ে গেলে অ্যাপ জানিয়ে দেয়। ব্যবসায় অনেক উন্নতি হয়েছে।",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            দোকানদারদের মতামত
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আমাদের ডিজিটাল খাতা ব্যবহার করে সফল হওয়া দোকানদারদের সত্যিকারের অভিজ্ঞতা শুনুন।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-green-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.business}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            আপনিও সফল হন
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            হাজারো দোকানদার ইতিমধ্যে আমাদের ডিজিটাল খাতা ব্যবহার করে তাদের ব্যবসা আরও ভালোভাবে পরিচালনা করছেন। আপনিও যোগ দিন।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium">
              বিনামূল্যে শুরু করুন
            </button>
            <button className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-medium">
              ডেমো বুক করুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
