
import React from 'react';
import { Heart, Brain, User, Baby } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "General Medicine",
      description: "Comprehensive primary care for common health concerns and routine check-ups.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Brain,
      title: "Mental Health",
      description: "Professional counseling and therapy sessions with licensed mental health experts.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: User,
      title: "Dermatology",
      description: "Skin condition consultations and treatment plans from certified dermatologists.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized care for children and adolescents with experienced pediatricians.",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access specialized healthcare services from the comfort of your home with our expert medical team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full ${service.color} flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
