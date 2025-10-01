import {industries} from "../data/industries"


const IndustriesSection = () => {
  return (
    <section id="industries" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
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
                className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 group cursor-pointer border hover:border-blue-200"
              >
                <div className="bg-white p-3 rounded-lg w-fit mb-4 group-hover:bg-blue-600 transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-900">
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