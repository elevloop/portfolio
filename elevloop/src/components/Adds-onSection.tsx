"use-client"
import { Zap, Clock, Shield, Headphones } from 'lucide-react';

const AddOns = () => {
  const addOns = [
    {
      icon: Zap,
      name: "Rapid Deployment",
      duration: "2-4 weeks",
      description: "Fast-track development with our agile methodology and dedicated teams."
    },
    {
      icon: Clock,
      name: "24/7 Support",
      duration: "Ongoing",
      description: "Round-the-clock technical support and maintenance for your applications."
    },
    {
      icon: Shield,
      name: "Security Plus",
      duration: "1-2 weeks",
      description: "Advanced security audits and penetration testing for maximum protection."
    },
    {
      icon: Headphones,
      name: "Consultation",
      duration: "1-3 days",
      description: "Strategic technology consulting to align solutions with business goals."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Add-ons & Extras
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your project with our specialized services and accelerated delivery options
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {addOns.map((addOn, index) => {
            const IconComponent = addOn.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 text-center group">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{addOn.name}</h3>
                <div className="text-blue-600 font-medium text-sm mb-4">{addOn.duration}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{addOn.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AddOns;