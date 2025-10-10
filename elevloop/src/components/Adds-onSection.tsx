"use client";

import { Zap, Clock, FileText, Users, Palette, Mail, UserCheck } from "lucide-react";
import { useState } from "react";

interface AddOn {
  icon: React.ElementType;
  name: string;
  duration: string;
  description: string;
  category: "design" | "development" | "marketing" | "support";
  startingPrice?: string;
}

const AddOns = () => {
  const addOns: AddOn[] = [
    {
      icon: Zap,
      name: "Post-Launch Support Package",
      duration: "30 / 60 / 90 days",
      description:
        "Continuous monitoring, quick fixes, and optimization after your project goes live.",
      category: "support",
      startingPrice: "$499/mo",
    },
    {
      icon: Clock,
      name: "Design-to-Code Conversion",
      duration: "Project-Based",
      description:
        "Convert your Figma or XD designs into pixel-perfect, responsive front-end code.",
      category: "development",
      startingPrice: "$999",
    },
    {
      icon: Palette,
      name: "Brand Kit & Visual Assets",
      duration: "Monthly",
      description:
        "Complete brand identity package with logos, style guides, and marketing materials.",
      category: "design",
      startingPrice: "$799",
    },
    {
      icon: FileText, 
      name: "Content & Copywriting",
      duration: "Project-Based",
      description:
        "Professionally written content for your website, app, or marketing, optimized for clarity and conversion.",
      category: "marketing",
      startingPrice: "$299",
    },
    {
      icon: UserCheck,
      name: "Technical Consultation",
      duration: "1-3 days",
      description:
        "Strategic technology consulting to align solutions with business goals.",
      category: "support",
      startingPrice: "$199/hr",
    },
    {
      icon: Palette,
      name: "Yearly Campaign Package",
      duration: "Annual Subscription",
      description:
        "12-month creative package with ready-to-post graphics for holidays, product launches, and brand events.",
      category: "design",
      startingPrice: "$4,999/yr",
    },
    {
      icon: Users,
      name: "Social Media Management",
      duration: "Monthly",
      description:
        "End-to-end management of your social platforms with design, scheduling, and performance tracking.",
      category: "marketing",
      startingPrice: "$899/mo",
    },
    {
      icon: Mail,
      name: "Email Marketing Setup",
      duration: "1–2 Weeks",
      description:
        "Automated email flows, newsletter templates, and CRM integrations.",
      category: "marketing",
      startingPrice: "$1,499",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", name: "All Services" },
    { id: "design", name: "Design" },
    { id: "development", name: "Development" },
    { id: "marketing", name: "Marketing" },
    { id: "support", name: "Support" }
  ];

  const filteredAddOns = selectedCategory === "all" 
    ? addOns 
    : addOns.filter(addon => addon.category === selectedCategory);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-primary">Add-ons &</span> <span className="text-accent">Extras</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your project with our specialized services and accelerated
            delivery options
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "cursor-pointer bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAddOns.map((addOn, index) => {
            const IconComponent = addOn.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-xl border border-gray-200 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 text-center"
              >
                {/* Category Tag */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex group-hover:bg-primary group-hover:text-white items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {addOn.category}
                  </span>
                </div>

                <div className="bg-gradient-to-br from-accent/20 to-accent/10 p-4 group-hover:bg-accent rounded-xl w-16 h-16 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-accent group-hover:text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {addOn.name}
                </h3>

                <div className="flex items-center justify-center gap-2 text-primary font-medium text-sm mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{addOn.duration}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {addOn.description}
                </p>

                {/* Price Tag */}
                <div className="mt-auto">
                  <div className="text-lg text-primary font-semibold group-hover:text-accent">
                    {addOn.startingPrice}
                  </div>
                  <div className="text-xs text-gray-500">Starting from</div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-accent/50 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AddOns;
