"use client";

import Image from 'next/image';
import { Star, Users, TrendingUp } from 'lucide-react';
import testimonials from '@/data/testimonials';
import { useRef, useState, useCallback, useEffect } from 'react';


interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
}

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle mouse events for dragging
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  // Touch events for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  // Auto scroll effect with smooth infinite loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = scrollContainer.scrollLeft;
    const scrollSpeed = 0.3; // Reduced speed for smoother scrolling
    let lastTimestamp = performance.now();
    const gap = 32; // gap-8 = 2rem = 32px

    const scroll = (timestamp: number) => {
      if (!isDragging && scrollContainer) {
        const deltaTime = timestamp - lastTimestamp;
        scrollPosition += scrollSpeed * deltaTime * 0.06;

        // Calculate when we're close to the end (one item width before)
        const cardWidth = 320 + gap; // min-w-[320px] + gap-8
        const contentWidth = cardWidth * testimonials.length;
        
        if (scrollPosition >= contentWidth) {
          // Reset to the beginning but maintain the sub-pixel position
          scrollPosition = scrollPosition % cardWidth;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
        lastTimestamp = timestamp;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll(performance.now());
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDragging]);

  const stats: StatItem[] = [
    { icon: Users, value: "10+", label: "Happy Clients" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" }
  ];

  return (
    <section id="testimonials" className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className='text-accent'>Client</span> <span className="text-primary">Messages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients say about their experience
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-accent/20 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center">
                  <div className="bg-accent/10 p-4 rounded-xl group-hover:bg-accent transform group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4">
                    <div className="text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Scroll Section */}
        <div className="relative">
          {/* Fade Overlay Left */}
          <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />

          <div
            ref={scrollRef}
            className={`flex gap-8 overflow-x-auto pb-4 ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            } select-none relative scrollbar-none [&::-webkit-scrollbar]:hidden`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="group min-w-[320px] max-w-[350px] bg-white rounded-xl border border-gray-100 hover:border-accent/20 hover:shadow-xl transition-all duration-300 flex-shrink-0"
              >
                {/* Card Header */}
              <div className="p-6 pb-0">
                <div className="flex justify-between items-start mb-4">
                  <div className="inline-flex items-center px-3 py-1.5 bg-accent/5 border border-accent/20 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    <span className="text-xs font-semibold text-accent">
                      {testimonial.project}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="px-6 pb-4">
                <div className="relative">
                  <div className="text-gray-200 mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.240-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    "                    &quot;{testimonial.message}&quot;"
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-xl object-cover ring-2 ring-accent/10 group-hover:ring-accent/20 transition-all duration-300"
                  />
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
          
          {/* Fade Overlay Right */}
          <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        
      </div>
    </section>
  );
};

export default TestimonialsSection;
