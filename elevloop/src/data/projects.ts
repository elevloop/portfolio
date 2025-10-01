import { ExternalLink, TrendingUp, Clock, DollarSign } from 'lucide-react';

export const projects = [
    {
      type: "E-commerce Platform",
      name: "RetailMax Pro",
      description: "Complete e-commerce solution with inventory management and analytics dashboard.",
      result: "300% increase in online sales",
      image: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: [
        { icon: TrendingUp, value: "300%", label: "Sales Increase" },
        { icon: Clock, value: "50%", label: "Faster Loading" }
      ]
    },
    {
      type: "Healthcare App",
      name: "MediConnect",
      description: "Patient management system with telemedicine capabilities and secure messaging.",
      result: "40% improvement in patient engagement",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: [
        { icon: TrendingUp, value: "40%", label: "Engagement Up" },
        { icon: Clock, value: "24/7", label: "Availability" }
      ]
    },
    {
      type: "Fintech Solution",
      name: "PayFlow",
      description: "Digital payment platform with advanced fraud detection and compliance features.",
      result: "99.9% transaction success rate",
      image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: [
        { icon: DollarSign, value: "99.9%", label: "Success Rate" },
        { icon: TrendingUp, value: "60%", label: "Cost Reduction" }
      ]
    },
    {
      type: "Enterprise Software",
      name: "WorkflowPro",
      description: "Custom workflow automation platform for manufacturing operations.",
      result: "25% efficiency improvement",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: [
        { icon: TrendingUp, value: "25%", label: "Efficiency Up" },
        { icon: Clock, value: "40hrs", label: "Time Saved/Week" }
      ]
    },
    {
      type: "EdTech Platform",
      name: "LearnHub",
      description: "Interactive learning management system with AI-powered personalization.",
      result: "85% student completion rate",
      image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: [
        { icon: TrendingUp, value: "85%", label: "Completion Rate" },
        { icon: Clock, value: "50%", label: "Faster Learning" }
      ]
    },
    {
      type: "IoT Solution",
      name: "SmartFactory",
      description: "Industrial IoT platform for real-time monitoring and predictive maintenance.",
      result: "30% reduction in downtime",
      image: "https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=800",
      metrics: [
        { icon: TrendingUp, value: "30%", label: "Downtime Reduced" },
        { icon: DollarSign, value: "$2M", label: "Cost Savings" }
      ]
    }
  ];
