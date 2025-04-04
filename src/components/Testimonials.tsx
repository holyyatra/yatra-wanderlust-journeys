
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
  
}

const testimonials: TestimonialProps[] = [
  {
    quote: "The helicopter ride to Kedarnath was breathtaking! Holy Yatra made everything so smooth and the experience was truly divine.",
    name: "Rajesh Sharma",
    title: "Delhi",
    rating: 5,
    
  },
  {
    quote: "Our Char Dham Yatra with Holy Yatra was meticulously planned. The guides were knowledgeable and accommodations were comfortable.",
    name: "Priya Patel",
    title: "Mumbai",
    rating: 5,
    
  },
  {
    quote: "The Kedarnath and Badrinath package was perfect for our family. The team was responsive and took care of all our needs during the journey.",
    name: "Amit Singh",
    title: "Bangalore",
    rating: 4,
    
  }
];

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, rating, image }) => {
  return (
    <Card className="h-full bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-4 items-start mb-4">
          
          <div>
            <h4 className="font-semibold text-gray-800">{name}</h4>
            <p className="text-gray-500 text-sm">{title}</p>
            <div className="flex mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  size={16}
                  className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600 italic">"{quote}"</p>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading mx-auto">What Our Pilgrims Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our customers who have experienced the divine journey with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
