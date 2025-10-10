"use client"

import React from 'react';
import { ChevronUp, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

// Types
interface NavItem {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  icon: React.ElementType;
  href: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

const DEFAULT_CONTACT_INFO: ContactInfo = {
  email: 'hello@elevloop.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA • Remote Worldwide'
} as const;

interface FooterProps {
  contactInfo?: ContactInfo;
}

// Constants
const COMPANY_INFO = {
  name: 'ElevLoop',
  tagline: 'Transforming businesses through innovative technology solutions that drive sustainable growth and competitive advantage.',
  copyright: '© 2024 ElevLoop. All rights reserved.',
  motto: 'Built with excellence. Delivered with passion.'
} as const;

// Navigation Data
const NAV_ITEMS: readonly NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Work', href: '#portfolio' },
  { name: 'Contact', href: '#contact' }
] as const;

const SOCIAL_LINKS: readonly SocialLink[] = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/elevloop' },
  { name: 'Github', icon: Github, href: 'https://github.com/elevloop' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/elevloop' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/elevloop' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/elevloop' }
] as const;

// Utility functions
function throttle<Args extends unknown[]>(
  func: (...args: Args) => void,
  limit: number
): (...args: Args) => void {
  let inThrottle = false;
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return function (this: unknown, ...args: Args) {
    if (!inThrottle) {
      func.apply(this, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

// Sub-components
const CompanyInfo: React.FC = () => (
  <div>
    <div className="text-2xl font-bold text-accent mb-4">{COMPANY_INFO.name}</div>
    <p className="text-gray-300 leading-relaxed mb-6">
      {COMPANY_INFO.tagline}
    </p>
    <div className="text-gray-400">
      {COMPANY_INFO.copyright}
    </div>
  </div>
);

const QuickLinks: React.FC = () => {
  const scrollToSection = React.useCallback(
    throttle((href: string) => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Adjust based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 500),
    []
  );

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <nav className="space-y-3">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 w-full text-left"
          >
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

const ContactAndSocial: React.FC<{ contactInfo: ContactInfo }> = ({ contactInfo }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
    <div className="space-y-3 text-gray-300">
      {contactInfo.email && (
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-400 transition-colors duration-200">
            {contactInfo.email}
          </a>
        </div>
      )}
      {contactInfo.phone && (
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="hover:text-blue-400 transition-colors duration-200">
            {contactInfo.phone}
          </a>
        </div>
      )}
      {contactInfo.location && (
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{contactInfo.location}</span>
        </div>
      )}
    </div>

    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
      <div className="flex gap-4">
        {SOCIAL_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              aria-label={`Follow us on ${link.name}`}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = throttle(() => {
      setIsVisible(window.pageYOffset > 300);
    }, 250);

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = React.useCallback(
    throttle(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500),
    []
  );

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="cursor-pointer bg-accent text-white p-3 rounded-full hover:bg-accent transition-all duration-200 group opacity-100 translate-y-0"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
    </button>
  ) : null;
};

// Main Footer Component
const Footer: React.FC<FooterProps> = ({ contactInfo = DEFAULT_CONTACT_INFO }) => {

  return (
    <footer className="bg-primary/80 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <CompanyInfo />
          <QuickLinks />
          <ContactAndSocial contactInfo={contactInfo} />
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            {COMPANY_INFO.motto}
          </div>
          <ScrollToTopButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;