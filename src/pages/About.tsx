
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { Users, Award, Shield, Clock, Heart, Map } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative py-20 bg-yatra-blue">
          <div className="absolute inset-0 opacity-20" 
               style={{ 
                 backgroundImage: 'url("https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80")', 
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Holy Yatra</h1>
              <p className="text-white/90 text-lg">
                Learn about our journey in facilitating divine experiences through meticulously planned pilgrimages
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
              <span className="text-gray-800">About</span>
            </div>
          </div>
        </div>
        
        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80" 
                  alt="Holy Yatra Team" 
                  className="w-full h-auto rounded-lg shadow-lg z-10 relative"
                />
                <div className="absolute -top-6 -left-6 w-3/4 h-full bg-yatra-saffron/10 rounded-lg -z-10"></div>
              </div>
              <div>
                <span className="text-yatra-saffron font-medium">Our Story</span>
                <h2 className="section-heading">Facilitating Divine Journeys Since 2010</h2>
                <p className="text-gray-600 mb-6">
                  Holy Yatra was founded with a simple yet profound mission: to help pilgrims connect with the divine through 
                  well-organized spiritual journeys to the sacred Himalayan shrines. What started as a small operation with a handful of 
                  dedicated guides has now grown into a trusted name in pilgrimage travel services.
                </p>
                <p className="text-gray-600 mb-6">
                  Our founder, Raj Sharma, after his own transformative Char Dham Yatra experience, recognized the challenges pilgrims 
                  face during these journeys. He assembled a team of experienced guides, travel experts, and spiritual advisors to create 
                  packages that address these challenges while preserving the spiritual essence of the pilgrimage.
                </p>
                <p className="text-gray-600">
                  Today, Holy Yatra has successfully guided thousands of pilgrims from across India and beyond, helping them experience 
                  the divine energy of these sacred places. Our commitment to safety, comfort, and spiritual fulfillment remains at the 
                  core of everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-yatra-saffron/10 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-yatra-saffron" />
                </div>
                <h3 className="text-2xl font-bold text-yatra-blue mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To facilitate transformative spiritual experiences by providing safe, comfortable, and well-organized pilgrimages 
                  to sacred destinations. We aim to handle all logistical aspects so our pilgrims can focus entirely on their 
                  spiritual journey and divine connection.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-yatra-saffron/10 rounded-full flex items-center justify-center mb-6">
                  <Map className="w-8 h-8 text-yatra-saffron" />
                </div>
                <h3 className="text-2xl font-bold text-yatra-blue mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the most trusted pilgrimage travel service in India, known for our commitment to spiritual authenticity, 
                  traveler safety, and exceptional service. We envision creating a community of pilgrims who share their transformative 
                  experiences and inspire others to embark on their own spiritual journeys.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-heading mx-auto">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at Holy Yatra
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yatra-saffron/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-yatra-saffron" />
                </div>
                <h3 className="text-xl font-bold text-yatra-blue mb-3">Safety & Security</h3>
                <p className="text-gray-600">
                  The well-being of our pilgrims is our top priority. We implement comprehensive safety measures and provide necessary 
                  medical support throughout the journey.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yatra-saffron/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-yatra-saffron" />
                </div>
                <h3 className="text-xl font-bold text-yatra-blue mb-3">Spiritual Authenticity</h3>
                <p className="text-gray-600">
                  We preserve and respect the spiritual significance of each destination and ritual, ensuring an authentic pilgrimage experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yatra-saffron/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-yatra-saffron" />
                </div>
                <h3 className="text-xl font-bold text-yatra-blue mb-3">Inclusive Service</h3>
                <p className="text-gray-600">
                  We welcome pilgrims from all backgrounds and provide personalized support to address diverse needs and preferences.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yatra-saffron/10 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-yatra-saffron" />
                </div>
                <h3 className="text-xl font-bold text-yatra-blue mb-3">Punctuality & Reliability</h3>
                <p className="text-gray-600">
                  We adhere to schedules and commitments, ensuring a smooth and predictable journey for our pilgrims.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yatra-saffron/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-yatra-saffron" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yatra-blue mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">
                  We maintain complete transparency in our pricing, with no hidden costs or unexpected expenses for our pilgrims.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yatra-saffron/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-yatra-saffron" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yatra-blue mb-3">Personal Growth</h3>
                <p className="text-gray-600">
                  We believe in the transformative power of pilgrimages and strive to create experiences that facilitate personal and spiritual growth.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-heading mx-auto">Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the dedicated professionals who make your pilgrimage experience exceptional
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/42.jpg" 
                  alt="Raj Sharma - Founder & CEO" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yatra-blue">Raj Sharma</h3>
                  <p className="text-gray-600 mb-4">Founder & CEO</p>
                  <p className="text-gray-600 text-sm">
                    A passionate pilgrim with over 20 years of experience in organizing spiritual journeys.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 text-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/42.jpg" 
                  alt="Priya Patel - Operations Manager" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yatra-blue">Priya Patel</h3>
                  <p className="text-gray-600 mb-4">Operations Manager</p>
                  <p className="text-gray-600 text-sm">
                    Ensures smooth execution of all pilgrimages with meticulous attention to detail.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Amar Singh - Head Guide" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yatra-blue">Amar Singh</h3>
                  <p className="text-gray-600 mb-4">Head Guide</p>
                  <p className="text-gray-600 text-sm">
                    An expert on Himalayan pilgrimages with deep knowledge of local traditions and routes.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 text-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="Lakshmi Iyer - Customer Relations" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-yatra-blue">Lakshmi Iyer</h3>
                  <p className="text-gray-600 mb-4">Customer Relations</p>
                  <p className="text-gray-600 text-sm">
                    Dedicated to ensuring each pilgrim receives personalized attention and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <WhatsAppCTA packageName="our pilgrimage services" />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
