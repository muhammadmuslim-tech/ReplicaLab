import softwareEngineeringServices from "@/data/softwareEngineeringData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./SystemIntegration.css";

export default function SystemIntegration() {
  const service = softwareEngineeringServices.find(
    (item) => item.slug === "system-integration"
  );

  if (!service) {
    return null;
  }

  return (
    <main className="software-detail-page">

      <section className="system-integration-hero">

        <div className="system-integration-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="software-detail-container">

          <div className="system-integration-hero-content">

            <div className="system-integration-hero-label">
              SOFTWARE ENGINEERING
            </div>

            <h1>
              System
              <span>Integration.</span>
            </h1>

            <div className="system-integration-hero-description">

              <span className="system-integration-hero-line"></span>

              <p>{service.shortDescription}</p>

            </div>

          </div>

        </div>

      </section>


      <section className="system-integration-overview-section">

        <div className="software-detail-container">

          <div className="system-integration-overview-layout">

            <div className="system-integration-overview-heading">

              <h2>
                Connect every
                <br />
                system into
                <br />
                one
                <span> ecosystem.</span>
              </h2>

            </div>

            <div className="system-integration-overview-content">

              <p className="system-integration-overview-lead">
                {service.overview}
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="system-integration-impact-section">

        <div className="software-detail-container">

          <div className="system-integration-section-heading">

            <h2>{service.businessTitle}</h2>

          </div>

          <div className="system-integration-impact-list">

            {service.businessBenefits.map((benefit, index) => (

              <article
                className="system-integration-impact-item"
                key={benefit.title}
              >

                <div className="system-integration-impact-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="system-integration-impact-main">

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>

                </div>

                <div className="system-integration-impact-symbol">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      <section className="system-integration-deliverables-section">

        <div className="software-detail-container">

          <div className="system-integration-section-heading">

            <h2>{service.deliverablesTitle}</h2>

          </div>

          <div className="system-integration-deliverables">

            {service.deliverables.map((item, index) => (

              <article
                className="system-integration-deliverable"
                key={item.title}
              >

                <div className="system-integration-deliverable-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="system-integration-deliverable-title">
                  <h3>{item.title}</h3>
                </div>

                <div className="system-integration-deliverable-description">
                  <p>{item.description}</p>
                </div>

                <div className="system-integration-deliverable-arrow">
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