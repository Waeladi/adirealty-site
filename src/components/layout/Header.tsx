
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Building, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Building size={28} className="text-adi-600" />
            <span className="text-xl font-semibold text-denver-900">ADI Realty</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-denver-800 hover:text-adi-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-denver-800 hover:text-adi-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/services" className="text-denver-800 hover:text-adi-600 font-medium transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-denver-800 hover:text-adi-600 font-medium transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-adi-600 hover:bg-adi-700 text-white">
              <Link to="/contact">Get Consultation</Link>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-denver-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-denver-800 hover:text-adi-600 font-medium transition-colors py-2"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-denver-800 hover:text-adi-600 font-medium transition-colors py-2"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-denver-800 hover:text-adi-600 font-medium transition-colors py-2"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-denver-800 hover:text-adi-600 font-medium transition-colors py-2"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Button asChild className="bg-adi-600 hover:bg-adi-700 text-white w-full mt-2">
              <Link to="/contact" onClick={closeMenu}>Get Consultation</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
