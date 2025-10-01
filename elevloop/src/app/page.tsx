import AddOns from "@/components/Adds-onSection";
import Commitments from "@/components/CommitmentsSection";
import CallToAction from "@/components/CTA-Section";
import Footer from "@/components/FooterSection";
import Industries from "@/components/IndustriesSection"
import Services from "@/components/ServicesSection";
export default function Home() {
  return (
    <div>
      <Industries/>
      <AddOns/>
      <Footer/>
      <Services/>
      <Commitments/>
      <CallToAction/>
    </div>
  );
}
