
import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AppointmentSection = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Book Your Appointment Today
            </h2>
            <p className="text-xl text-blue-100">
              Schedule a consultation with our expert doctors in just a few clicks. 
              Choose your preferred time and connect instantly.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-blue-200 mr-3" />
                <span className="text-blue-100">Flexible scheduling options</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-200 mr-3" />
                <span className="text-blue-100">Same-day appointments available</span>
              </div>
              <div className="flex items-center">
                <User className="h-6 w-6 text-blue-200 mr-3" />
                <span className="text-blue-100">Choose your preferred doctor</span>
              </div>
            </div>
          </div>

          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Schedule Consultation</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below to book your appointment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              
              <div className="space-y-2">
                <Label>Specialty</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Medicine</SelectItem>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="mental-health">Mental Health</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Preferred Date</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Preferred Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9am">9:00 AM</SelectItem>
                      <SelectItem value="11am">11:00 AM</SelectItem>
                      <SelectItem value="2pm">2:00 PM</SelectItem>
                      <SelectItem value="4pm">4:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Book Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
