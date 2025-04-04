
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PackageCard from '@/components/PackageCard';
import Testimonials from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import packages from '@/data/packages';
import { MapPin, Calendar, Clock, Users, Check } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Package Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-heading mx-auto">Our Pilgrimage Packages</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our carefully curated packages for a divine journey to the holiest shrines in the Himalayas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  id={pkg.id}
                  title={pkg.title}
                  image={pkg.image}
                  duration={pkg.duration}
                  location={pkg.location}
                  description={pkg.description}
                  price={pkg.price}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/packages">
                <Button className="btn-primary">View All Packages</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* About Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-yatra-saffron font-medium">About Holy Yatra</span>
                <h2 className="section-heading">Your Trusted Partner for Spiritual Journeys</h2>
                <p className="text-gray-600 mb-6">
                  Holy Yatra is a premier travel agency specializing in pilgrimage journeys to the sacred destinations
                  in the Himalayas. With years of experience, we offer meticulously planned packages that combine
                  spiritual fulfillment with comfortable travel arrangements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-yatra-saffron/10 p-2 rounded-full mr-4">
                      <Users size={20} className="text-yatra-saffron" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Experienced Team</h3>
                      <p className="text-gray-600 text-sm">
                        Our guides and staff have extensive knowledge of the holy sites and rituals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yatra-saffron/10 p-2 rounded-full mr-4">
                      <Clock size={20} className="text-yatra-saffron" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Time-Tested Itineraries</h3>
                      <p className="text-gray-600 text-sm">
                        Carefully planned routes that maximize your spiritual experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yatra-saffron/10 p-2 rounded-full mr-4">
                      <MapPin size={20} className="text-yatra-saffron" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Complete Coverage</h3>
                      <p className="text-gray-600 text-sm">
                        From transport to accommodation, we take care of all aspects of your journey.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-yatra-saffron/10 p-2 rounded-full mr-4">
                      <Calendar size={20} className="text-yatra-saffron" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Flexible Scheduling</h3>
                      <p className="text-gray-600 text-sm">
                        We offer packages throughout the yatra season to suit your calendar.
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/about">
                  <Button className="btn-secondary">Learn More About Us</Button>
                </Link>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                  alt="Temple in the mountains" 
                  className="w-full h-auto rounded-lg shadow-lg z-10 relative"
                />
                <div className="absolute -bottom-6 -right-6 w-3/4 h-full bg-yatra-saffron/10 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-yatra-blue text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold relative pb-3 mb-8 inline-block">
                Why Choose Holy Yatra
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yatra-saffron rounded-full"></span>
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                We pride ourselves on providing the best spiritual journey experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-yatra-saffron/20 rounded-full flex items-center justify-center mb-4">
                  <Check size={24} className="text-yatra-saffron" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Safe & Secure Journey</h3>
                <p className="text-white/80">
                  Safety is our top priority. Our team ensures a secure travel experience with medical support available.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-yatra-saffron/20 rounded-full flex items-center justify-center mb-4">
                  <Check size={24} className="text-yatra-saffron" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Spiritual Guidance</h3>
                <p className="text-white/80">
                  Experienced guides provide insights into the spiritual significance of each location and ritual.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-yatra-saffron/20 rounded-full flex items-center justify-center mb-4">
                  <Check size={24} className="text-yatra-saffron" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comfortable Accommodations</h3>
                <p className="text-white/80">
                  We select the best available accommodations at each location for a comfortable stay during your journey.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-yatra-saffron/20 rounded-full flex items-center justify-center mb-4">
                  <Check size={24} className="text-yatra-saffron" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
                <p className="text-white/80">
                  We understand each pilgrim's needs are unique and offer personalized attention to each traveler.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-yatra-saffron/20 rounded-full flex items-center justify-center mb-4">
                  <Check size={24} className="text-yatra-saffron" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
                <p className="text-white/80">
                  Our team has decades of collective experience in organizing successful pilgrimages.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-yatra-saffron/20 rounded-full flex items-center justify-center mb-4">
                  <Check size={24} className="text-yatra-saffron" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                <p className="text-white/80">
                  No hidden costs. Our package prices are transparent with clear inclusions and exclusions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-yatra-stone to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-yatra-blue mb-6">Ready for Your Divine Journey?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Contact us today to book your pilgrimage package or customize a journey that suits your spiritual needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://wa.me/919XXXXXXXX?text=I'm%20interested%20in%20your%20Holy%20Yatra%20packages.%20Can%20you%20provide%20more%20details?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-6 px-8">
                    <svg className="w-6 h-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Contact on WhatsApp
                  </Button>
                </a>
                <Link to="/contact">
                  <Button className="btn-primary py-6 px-8">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
