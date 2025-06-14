
import React from 'react';
import { Video, Smartphone, Lock, Clock, Users, FileText } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Video Consultations",
      description: "High-quality video calls with doctors for face-to-face consultations from anywhere."
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Access healthcare on-the-go with our user-friendly mobile application."
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "End-to-end encryption ensures your medical data stays completely private."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock access to healthcare professionals whenever you need them."
    },
    {
      icon: Users,
      title: "Specialist Network",
      description: "Connect with specialists across various medical fields and specialties."
    },
    {
      icon: FileText,
      title: "Digital Prescriptions",
      description: "Receive electronic prescriptions and medical records instantly."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose TeleMedica?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience healthcare that adapts to your lifestyle with our cutting-edge telemedicine platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <feature.icon className="h-8 w-8 text-blue-600" />
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
