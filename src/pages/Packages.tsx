
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import packages from '@/data/packages';

const Packages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-20 bg-yatra-blue">
          <div className="absolute inset-0 opacity-20" 
               style={{ 
                 backgroundImage: 'url("https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80")', 
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Pilgrimage Packages</h1>
              <p className="text-white/90 text-lg">
                Discover our carefully curated spiritual journeys to the sacred Himalayan shrines. 
                Choose the divine experience that resonates with you.
              </p>
            </div>
          </div>
        </div>
        
        {/* Breadcrumbs */}
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm">
              <Link to="/" className="text-gray-600 hover:text-yatra-saffron transition-colors">Home</Link>
              <span className="mx-2 text-gray-400">›</span>
              <span className="text-gray-800">Packages</span>
            </div>
          </div>
        </div>
        
        {/* Packages Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <WhatsAppCTA packageName="our pilgrimage packages" />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Packages;
