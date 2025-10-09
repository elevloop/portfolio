"use-client";
import { Zap, Clock, Shield, Headphones, FileText, Users, Palette, Mail, UserCheck } from "lucide-react";

const AddOns = () => {
  const addOns = [
    {
      icon: Zap,
      name: "Post-Launch Support Package",
      duration: "30 / 60 / 90 days",
      description:
        "Continuous monitoring, quick fixes, and optimization after your project goes live.",
    },
    {
      icon: Clock,
      name: "Design-to-Code Conversion",
      duration: "Project-Based",
      description:
        "Convert your Figma or XD designs into pixel-perfect, responsive front-end code.",
    },
    {
      icon: Palette,
      name: "Brand Kit & Visual Assets",
      duration: "Monthly",
      description:
        "Get faster response times, weekly progress reports, and a dedicated project manager.",
    },
    {
      icon: FileText, 
      name: "Content & Copywriting",
      duration: "Project-Based",
      description:
        "Professionally written content for your website, app, or marketing, optimized for clarity and conversion.",
    },
    {
      icon: UserCheck,
      name: "Consultation",
      duration: "1-3 days",
      description:
        "Strategic technology consulting to align solutions with business goals.",
    },
    {
      icon: Palette,
      name: "Yearly Poster & Campaign Package",
      duration: "Annual Subscription",
      description:
        "12-month creative package with ready-to-post graphics for holidays, product launches, and brand events, perfect for social media consistency.",
    },
    {
      icon: Users,
      name: "Social Media Management",
      duration: "Monthly",
      description:
        "End-to-end management of your social platforms with design, scheduling, and performance tracking.",
    },
    {
      icon: Mail,
      name: "Email Marketing & Automation Setup",
      duration: "1–2 Weeks",
      description:
        "Automated email flows, newsletter templates, and CRM integrations.",
    },
  ];

  return (
    <section className="bg-white bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Add-ons & Extras
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your project with our specialized services and accelerated
            delivery options
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {addOns.map((addOn, index) => {
            const IconComponent = addOn.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="bg-primary/20 p-4 rounded-full w-fit mx-auto mb-6 group-hover:bg-primary transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary group-hover:text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {addOn.name}
                </h3>
                <div className="text-primary font-medium text-sm mb-4">
                  {addOn.duration}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {addOn.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AddOns;
