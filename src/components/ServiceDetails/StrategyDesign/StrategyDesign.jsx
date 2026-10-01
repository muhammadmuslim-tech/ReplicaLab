import Link from "next/link";
import strategyDesignServices from "@/data/strategyDesignData.js";
import "./StrategyDesign.css";

export default function StrategyDesign() {
  return (
    <section className="strategy-design-services">

      {/* =========================================================
          STRATEGY & DESIGN HERO
      ========================================================= */}

      <div className="strategy-design-hero">

        <div className="strategy-design-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>


        <div className="strategy-design-hero-container">

          <div className="strategy-design-hero-content">

            {/* LABEL */}

            <div className="strategy-design-hero-label">

              <span className="strategy-design-hero-label-line"></span>

              <span>
                STRATEGY &amp; DESIGN
              </span>

            </div>


            {/* HEADING */}

            <h1>
              Strategy and design
              <br />
              built for enterprise.
            </h1>


            {/* DESCRIPTION */}

            <div className="strategy-design-hero-description">

              <span className="strategy-design-hero-description-line"></span>

              <p>
                Business-focused digital strategy and system design that
                transforms complex requirements into clear technical direction.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          STRATEGY & DESIGN CONTENT
      ========================================================= */}

      <div className="strategy-design-container">

        <div className="strategy-design-header">

          <div className="strategy-design-heading">

            <span className="strategy-design-label">
              OUR STRATEGY &amp; DESIGN CAPABILITIES
            </span>

          </div>


          <p className="strategy-design-intro">
            Explore the strategy, analytics, experience, and product design
            capabilities Replica Lab engineers to create clear digital
            direction and long-term business value.
          </p>

        </div>


        {/* =========================================================
            SERVICE GRID
        ========================================================= */}

        <div className="strategy-design-grid">

          {strategyDesignServices.map((service) => (

            <Link
              href={`/services/strategy-design/${service.slug}`}
              className="strategy-design-service-card"
              key={service.number}
            >

              {/* TOP */}

              <div className="strategy-design-service-top">

                <span className="strategy-design-service-number">
                  {service.number}
                </span>

                <span className="strategy-design-service-category">
                  STRATEGY &amp; DESIGN
                </span>

              </div>


              {/* CONTENT */}

              <div className="strategy-design-service-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.shortDescription}
                </p>

              </div>


              {/* BOTTOM */}

              <div className="strategy-design-service-bottom">

                <span>
                  EXPLORE SERVICE
                </span>

                <span className="strategy-design-service-arrow">
                  ↗
                </span>

              </div>


              {/* BOTTOM LINE */}

              <span className="strategy-design-service-line"></span>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}