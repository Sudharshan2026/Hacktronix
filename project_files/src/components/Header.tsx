import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b border-red-900/30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* College logo placeholder */}
          <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center overflow-hidden">
            <span className="text-xs font-bold">SSEC</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
            Hacktronix 1.0
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-red-900/30">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false, setIsMenuOpen = () => {} }) => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Event', href: '#event' },
    { name: 'Organizer', href: '#organizer' }
  ];

  return links.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className={`${
        mobile 
          ? 'block py-2 px-4 hover:bg-red-900/20 rounded transition-colors' 
          : 'text-gray-300 hover:text-white transition-colors relative group'
      }`}
      onClick={() => mobile && setIsMenuOpen(false)}
    >
      {link.name}
      {!mobile && (
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
      )}
    </a>
  ));
};

export default Header;