import Link from "next/link";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">

      {/* =====================================================
          ANIMATED BACKGROUND GRID
      ===================================================== */}

      <div className="hero-grid" aria-hidden="true">

        {/* Main moving grid */}
        <div className="hero-grid-lines"></div>

        {/* Secondary moving grid */}
        <div className="hero-grid-lines hero-grid-lines-secondary"></div>

        {/* Moving scan line */}
        <div className="hero-grid-scan"></div>

        {/* Animated data points */}
        <span className="hero-grid-point hero-grid-point-1"></span>
        <span className="hero-grid-point hero-grid-point-2"></span>
        <span className="hero-grid-point hero-grid-point-3"></span>
        <span className="hero-grid-point hero-grid-point-4"></span>
        <span className="hero-grid-point hero-grid-point-5"></span>
        <span className="hero-grid-point hero-grid-point-6"></span>

      </div>


      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="hero-content">

        {/* Small Label */}

        {/* <span className="hero-eyebrow">
          // REPLICA LAB
        </span> */}


        {/* Main Heading */}

        <h1 className="hero-title">
          Building
          <span> Intelligent </span>
          Digital Ecosystems.
        </h1>


        {/* Description */}

        <p className="hero-description">
          Modernizing enterprise operations through high-precision AI
          solutions, autonomous workflows, and architectural excellence.
        </p>


        {/* CTA Buttons */}

        <div className="hero-actions">

          <Link
            href="/contact"
            className="hero-button hero-button-primary"
          >
            The Future of Transformation
            <span className="hero-button-arrow">↗</span>
          </Link>


          <Link
            href="/about"
            className="hero-button hero-button-secondary"
          >
            Explore About Us
            <span className="hero-button-arrow">↗</span>
          </Link>

        </div>

      </div>

    </section>
  );
}