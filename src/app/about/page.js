// import Navbar from "@/src/components/navbar/Navbar";
// import Footer from "@/src/components/footer/Footer";

import AboutHero from "@/src/components/About/AboutHero";
import MissionVision from "@/src/components/About/MissionVision";
import OurApproach from "@/src/components/About/OurApproach";
import WhyReplicaLab from "@/src/components/About/WhyReplicaLab";
import AIVision from "@/src/components/About/AIVision";
import TeamSection from "@/src/components/About/Team";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing";

export default function AboutPage() {
  return (
    <>
      {/* <Navbar /> */}

      <main className="about-page">
        <AboutHero />
        <MissionVision />
        <OurApproach />
        <WhyReplicaLab />
        <TeamSection/>
        <ServiceClosing/>
        {/* <AIVision /> */}
      </main>

      {/* <Footer /> */}
    </>
  );
}