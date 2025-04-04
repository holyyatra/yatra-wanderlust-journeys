
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yatra-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-yatra-saffron rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <span className="text-xl font-bold text-white">
                Holy<span className="text-yatra-saffron">Yatra</span>
              </span>
            </div>
            <p className="mb-6 text-gray-300">
              Providing spiritual journeys to sacred destinations in the Himalayas.
              Experience divine bliss with our carefully crafted pilgrimage packages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-300 hover:text-white transition-colors">Packages</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Tour Packages */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Tour Packages</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/package/helicopter-kedarnath" className="text-gray-300 hover:text-white transition-colors">
                  Helicopter Yatra - Rishikesh to Kedarnath
                </Link>
              </li>
              <li>
                <Link to="/package/haridwar-kedarnath" className="text-gray-300 hover:text-white transition-colors">
                  Haridwar to Kedarnath
                </Link>
              </li>
              <li>
                <Link to="/package/char-dham" className="text-gray-300 hover:text-white transition-colors">
                  Char Dham Yatra
                </Link>
              </li>
              <li>
                <Link to="/package/kedarnath-badrinath" className="text-gray-300 hover:text-white transition-colors">
                  Kedarnath & Badrinath
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-yatra-saffron mt-1" />
                <span className="text-gray-300">
                  123 Pilgrimage Road, Rishikesh, Uttarakhand, India - 249201
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-yatra-saffron" />
                <a href="tel:+919XXXXXXXX" className="text-gray-300 hover:text-white transition-colors">
                  +91 9XXXXXXXX
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-yatra-saffron" />
                <a href="mailto:info@holyyatra.com" className="text-gray-300 hover:text-white transition-colors">
                  info@holyyatra.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HolyYatra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
