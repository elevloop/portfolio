"use client";

import { ChevronRight, Clock, Award } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            We <span className="text-primary">Elevate</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Transforming businesses through innovative technology solutions that drive sustainable growth and competitive advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-primary cursor-pointer text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-800 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl"
            >
              Book a 1:1 Call
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button 
              onClick={() => scrollToSection('#portfolio')}
              className="border-2 cursor-pointer border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-primary-900 hover:text-primary-900 transition-all duration-200"
            >
              Our Work
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex items-center bg-gray-50 px-6 py-3 rounded-full">
              <Clock className="w-5 h-5 text-accent mr-2" />
              <span className="text-gray-700 font-medium">24/7 Availability</span>
            </div>
            <div className="flex items-center bg-gray-50 px-6 py-3 rounded-full">
              <Award className="w-5 h-5 text-accent mr-2" />
              <span className="text-gray-700 font-medium">100% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;