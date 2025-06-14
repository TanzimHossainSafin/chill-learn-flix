
import React from 'react';
import { Clock, Star, Users } from 'lucide-react';

interface CourseCardProps {
  title: string;
  instructor: string;
  duration: string;
  rating: number;
  students: string;
  image: string;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  duration,
  rating,
  students,
  image,
  level
}) => {
  return (
    <div className="group relative bg-gray-900/50 rounded-lg overflow-hidden hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
          {level}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">{instructor}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
