import { Code, Smartphone, Cloud, BarChart3, Shield, Zap, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built to scale with your business needs and drive operational efficiency.",
      subServices: ["Web Applications", "Enterprise Software", "API Development", "System Integration"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions that engage users and deliver exceptional experiences.",
      subServices: ["iOS Development", "Android Development", "React Native", "Flutter"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize performance and reduce costs.",
      subServices: ["AWS/Azure Setup", "Cloud Migration", "DevOps", "Serverless Architecture"],
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
      subServices: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Reporting Systems"],
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      subServices: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"],
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Strategic consulting to modernize your business processes and technology infrastructure.",
      subServices: ["Process Automation", "Legacy Modernization", "Digital Strategy", "Change Management"],
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
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
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.subServices.map((subService, subIndex) => (
                    <li key={subIndex} className="flex items-center text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {subService}
                    </li>
                  ))}
                </ul>

                <button className="text-blue-600 font-medium flex items-center group-hover:text-blue-700 transition-colors duration-200">
                  Learn More
                  <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
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