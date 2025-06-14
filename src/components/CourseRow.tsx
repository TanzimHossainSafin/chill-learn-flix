
import React from 'react';
import CourseCard from './CourseCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  rating: number;
  students: string;
  image: string;
  level: string;
}

interface CourseRowProps {
  title: string;
  courses: Course[];
}

const CourseRow: React.FC<CourseRowProps> = ({ title, courses }) => {
  const scrollLeft = () => {
    const container = document.getElementById(`scroll-${title.replace(/\s+/g, '-')}`);
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById(`scroll-${title.replace(/\s+/g, '-')}`);
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
        <div className="relative group">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div 
            id={`scroll-${title.replace(/\s+/g, '-')}`}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courses.map((course) => (
              <div key={course.id} className="flex-none w-80">
                <CourseCard {...course} />
              </div>
            ))}
          </div>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseRow;
