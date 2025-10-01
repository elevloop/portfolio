import IndustriesSection from "@/components/IndustriesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Contact from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <IndustriesSection/>
      <ProjectsSection/>
      <TestimonialsSection/>
      <Contact/>
    </div>
  );
}
