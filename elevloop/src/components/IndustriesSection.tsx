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
    <section id="industries" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className='text-accent'>Market</span> <span className='text-primary'>Scope</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized solutions across diverse industries with deep domain expertise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-accent/5 transition-all duration-300 group cursor-pointer border hover:border-accent"
              >
                <div className="bg-white p-3 rounded-lg w-fit mb-4 group-hover:bg-accent transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-accent">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;