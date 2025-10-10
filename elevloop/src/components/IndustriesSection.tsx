"use client";

import { Building2, ShoppingCart, Heart, GraduationCap, Car, Home, Landmark, Gamepad2 } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: Building2,
      title: "Enterprise & SaaS",
      description: "Scalable solutions for growing businesses and software companies."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Digital commerce platforms that drive sales and customer engagement."
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Compliant healthcare technology solutions for better patient care."
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Learning management systems and educational technology platforms."
    },
    {
      icon: Car,
      title: "Automotive",
      description: "Connected vehicle solutions and automotive industry digitization."
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Property management and real estate technology solutions."
    },
    {
      icon: Landmark,
      title: "Financial Services",
      description: "Secure fintech solutions and banking technology platforms."
    },
    {
      icon: Gamepad2,
      title: "Entertainment",
      description: "Gaming platforms and entertainment industry digital solutions."
    }
  ];

  return (
    <section id="industries" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className='text-accent'>Market</span> <span className='text-primary'>Scope</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering specialized solutions across diverse industries with deep domain expertise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-accent/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="bg-accent/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-accent transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                    <IconComponent className="w-7 h-7 text-accent group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300">
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700">
                    {industry.description}
                  </p>

                  <div className="mt-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-accent text-sm font-medium inline-flex items-center">
                      Learn more 
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;