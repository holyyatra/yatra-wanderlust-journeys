
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface PackageCardProps {
  id: string;
  title: string;
  image: string;
  duration: string;
  location: string;
  description: string;
  price: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  id,
  title,
  image,
  duration,
  location,
  description,
  price,
}) => {
  return (
    <div className="package-card group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-yatra-saffron text-white px-3 py-1 rounded-full text-sm font-medium">
          {price}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-yatra-blue mb-2">{title}</h3>
        
        <div className="flex flex-col gap-2 mb-3 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-yatra-saffron" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-yatra-saffron" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <Link 
          to={`/package/${id}`}
          className="inline-block btn-primary w-full text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
