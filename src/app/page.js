import Hero from "@/src/components/Home/Hero.jsx";
import HomeIntro from "@/src/components/Home/HomeIntro.jsx";
import TransformationCTA from "@/src/components/Home/TransformationCTA.jsx";
import Navbar from "../components/Navbar/Navbar";



export default function Home() {
  return (
    <main>
      {/* <Navbar/> */}
      <Hero />
      <HomeIntro />
      <TransformationCTA />
      {/* <ServicesHero /> */}
    </main>
  );
}