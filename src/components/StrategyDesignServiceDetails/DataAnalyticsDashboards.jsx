import strategyDesignServices from "@/data/strategyDesignData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./DataAnalyticsDashboards.css";

export default function DataAnalyticsDashboards() {
  const service = strategyDesignServices.find(
    (item) => item.slug === "data-analytics-dashboards"
  );

  if (!service) {
    return null;
  }

  return (
    <main className="software-detail-page">

      <section className="data-analytics-dashboards-hero">

        <div className="data-analytics-dashboards-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="software-detail-container">

          <div className="data-analytics-dashboards-hero-content">

            <div className="data-analytics-dashboards-hero-label">
              STRATEGY & DESIGN
            </div>

            <h1>
              Data & Analytics
              <span>Dashboards.</span>
            </h1>

            <div className="data-analytics-dashboards-hero-description">

              <span className="data-analytics-dashboards-hero-line"></span>

              <p>
                {service.shortDescription}
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="data-analytics-dashboards-overview-section">

        <div className="software-detail-container">

          <div className="data-analytics-dashboards-overview-layout">

            <div className="data-analytics-dashboards-overview-heading">

              <h2>
                Business intelligence
                <br />
                built around
                <br />
                your
                <span> business.</span>
              </h2>

            </div>

            <div className="data-analytics-dashboards-overview-content">

              <p className="data-analytics-dashboards-overview-lead">
                {service.overview}
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="data-analytics-dashboards-impact-section">

        <div className="software-detail-container">

          <div className="data-analytics-dashboards-section-heading">

            <h2>
              {service.businessTitle}
            </h2>

          </div>

          <div className="data-analytics-dashboards-impact-list">

            {service.businessBenefits.map((benefit, index) => (

              <article
                className="data-analytics-dashboards-impact-item"
                key={benefit.title}
              >

                <div className="data-analytics-dashboards-impact-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="data-analytics-dashboards-impact-main">

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.description}
                  </p>

                </div>

                <div className="data-analytics-dashboards-impact-symbol">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      <section className="data-analytics-dashboards-deliverables-section">

        <div className="software-detail-container">

          <div className="data-analytics-dashboards-section-heading">

            <h2>
              {service.deliverablesTitle}
            </h2>

          </div>

          <div className="data-analytics-dashboards-deliverables">

            {service.deliverables.map((item, index) => (

              <article
                className="data-analytics-dashboards-deliverable"
                key={item.title}
              >

                <div className="data-analytics-dashboards-deliverable-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="data-analytics-dashboards-deliverable-title">
                  <h3>
                    {item.title}
                  </h3>
                </div>

                <div className="data-analytics-dashboards-deliverable-description">
                  <p>
                    {item.description}
                  </p>
                </div>

                <div className="data-analytics-dashboards-deliverable-arrow">
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