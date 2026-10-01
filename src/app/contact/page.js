// import Navbar from "@/src/components/navbar/Navbar";
// import Footer from "@/src/components/footer/Footer";

import ContactHero from "@/src/components/Contact/ContactHero";
import ContactChannels from "@/src/components/Contact/ContactChannels";
import ContactInquiry from "@/src/components/Contact/ContactInquiry";

export default function ContactPage() {
  return (
    <>
      {/* <Navbar /> */}

      <main>
        <ContactHero />
        <ContactChannels />
        <ContactInquiry />
      </main>

      {/* <Footer /> */}
    </>
  );
}