"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Always show navbar at the top of the page
    if (currentScrollY < 50) {
      setIsAtTop(true);
      setIsVisible(true);
      return;
    }
    
    setIsAtTop(false);

    // Determine scroll direction and update visibility
    if (currentScrollY < lastScrollY) {
      // Scrolling up
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY + 10) {
      // Scrolling down (with a small threshold)
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);

    // Reset the auto-hide timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Set new timeout to hide navbar after 2 seconds of inactivity
    const timeout = setTimeout(() => {
      if (!isAtTop) {
        setIsVisible(false);
      }
    }, 2000);

    setScrollTimeout(timeout);
  };

  useEffect(() => {
    // Throttled scroll handler
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, isAtTop, scrollTimeout]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Work", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        ${!isAtTop ? 'backdrop-blur-md bg-white/90 shadow-lg' : 'bg-white shadow-sm border-b border-gray-100'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary">ElevLoop</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center justify-center space-x-12">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-gray-700 hover:text-accent cursor-pointer py-2 text-md font-medium transition-colors duration-200 group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary cursor-pointer text-white px-6 py-2 rounded-lg text-md font-medium hover:bg-accent transition-all duration-200 flex items-center group"
            >
              Contact Us
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-gray-700 hover:text-accent block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 group"
            >
              <span className="relative">
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('#contact')}
            className="bg-accent text-white px-3 py-2 rounded-lg text-base font-medium hover:bg-accent/90 transition-colors duration-200 w-full mt-4"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
