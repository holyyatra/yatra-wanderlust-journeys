
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yatra-blue/90 to-yatra-blue/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative py-16 md:py-0">
        <div className="max-w-xl">
          <span className="bg-yatra-saffron/20 text-yatra-saffron px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">
            Experience Divine Journey
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Sacred Pilgrimage Journey
          </h1>
          <p className="text-white/90 text-lg mb-8">
            Embark on a spiritual journey to the sacred Himalayan temples with our 
            carefully curated packages for Char Dham Yatra, Kedarnath, Badrinath and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/packages">
              <Button className="btn-primary text-lg px-8 py-6">
                Explore Packages
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-8 right-0 left-0 h-16 bg-white transform rotate-2 scale-110 z-0"></div>
    </div>
  );
};

export default Hero;
