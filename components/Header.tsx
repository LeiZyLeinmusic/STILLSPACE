import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-8 lg:px-12 flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'bg-[#EAE8E4]/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-8'
        }`}
      >
          
        {/* Brand Logo Section */}
        <Link 
          to="/"
          className="flex items-center group cursor-pointer select-none"
          onClick={() => setIsMenuOpen(false)}
        >
          <img 
            src="https://docs.google.com/drawings/d/e/2PACX-1vR3f5tZ4IVYYgeWxPslH3UVTBQYPTSpQHX9kuPh_prBswncRxtTMctZ3g6REcnHMqDJ6vXccH1NM-2z/pub?w=480&h=360" 
            alt="Stillspace Interior Design" 
            className={`transition-all duration-300 object-contain ${
              isScrolled ? 'h-7 md:h-10' : 'h-10 md:h-14'
            }`}
          />
        </Link>

        {/* Desktop Navigation - Top Right */}
        <nav className="hidden md:flex gap-6 lg:gap-12 mt-2">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.href || (location.pathname.startsWith(item.href) && item.href !== '/');
            return (
              <Link 
                key={item.label}
                to={item.href}
                className={`text-[11px] lg:text-[12px] tracking-[0.25em] font-geo uppercase transition-colors font-medium ${
                  isActive
                    ? 'text-[#ccb982]' 
                    : 'text-[#35473a] hover:text-[#ccb982]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-[#35473a] mt-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay - Moved outside header to avoid backdrop-filter context issues */}
      <div 
        className={`fixed inset-0 bg-[#EAE8E4] z-[60] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'
        }`}
      >
        <button 
          className="absolute top-8 right-8 p-2 text-[#35473a] hover:opacity-70 transition-opacity"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {NAV_ITEMS.map((item) => (
          <Link 
            key={item.label}
            to={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-lg tracking-[0.2em] text-[#35473a] font-geo uppercase"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};