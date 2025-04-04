
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Link href="/" className="flex-shrink-0">
            <Image
              src="https://github.com/holyyatra/holyatraweb/blob/main/logohy.png?raw=true"
              alt="Holy Yatra Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-yatra-saffron transition-colors">Home</Link>
            <Link to="/packages" className="font-medium text-gray-700 hover:text-yatra-saffron transition-colors">Packages</Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-yatra-saffron transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+918757794679" 
              className="flex items-center text-yatra-blue hover:text-yatra-saffron transition-colors"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">+91 8757794679</span>
            </a>
            <Button className="btn-primary">Book Now</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/"
                className="font-medium text-gray-700 hover:text-yatra-saffron transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/packages"
                className="font-medium text-gray-700 hover:text-yatra-saffron transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Packages
              </Link>
              <Link 
                to="/contact"
                className="font-medium text-gray-700 hover:text-yatra-saffron transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t">
                <a 
                  href="tel:+918757794679" 
                  className="flex items-center text-yatra-blue hover:text-yatra-saffron transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  <span className="font-medium">+91 8757794679</span>
                </a>
                <Button className="btn-primary w-full">Book Now</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
