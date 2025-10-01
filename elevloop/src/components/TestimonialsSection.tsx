import { Star, Users, Award, TrendingUp } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      project: "E-commerce Platform",
      message: "ElevLoop transformed our entire digital infrastructure. Their team delivered a scalable e-commerce platform that increased our sales by 300% within six months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder",
      project: "Healthcare App",
      message: "The mobile app ElevLoop developed for us revolutionized patient care. The user experience is exceptional, and the compliance standards exceeded our expectations.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations",
      project: "Enterprise Software",
      message: "Working with ElevLoop was a game-changer. They automated our processes and delivered a custom solution that saved us 40 hours per week in manual work.",
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: "150+", label: "Happy Clients" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" }
  ];

  return (
    <section id="testimonials" className="bg-gray-50 py-20">
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
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                &apot;{testimonial.message}&apot;
              </p>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
                <div className="text-primary text-sm font-medium mt-1">
                  Project: {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Satisfaction Rate */}
        <div className="text-center mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-center mb-4">
            <Award className="w-12 h-12 text-primary" />
          </div>
          <div className="text-3xl font-bold text-primary mb-2">100%</div>
          <div className="text-gray-700 font-medium">Client Satisfaction Rate</div>
          <p className="text-gray-600 mt-2">Every project delivered on time and exceeding expectations</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;