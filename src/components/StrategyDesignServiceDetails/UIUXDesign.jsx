import strategyDesignServices from "@/data/strategyDesignData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./UIUXDesign.css";

export default function UIUXDesign() {
  const service = strategyDesignServices.find(
    (item) => item.slug === "ui-ux-design"
  );

  if (!service) {
    return null;
  }

  return (
    <main className="software-detail-page">

      <section className="ui-ux-design-hero">

        <div className="ui-ux-design-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="software-detail-container">

          <div className="ui-ux-design-hero-content">

            <div className="ui-ux-design-hero-label">
              STRATEGY & DESIGN
            </div>

            <h1>
              UI/UX
              <span>Design.</span>
            </h1>

            <div className="ui-ux-design-hero-description">

              <span className="ui-ux-design-hero-line"></span>

              <p>
                {service.shortDescription}
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="ui-ux-design-overview-section">

        <div className="software-detail-container">

          <div className="ui-ux-design-overview-layout">

            <div className="ui-ux-design-overview-heading">

              <h2>
                Experiences
                <br />
                built around
                <br />
                your
                <span> business.</span>
              </h2>

            </div>

            <div className="ui-ux-design-overview-content">

              <p className="ui-ux-design-overview-lead">
                {service.overview}
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="ui-ux-design-impact-section">

        <div className="software-detail-container">

          <div className="ui-ux-design-section-heading">

            <h2>
              {service.businessTitle}
            </h2>

          </div>

          <div className="ui-ux-design-impact-list">

            {service.businessBenefits.map((benefit, index) => (

              <article
                className="ui-ux-design-impact-item"
                key={benefit.title}
              >

                <div className="ui-ux-design-impact-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="ui-ux-design-impact-main">

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.description}
                  </p>

                </div>

                <div className="ui-ux-design-impact-symbol">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      <section className="ui-ux-design-deliverables-section">

        <div className="software-detail-container">

          <div className="ui-ux-design-section-heading">

            <h2>
              {service.deliverablesTitle}
            </h2>

          </div>

          <div className="ui-ux-design-deliverables">

            {service.deliverables.map((item, index) => (

              <article
                className="ui-ux-design-deliverable"
                key={item.title}
              >

                <div className="ui-ux-design-deliverable-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="ui-ux-design-deliverable-title">
                  <h3>
                    {item.title}
                  </h3>
                </div>

                <div className="ui-ux-design-deliverable-description">
                  <p>
                    {item.description}
                  </p>
                </div>

                <div className="ui-ux-design-deliverable-arrow">
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