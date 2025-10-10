import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import Image from 'next/image';

const ProjectsSection = () => {


  return (
    <section id="portfolio" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
           <span className='text-accent'> Our</span> <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering measurable results through innovative technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-accent/20">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <Image 
                  width={400}
                  height={300}
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 z-20">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-accent text-xs font-medium">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="bg-green-50/50 border border-green-200/50 rounded-lg p-3 mb-4 transform group-hover:-translate-y-0.5 transition-all duration-300">
                  <div className="text-green-800 text-sm font-medium">{project.result}</div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {project.metrics.map((metric, metricIndex) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={metricIndex} className="group/metric relative overflow-hidden rounded-lg p-3 bg-gray-50/50 hover:bg-accent/5 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-accent mb-1.5 transform group-hover/metric:scale-110 transition-transform duration-300" />
                        <div className="text-lg font-bold text-gray-900 mb-0.5">{metric.value}</div>
                        <div className="text-xs text-gray-600 font-medium">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>

                <button className="w-full relative overflow-hidden px-4 py-2 rounded-lg text-primary font-medium group-hover:text-white transition-colors duration-300 group-hover:shadow-sm">
                  <span className="cursor-pointer relative z-10 flex items-center justify-center text-sm">
                    View Project Details
                    <ExternalLink className="ml-1.5 w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:scale-105 transition-all duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
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