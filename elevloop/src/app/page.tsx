import AddOns from "@/components/Adds-onSection";
import Commitments from "@/components/CommitmentsSection";

import Footer from "@/components/FooterSection";
import Industries from "@/components/IndustriesSection"
import Services from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Contact from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <Industries/>
      <ProjectsSection/>
      <Commitments/>
      {/* <CallToAction/> */}
      <TestimonialsSection/>
      <AddOns/>
      <Contact/>
      <Footer/>
    </div>
  );
}
