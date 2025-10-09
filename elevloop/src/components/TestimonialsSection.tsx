import { Star, Users, Award, TrendingUp } from 'lucide-react';
import testimonials from '@/data/testimonials';

const TestimonialsSection = () => {


  const stats = [
    { icon: Users, value: "10+", label: "Happy Clients" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" }
  ];
// Website for development, pricing, Social Media mention in service, Tech Stack Consultation, local business in industries
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apot;t just take our word for it - hear what our clients say about their experience
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  <div className="text-gray-500 text-xs mt-1">{testimonial.company}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-base">
                "{testimonial.message}"
              </p>

              <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2"></div>
                <span className="text-xs font-semibold text-blue-700">
                  {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Satisfaction Rate */}
        <div className="text-center mt-16 bg-primary p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <Award className="w-12 h-12 text-accent" />
          </div>
          <div className="text-3xl font-bold text-accent mb-2">100%</div>
          <div className="text-gray-100 font-medium">Client Satisfaction Rate</div>
          <p className="text-gray-300 mt-2">Every project delivered on time and exceeding expectations</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;