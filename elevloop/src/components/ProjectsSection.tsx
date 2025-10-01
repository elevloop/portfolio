import { ExternalLink, TrendingUp, Clock, DollarSign } from 'lucide-react';
import Image from 'next/image';

const ProjectsSection = () => {
  const projects = [
    {
      type: "E-commerce Platform",
      name: "RetailMax Pro",
      description: "Complete e-commerce solution with inventory management and analytics dashboard.",
      result: "300% increase in online sales",
      image: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: [
        { icon: TrendingUp, value: "300%", label: "Sales Increase" },
        { icon: Clock, value: "50%", label: "Faster Loading" }
      ]
    },
    {
      type: "Healthcare App",
      name: "MediConnect",
      description: "Patient management system with telemedicine capabilities and secure messaging.",
      result: "40% improvement in patient engagement",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: [
        { icon: TrendingUp, value: "40%", label: "Engagement Up" },
        { icon: Clock, value: "24/7", label: "Availability" }
      ]
    },
    {
      type: "Fintech Solution",
      name: "PayFlow",
      description: "Digital payment platform with advanced fraud detection and compliance features.",
      result: "99.9% transaction success rate",
      image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: [
        { icon: DollarSign, value: "99.9%", label: "Success Rate" },
        { icon: TrendingUp, value: "60%", label: "Cost Reduction" }
      ]
    },
    {
      type: "Enterprise Software",
      name: "WorkflowPro",
      description: "Custom workflow automation platform for manufacturing operations.",
      result: "25% efficiency improvement",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: [
        { icon: TrendingUp, value: "25%", label: "Efficiency Up" },
        { icon: Clock, value: "40hrs", label: "Time Saved/Week" }
      ]
    },
    {
      type: "EdTech Platform",
      name: "LearnHub",
      description: "Interactive learning management system with AI-powered personalization.",
      result: "85% student completion rate",
      image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: [
        { icon: TrendingUp, value: "85%", label: "Completion Rate" },
        { icon: Clock, value: "50%", label: "Faster Learning" }
      ]
    },
    {
      type: "IoT Solution",
      name: "SmartFactory",
      description: "Industrial IoT platform for real-time monitoring and predictive maintenance.",
      result: "30% reduction in downtime",
      image: "https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: [
        { icon: TrendingUp, value: "30%", label: "Downtime Reduced" },
        { icon: DollarSign, value: "$2M", label: "Cost Savings" }
      ]
    }
  ];

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering measurable results through innovative technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 overflow-hidden">
                <Image 
                width={100}
                height={100}
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="text-accent font-medium text-sm mb-2">{project.type}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="text-green-800 font-medium text-sm">{project.result}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  {project.metrics.map((metric, metricIndex) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={metricIndex} className="text-center">
                        <IconComponent className="w-5 h-5 text-accent mx-auto mb-1" />
                        <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>

                <button className="w-full bg-gray-50 text-gray-700 py-2 px-4 rounded-lg hover:bg-primary/20 cursor-pointer hover:text-primary transition-colors duration-200 flex items-center justify-center group">
                  View Details
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;