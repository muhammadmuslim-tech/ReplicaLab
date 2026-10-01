import softwareEngineeringServices from "@/data/softwareEngineeringData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./SoftwareMaintenance.css";

export default function SoftwareMaintenance() {
  const service = softwareEngineeringServices.find(
    (item) => item.slug === "software-maintenance"
  );

  if (!service) {
    return null;
  }

  return (
    <main className="software-detail-page">

      <section className="software-maintenance-hero">

        <div className="software-maintenance-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="software-detail-container">

          <div className="software-maintenance-hero-content">

            <div className="software-maintenance-hero-label">
              SOFTWARE ENGINEERING
            </div>

            <h1>
              Software
              <span>Maintenance.</span>
            </h1>

            <div className="software-maintenance-hero-description">

              <span className="software-maintenance-hero-line"></span>

              <p>{service.shortDescription}</p>

            </div>

          </div>

        </div>

      </section>


      <section className="software-maintenance-overview-section">

        <div className="software-detail-container">

          <div className="software-maintenance-overview-layout">

            <div className="software-maintenance-overview-heading">

              <h2>
                Continuous
                    
                evolution for
                <br />
                your
                <span> systems.</span>
              </h2>

            </div>

            <div className="software-maintenance-overview-content">

              <p className="software-maintenance-overview-lead">
                {service.overview}
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="software-maintenance-impact-section">

        <div className="software-detail-container">

          <div className="software-maintenance-section-heading">

            <h2>{service.businessTitle}</h2>

          </div>

          <div className="software-maintenance-impact-list">

            {service.businessBenefits.map((benefit, index) => (

              <article
                className="software-maintenance-impact-item"
                key={benefit.title}
              >

                <div className="software-maintenance-impact-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="software-maintenance-impact-main">

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>

                </div>

                <div className="software-maintenance-impact-symbol">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      <section className="software-maintenance-deliverables-section">

        <div className="software-detail-container">

          <div className="software-maintenance-section-heading">

            <h2>{service.deliverablesTitle}</h2>

          </div>

          <div className="software-maintenance-deliverables">

            {service.deliverables.map((item, index) => (

              <article
                className="software-maintenance-deliverable"
                key={item.title}
              >

                <div className="software-maintenance-deliverable-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="software-maintenance-deliverable-title">
                  <h3>{item.title}</h3>
                </div>

                <div className="software-maintenance-deliverable-description">
                  <p>{item.description}</p>
                </div>

                <div className="software-maintenance-deliverable-arrow">
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