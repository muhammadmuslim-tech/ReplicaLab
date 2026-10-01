import "./TechnologiesHero.css";

export default function TechnologiesHero() {
  return (
    <section className="technologies-hero">
      <div className="hero-grid"></div>

      <div className="hero-content">
        <span className="hero-eyebrow"></span>

        <h1>
          Technologies That Power Digital 
          <span>Innovation</span>
        </h1>

        <p>
          A comprehensive showcase of modern frameworks, intelligent AI
          models, cloud infrastructure, databases, automation platforms,
          and digital technologies powering enterprise solutions.
        </p>

        <div className="hero-line">
          <span></span>
          {/* <small>60+ TECHNOLOGIES · 11 DOMAINS · ONE ECOSYSTEM</small> */}
          <span></span>
        </div>
      </div>
    </section>
  );
}