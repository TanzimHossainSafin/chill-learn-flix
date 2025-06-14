
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CourseRow from '../components/CourseRow';
import CategorySection from '../components/CategorySection';

const sampleCourses = [
  {
    id: 1,
    title: "Complete React Development Course",
    instructor: "Sarah Johnson",
    duration: "12h 30m",
    rating: 4.8,
    students: "15.2k",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    level: "Intermediate"
  },
  {
    id: 2,
    title: "Python for Data Science",
    instructor: "Mike Chen",
    duration: "8h 45m",
    rating: 4.9,
    students: "22.1k",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    level: "Beginner"
  },
  {
    id: 3,
    title: "Advanced JavaScript Concepts",
    instructor: "Emma Davis",
    duration: "10h 15m",
    rating: 4.7,
    students: "18.7k",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    level: "Advanced"
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    instructor: "Alex Rodriguez",
    duration: "6h 20m",
    rating: 4.6,
    students: "12.3k",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    level: "Beginner"
  },
  {
    id: 5,
    title: "Machine Learning Basics",
    instructor: "Dr. Lisa Park",
    duration: "14h 10m",
    rating: 4.8,
    students: "9.8k",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    level: "Intermediate"
  },
  {
    id: 6,
    title: "Full Stack Development",
    instructor: "John Smith",
    duration: "20h 45m",
    rating: 4.9,
    students: "25.6k",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    level: "Advanced"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      
      <div className="space-y-8 pb-16">
        <CourseRow title="Trending Now" courses={sampleCourses} />
        <CategorySection />
        <CourseRow title="Continue Watching" courses={sampleCourses.slice(0, 4)} />
        <CourseRow title="Recommended for You" courses={sampleCourses.slice(2)} />
        <CourseRow title="New Releases" courses={sampleCourses.slice(1, 5)} />
      </div>
    </div>
  );
};

export default Index;
