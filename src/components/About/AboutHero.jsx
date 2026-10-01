import "./AboutHero.css";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-grid" />

      <div className="about-hero-inner">
        <div className="about-hero-eyebrow">
          <span className="about-hero-eyebrow-line" />
          <span>REPLICA LAB</span>
          <span className="about-hero-eyebrow-line" />
        </div>

        <h1 className="about-hero-title">
          <span className="about-hero-title-line">
            An Applied AI & 
          </span>

          <span className="about-hero-title-line about-hero-title-second">
            <span className="about-hero-highlight">
              Digital Transformation
            </span>{" "}
            <span className="about-hero-dark">
              Studio.
            </span>
          </span>
        </h1>

        <p className="about-hero-description">
          Replica Lab is an Applied AI &amp; Digital Transformation Studio
          that helps organizations modernize operations through intelligent
          software solutions.
        </p>

        <div className="about-hero-bottom">
          <span>APPLIED AI</span>
          <span className="about-hero-dot" />

          <span>DIGITAL TRANSFORMATION</span>
          <span className="about-hero-dot" />

          <span>ENTERPRISE SOFTWARE</span>
        </div>
      </div>

      <div className="about-hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="about-hero-scroll-line" />
      </div>
    </section>
  );
}