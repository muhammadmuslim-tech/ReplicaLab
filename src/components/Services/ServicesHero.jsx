import "./ServicesHero.css";

export default function ServicesHero() {
  return (
    <section className="services-hero">

      <div className="services-hero-inner">

        {/* Small Label */}
        {/* <span className="services-hero-label">
          REPLICA LAB / SERVICES
        </span> */}


        {/* Main Heading */}
        <h1 className="services-hero-title">
          Enterprise Services &amp; <span>Engineering</span> Capabilities.
        </h1>


        {/* Description */}
        <p className="services-hero-description">
          Replica Lab delivers end-to-end digital transformation, applied AI
          systems, workflow automation, and custom software architectures built
          for long-term organizational velocity.
        </p>

      </div>

    </section>
  );
}