"use client";
import commitments from "../data/commitments";
import { ArrowRight, Rocket } from 'lucide-react';

const Commitments = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      {/* Commitments Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-accent">Our</span> <span className="text-primary">Commitments</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At ElevLoop, we don't just deliver projects — we build lasting partnerships grounded in clarity, quality, and commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment: { title: string; description: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }, index: number) => {
                  const IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>> = commitment.icon;
                  return (
                    <div key={index} className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-accent/10 p-4 rounded-xl group-hover:bg-accent transform group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 ml-4 group-hover:text-accent transition-colors duration-300">
                          {commitment.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{commitment.description}</p>
                    </div>
                  );
                  })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-2xl">
                <Rocket className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join 150+ companies that trust us to deliver innovative solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-white text-primary cursor-pointer px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button 
                onClick={scrollToContact}
                className="w-full sm:w-auto border-2 border-white cursor-pointer text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commitments;