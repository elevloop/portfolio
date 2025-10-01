"use client"
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">ElevLoop</div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Transforming businesses through innovative technology solutions that drive sustainable growth and competitive advantage.
            </p>
            <div className="text-gray-400">
              © 2024 ElevLoop. All rights reserved.
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-gray-300">
              <div>hello@elevloop.com</div>
              <div>+1 (555) 123-4567</div>
              <div>San Francisco, CA</div>
              <div>Remote Worldwide</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            Built with excellence. Delivered with passion.
          </div>
          <button
            onClick={scrollToTop}
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors duration-200 group"
          >
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;