"use client"
import { ArrowRight, Rocket } from 'lucide-react';

const CallToAction = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* First CTA Section */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <Rocket className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Join 150+ companies that trust us to deliver innovative solutions that drive real results.
          </p>
          <div className='flex gap-40 '>
          <button 
            onClick={scrollToContact}
            className="bg-white text-primary cursor-pointer px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-200 inline-flex items-center shadow-lg hover:shadow-xl group"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <button 
            onClick={scrollToContact}
            className="border-2 border-primary cursor-pointer text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200 inline-flex items-center group"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default CallToAction;