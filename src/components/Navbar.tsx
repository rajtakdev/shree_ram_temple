import React, { useState, useEffect } from 'react';
import { Menu, X, SunMoon } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <SunMoon size={28} className="text-orange-600" />
            <span className="text-xl md:text-2xl font-bold text-orange-600">श्री राम मंदिर</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" activeClass="text-orange-600">होम</Link>
            <Link href="/about">इतिहास</Link>
            <Link href="/virtual-tour">वर्चुअल टूर</Link>
            <Link href="/events">कार्यक्रम</Link>
            <Link href="/gallery">गैलरी</Link>
            <Link href="/visitor-info">यात्री जानकारी</Link>
            <Link href="/contact">संपर्क</Link>
            <Link 
              href="/donate" 
              className="bg-orange-600 text-white rounded-md px-4 py-2 transition-colors hover:bg-orange-700"
            >
              दान करें
            </Link>
          </div>
          
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <Link href="/" activeClass="text-orange-600" onClick={toggleMenu}>होम</Link>
              <Link href="/about" onClick={toggleMenu}>इतिहास</Link>
              <Link href="/virtual-tour" onClick={toggleMenu}>वर्चुअल टूर</Link>
              <Link href="/events" onClick={toggleMenu}>कार्यक्रम</Link>
              <Link href="/gallery" onClick={toggleMenu}>गैलरी</Link>
              <Link href="/visitor-info" onClick={toggleMenu}>यात्री जानकारी</Link>
              <Link href="/contact" onClick={toggleMenu}>संपर्क</Link>
              <Link 
                href="/donate" 
                className="bg-orange-600 text-white rounded-md px-4 py-2 transition-colors hover:bg-orange-700 inline-block"
                onClick={toggleMenu}
              >
                दान करें
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;