"use client"

import { services } from "@/data/services";
import { ChevronRight } from "lucide-react";


const Services = () => {
  

  return (
    <section id="services" className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to elevate your business to new heights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-accent/20 p-3 rounded-lg group-hover:bg-accent transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.subServices.map((subService, subIndex) => (
                    <li key={subIndex} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {subService}
                    </li>
                  ))}
                </ul>

                <button className="cursor-pointer relative text-primary px-6 py-2.5 rounded-lg font-medium flex items-center overflow-hidden transition-all duration-300 group-hover:pl-7 group-hover:pr-5">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Learn More</span>
                  <ChevronRight className="ml-1 w-4 h-4 relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;