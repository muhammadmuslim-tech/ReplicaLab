import "./ContactHero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-grid" />

      <div className="contact-hero-container">
        <div className="contact-hero-label">
          <span>CONTACT</span>
          <span className="contact-hero-label-line" />
          <span>REPLICA LAB</span>
        </div>

        <h1>
          Let&apos;s Build Something
          <span> Intelligent Together</span>
        </h1>

        <p>
          Whether you&apos;re planning a new website, implementing AI
          solutions, automating business workflows, or exploring digital
          transformation, our team is ready to help you turn your ideas
          into reality.
        </p>

        {/* <div className="contact-hero-bottom">
          <span>PROJECT INQUIRIES</span>
          <span className="contact-hero-dot" />
          <span>APPLIED AI</span>
          <span className="contact-hero-dot" />
          <span>ENTERPRISE SYSTEMS</span>
        </div> */}
      </div>
    </section>
  );
}