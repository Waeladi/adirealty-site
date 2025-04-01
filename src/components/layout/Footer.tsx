
import { Link } from 'react-router-dom';
import { Building, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-denver-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building size={24} className="text-adi-400" />
              <span className="text-xl font-semibold">ADI Realty</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premier real estate consultancy services in Denver, Colorado.
            </p>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <MapPin size={18} />
              <span>Denver, Colorado</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <Mail size={18} />
              <a href="mailto:info@adirealty.com" className="hover:text-adi-300 transition-colors">
                info@adirealty.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={18} />
              <a href="tel:+13031234567" className="hover:text-adi-300 transition-colors">
                (303) 123-4567
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-adi-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-adi-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-adi-300 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-adi-300 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#consultancy" className="text-gray-300 hover:text-adi-300 transition-colors">
                  Real Estate Consultancy
                </Link>
              </li>
              <li>
                <Link to="/services#property-management" className="text-gray-300 hover:text-adi-300 transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link to="/services#rentals" className="text-gray-300 hover:text-adi-300 transition-colors">
                  Rental Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} ADI Realty. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-adi-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-adi-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
