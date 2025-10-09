"use client";

import { ChevronRight, Clock, Award } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-white py-30 lg:py-40">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            We <span className="text-accent">Elevate</span> your vision and keep you in the{" "}
            <span>
              <Image
                src="/loop.png"
                alt="Globe"
                width={120}
                height={120}
                style={{ display: "inline", verticalAlign: "middle" }}
              />
            </span>{" "}
          </h1>

          <p className="text-xs md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Transforming businesses through innovative technology solutions that
            drive sustainable growth and competitive advantage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://calendly.com/iamkhalil2005/30min" // Replace with your actual Calendly link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary cursor-pointer text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-800 transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl no-underline"
              style={{ display: 'inline-flex' }}
            >
              Book a 1:1 Call
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <button
              onClick={() => scrollToSection("#portfolio")}
              className="border-2 cursor-pointer border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-accent hover:text-accent transition-all duration-200"
            >
              Our Work
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border border-gray-100 hover:shadow-[inset_0_3px_6px_rgba(0,0,0,0.15)] transition-shadow duration-300">
              <Clock className="w-5 h-5 text-accent mr-2" />
              <span className="text-gray-700 text-md font-semibold">
                24/7 Availability
              </span>
            </div>
            <div className="flex items-center bg-white px-6 py-3 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border border-gray-100 hover:shadow-[inset_0_3px_6px_rgba(0,0,0,0.15)] transition-shadow duration-300">
              <Award className="w-5 h-5 text-accent mr-2" />
              <span className="text-gray-700 text-md font-semibold">
                100% Client Satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;