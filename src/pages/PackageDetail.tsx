
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, MapPin, DollarSign, Check, X, Camera, Info } from 'lucide-react';
import packages from '@/data/packages';
import { useNavigate } from 'react-router-dom';

const PackageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const packageData = packages.find(pkg => pkg.id === id);
  
  useEffect(() => {
    if (!packageData) {
      navigate('/not-found');
    }
    
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, [packageData, navigate]);
  
  if (!packageData) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[50vh] md:h-[60vh]">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('${packageData.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          
          {/* Discount Badge */}
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg animate-pulse">
              Special Discount!
            </div>
          </div>
          
          <div className="container mx-auto px-4 h-full flex items-end pb-16 relative z-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
                <span className="text-white/60">›</span>
                <Link to="/packages" className="text-white/80 hover:text-white transition-colors">Packages</Link>
                <span className="text-white/60">›</span>
                <span className="text-white">{packageData.title}</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{packageData.title}</h1>
              <p className="text-xl text-white/90 mb-6">{packageData.subtitle}</p>
              
              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-yatra-saffron" />
                  <span>{packageData.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2 text-yatra-saffron" />
                  <span>{packageData.location}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign size={20} className="mr-2 text-yatra-saffron" />
                  <span>{packageData.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Package Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="w-full grid grid-cols-4 mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="p-6 bg-white rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-bold text-yatra-blue mb-4">Package Overview</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{packageData.overview}</p>
                  
                  <h4 className="text-xl font-bold text-yatra-blue mb-4">Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {packageData.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <Check size={20} className="text-yatra-saffron mt-1 mr-3 shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="itinerary" className="p-6 bg-white rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-bold text-yatra-blue mb-4">Detailed Itinerary</h3>
                  
                  <div className="space-y-8">
                    {packageData.itinerary.map((day, index) => (
                      <div key={index} className="relative pl-8 border-l-2 border-yatra-saffron/30">
                        <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-yatra-saffron"></div>
                        
                        <div className="mb-2">
                          <span className="inline-block bg-yatra-saffron/10 text-yatra-saffron px-3 py-1 rounded-full text-sm font-medium">
                            Day {day.day}
                          </span>
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{day.title}</h4>
                        <p className="text-gray-700 mb-4">{day.description}</p>
                        
                        {day.meals && (
                          <div className="mb-2">
                            <span className="font-medium text-gray-800">Meals:</span> {day.meals.join(', ')}
                          </div>
                        )}
                        
                        {day.accommodation && (
                          <div>
                            <span className="font-medium text-gray-800">Accommodation:</span> {day.accommodation}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="inclusions" className="p-6 bg-white rounded-lg shadow-sm border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-yatra-blue mb-4 flex items-center">
                        <Check size={20} className="text-green-500 mr-2" /> 
                        Inclusions
                      </h3>
                      <ul className="space-y-3">
                        {packageData.inclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={18} className="text-green-500 mt-1 mr-3 shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-yatra-blue mb-4 flex items-center">
                        <X size={20} className="text-red-500 mr-2" /> 
                        Exclusions
                      </h3>
                      <ul className="space-y-3">
                        {packageData.exclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <X size={18} className="text-red-500 mt-1 mr-3 shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="gallery" className="p-6 bg-white rounded-lg shadow-sm border">
                  <h3 className="text-2xl font-bold text-yatra-blue mb-4 flex items-center">
                    <Camera size={24} className="mr-2 text-yatra-blue" /> 
                    Photo Gallery
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {packageData.gallery.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`${packageData.title} - Image ${index + 1}`} 
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* WhatsApp CTA */}
              <div className="mt-8">
                <WhatsAppCTA packageName={packageData.title} />
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
                <h3 className="text-xl font-bold text-yatra-blue mb-4">Book This Package</h3>
                <div className="flex items-center mb-2">
                  <p className="text-3xl font-bold text-yatra-saffron">{packageData.price}</p>
                  <span className="ml-3 line-through text-gray-400">₹45,999</span>
                </div>
                <p className="text-gray-500 mb-2">per person</p>
                <p className="text-red-600 font-bold mb-6">Limited Time Seasonal Discount!</p>
                
                <a 
                  href={`https://wa.me/918757794679?text=I'm%20interested%20in%20your%20${encodeURIComponent(packageData.title)}%20package.%20Can%20you%20provide%20more%20details?`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 mb-4">
                    <svg className="w-5 h-5 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Enquire on WhatsApp
                  </Button>
                </a>
                
                <Link to="/contact" className="block w-full">
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </Link>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock size={20} className="mr-3 text-yatra-saffron" />
                    <div>
                      <p className="font-medium text-gray-800">Duration</p>
                      <p className="text-gray-600">{packageData.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin size={20} className="mr-3 text-yatra-saffron" />
                    <div>
                      <p className="font-medium text-gray-800">Destinations</p>
                      <p className="text-gray-600">{packageData.location}</p>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <div className="flex">
                    <Info size={20} className="text-blue-600 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-800 mb-1">Need Help?</p>
                      <p className="text-gray-600 text-sm mb-2">
                        Contact our travel experts for any questions about this package.
                      </p>
                      <p className="font-medium text-gray-800">+91 8757794679</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Packages */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-heading">Other Packages You May Like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages
                .filter(pkg => pkg.id !== id)
                .slice(0, 3)
                .map(pkg => (
                  <div key={pkg.id} className="package-card">
                    <div className="relative overflow-hidden">
                      <img 
                        src={pkg.image} 
                        alt={pkg.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-yatra-saffron text-white px-3 py-1 rounded-full text-sm font-medium">
                        {pkg.price}
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-yatra-blue mb-2">{pkg.title}</h3>
                      
                      <div className="flex flex-col gap-2 mb-3 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock size={16} className="mr-2 text-yatra-saffron" />
                          <span>{pkg.duration}</span>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/package/${pkg.id}`}
                        className="inline-block btn-primary w-full text-center"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PackageDetail;
