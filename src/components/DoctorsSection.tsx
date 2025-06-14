
import React from 'react';
import { Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "General Medicine",
      rating: 4.9,
      experience: "15 years",
      image: "/placeholder.svg",
      available: true
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiology",
      rating: 4.8,
      experience: "12 years",
      image: "/placeholder.svg",
      available: true
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Dermatology",
      rating: 4.9,
      experience: "10 years",
      image: "/placeholder.svg",
      available: false
    },
    {
      name: "Dr. James Wilson",
      specialty: "Mental Health",
      rating: 4.7,
      experience: "8 years",
      image: "/placeholder.svg",
      available: true
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified healthcare professionals are ready to provide you with the best medical care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                  />
                  <div className={`absolute top-0 right-1/2 translate-x-8 w-4 h-4 rounded-full border-2 border-white ${
                    doctor.available ? 'bg-green-500' : 'bg-gray-400'
                  }`}></div>
                </div>
                <CardTitle className="text-lg">{doctor.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">{doctor.specialty}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">{doctor.rating}</span>
                  </div>
                  <span className="text-gray-600">{doctor.experience}</span>
                </div>
                <Button 
                  className={`w-full ${doctor.available ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}`}
                  disabled={!doctor.available}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  {doctor.available ? 'Book Appointment' : 'Unavailable'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
