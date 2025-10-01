import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

const ProjectsSection = () => {

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
                <div className="text-blue-600 font-medium text-sm mb-2">{project.type}</div>
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
                        <IconComponent className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>

                <button className="w-full bg-gray-50 text-gray-700 py-2 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 flex items-center justify-center group">
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