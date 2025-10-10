'use client';

import { useState } from 'react';
import { Mail, MapPin, Clock, Phone, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className='text-primary'>Request</span><span className='text-accent'> Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Let&apot;s discuss how we can help elevate your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Send className="w-6 h-6 text-primary mr-2" />
              Request Service
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 text-gray-700 py-3 border border-gray-200 rounded-xl 
                      bg-gray-50/50 focus:ring-2 focus:ring-primary focus:border-transparent 
                      group-hover:border-primary/20 transition-all duration-200"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
              </div>

              </div>

              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-xl 
                    bg-gray-50/50 focus:ring-2 focus:ring-primary focus:border-transparent 
                    group-hover:border-primary/20 transition-all duration-200"
                  placeholder="your.email@company.com"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 text-gray-700 border border-gray-200 rounded-xl 
                    bg-gray-50/50 focus:ring-2 focus:ring-primary focus:border-transparent 
                    group-hover:border-primary/20 transition-all duration-200 resize-none"
                  placeholder="Tell us about your project requirements, timeline, and goals..."
                ></textarea>
              </div>

              {/* Form Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-2 animate-fadeIn">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-2 animate-fadeIn">
                  <XCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 px-6 rounded-xl font-semibold 
                  hover:bg-primary/90 transition-all duration-200 flex items-center justify-center 
                  group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Business Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                <MapPin className="w-6 h-6 text-accent mr-2" />
                Business Information
              </h3>
              
              <div className="space-y-6">
                <a href="mailto:hello@elevloop.com" 
                  className="flex items-start group hover:translate-x-2 transition-all duration-200">
                  <div className="bg-accent/10 p-3 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                    <Mail className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600 group-hover:text-primary">hello@elevloop.com</div>
                  </div>
                </a>

                <a href="tel:+15551234567" 
                  className="flex items-start group hover:translate-x-2 transition-all duration-200">
                  <div className="bg-accent/10 p-3 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                    <Phone className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-gray-600 group-hover:text-accent">+1 (555) 123-4567</div>
                  </div>
                </a>

                <div className="flex items-start group hover:translate-x-2 transition-all duration-200">
                  <div className="bg-accent/10 p-3 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                    <MapPin className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">
                      San Francisco, CA<br />Remote Worldwide
                    </div>
                  </div>
                </div>

                <div className="flex items-start group hover:translate-x-2 transition-all duration-200">
                  <div className="bg-accent/10 p-3 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                    <Clock className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">Business Hours</div>
                    <div className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      24/7 Support Available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent p-8 rounded-xl text-white transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold">Quick Response Guarantee</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                We respond to all inquiries within 2 hours during business hours. 
                For urgent matters, our 24/7 support team is always available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;