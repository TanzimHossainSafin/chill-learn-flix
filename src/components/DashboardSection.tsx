
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, TrendingUp, Users, Package, DollarSign } from 'lucide-react';

const DashboardSection = () => {
  const [activeTab, setActiveTab] = useState('sales');

  const salesData = [
    { date: '২০২৪-০১-১৫', item: 'চাল', quantity: 5, price: 2500, total: 12500 },
    { date: '২০২৪-০১-১৫', item: 'ডাল', quantity: 2, price: 800, total: 1600 },
    { date: '২০২৪-০১-১৪', item: 'তেল', quantity: 1, price: 1200, total: 1200 },
  ];

  const customerCredit = [
    { name: 'রহিম মিয়া', amount: 2500, lastPurchase: '২০২৪-০১-১৫' },
    { name: 'করিম সাহেব', amount: 1800, lastPurchase: '২০২৪-০১-১৪' },
    { name: 'সালমা বেগম', amount: 950, lastPurchase: '২০২৪-০১-১৩' },
  ];

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            আপনার ব্যবসার ড্যাশবোর্ড
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            একনজরে দেখুন আপনার দোকানের সম্পূর্ণ চিত্র - বিক্রয়, স্টক এবং বাকির হিসাব।
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">আজকের বিক্রয়</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">৳১৫,৩০০</div>
              <p className="text-xs text-muted-foreground">
                গতকাল থেকে +২০.১%
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">মোট বাকি</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">৳৫,২৫০</div>
              <p className="text-xs text-muted-foreground">
                ১২ জন গ্রাহক
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">স্টক আইটেম</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">২৪৫</div>
              <p className="text-xs text-muted-foreground">
                ৮টি কম স্টক
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">মাসিক লাভ</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">৳৪৫,৮৯০</div>
              <p className="text-xs text-muted-foreground">
                গত মাস থেকে +১২%
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
          <Button
            onClick={() => setActiveTab('sales')}
            variant={activeTab === 'sales' ? 'default' : 'ghost'}
            className="flex-1"
          >
            বিক্রয় খাতা
          </Button>
          <Button
            onClick={() => setActiveTab('credit')}
            variant={activeTab === 'credit' ? 'default' : 'ghost'}
            className="flex-1"
          >
            বাকির খাতা
          </Button>
          <Button
            onClick={() => setActiveTab('add')}
            variant={activeTab === 'add' ? 'default' : 'ghost'}
            className="flex-1"
          >
            নতুন এন্ট্রি
          </Button>
        </div>

        {/* Tab Content */}
        {activeTab === 'sales' && (
          <Card>
            <CardHeader>
              <CardTitle>সাম্প্রতিক বিক্রয়</CardTitle>
              <CardDescription>আজকের বিক্রয়ের তালিকা</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">তারিখ</th>
                      <th className="text-left py-2">পণ্য</th>
                      <th className="text-left py-2">পরিমাণ</th>
                      <th className="text-left py-2">দর</th>
                      <th className="text-left py-2">মোট</th>
                    </tr>
                  </thead>
                  <tbody>
                    {salesData.map((sale, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2">{sale.date}</td>
                        <td className="py-2">{sale.item}</td>
                        <td className="py-2">{sale.quantity}</td>
                        <td className="py-2">৳{sale.price}</td>
                        <td className="py-2 font-semibold">৳{sale.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'credit' && (
          <Card>
            <CardHeader>
              <CardTitle>গ্রাহকদের বাকির তালিকা</CardTitle>
              <CardDescription>যাদের কাছে টাকা পাওনা</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customerCredit.map((customer, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <div className="font-semibold">{customer.name}</div>
                      <div className="text-sm text-gray-500">শেষ কেনাকাটা: {customer.lastPurchase}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-600">৳{customer.amount}</div>
                      <Button size="sm" variant="outline">পেমেন্ট</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'add' && (
          <Card>
            <CardHeader>
              <CardTitle>নতুন বিক্রয় এন্ট্রি</CardTitle>
              <CardDescription>নতুন বিক্রয়ের তথ্য যোগ করুন</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">পণ্যের নাম</label>
                  <Input placeholder="পণ্যের নাম লিখুন" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">পরিমাণ</label>
                  <Input type="number" placeholder="পরিমাণ" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">দর (প্রতি একক)</label>
                  <Input type="number" placeholder="দর" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">গ্রাহকের নাম</label>
                  <Input placeholder="গ্রাহকের নাম (ঐচ্ছিক)" />
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  <Plus className="h-4 w-4 mr-2" />
                  এন্ট্রি যোগ করুন
                </Button>
                <Button variant="outline">
                  বাকিতে বিক্রয়
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default DashboardSection;
