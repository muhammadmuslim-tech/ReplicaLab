import strategyDesignServices from "@/data/strategyDesignData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./BusinessProcessAnalysis.css";

export default function BusinessProcessAnalysis() {
  const service = strategyDesignServices.find(
    (item) => item.slug === "business-process-analysis"
  );

  if (!service) {
    return null;
  }

  return (
    <main className="software-detail-page">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="business-process-analysis-hero">

        <div className="business-process-analysis-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="software-detail-container">

          <div className="business-process-analysis-hero-content">

            <div className="business-process-analysis-hero-label">
              STRATEGY & DESIGN
            </div>

            <h1>
              Business Process
              <span>Analysis.</span>
            </h1>

            <div className="business-process-analysis-hero-description">

              <span className="business-process-analysis-hero-line"></span>

              <p>
                {service.shortDescription}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          OVERVIEW
      ========================================================= */}

      <section className="business-process-analysis-overview-section">

        <div className="software-detail-container">

          <div className="business-process-analysis-overview-layout">

            <div className="business-process-analysis-overview-heading">

              <h2>
                Strategic clarity
                <br />
                built around
                <br />
                your
                <span> business.</span>
              </h2>

            </div>

            <div className="business-process-analysis-overview-content">

              <p className="business-process-analysis-overview-lead">
                {service.overview}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          BUSINESS IMPACT
      ========================================================= */}

      <section className="business-process-analysis-impact-section">

        <div className="software-detail-container">

          <div className="business-process-analysis-section-heading">

            <h2>
              {service.businessTitle}
            </h2>

          </div>

          <div className="business-process-analysis-impact-list">

            {service.businessBenefits.map((benefit, index) => (

              <article
                className="business-process-analysis-impact-item"
                key={benefit.title}
              >

                <div className="business-process-analysis-impact-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="business-process-analysis-impact-main">

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.description}
                  </p>

                </div>

                <div className="business-process-analysis-impact-symbol">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          DELIVERABLES
      ========================================================= */}

      <section className="business-process-analysis-deliverables-section">

        <div className="software-detail-container">

          <div className="business-process-analysis-section-heading">

            <h2>
              {service.deliverablesTitle}
            </h2>

          </div>

          <div className="business-process-analysis-deliverables">

            {service.deliverables.map((item, index) => (

              <article
                className="business-process-analysis-deliverable"
                key={item.title}
              >

                <div className="business-process-analysis-deliverable-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="business-process-analysis-deliverable-title">
                  <h3>
                    {item.title}
                  </h3>
                </div>

                <div className="business-process-analysis-deliverable-description">
                  <p>
                    {item.description}
                  </p>
                </div>

                <div className="business-process-analysis-deliverable-arrow">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      <ServiceClosing />

    </main>
  );
}