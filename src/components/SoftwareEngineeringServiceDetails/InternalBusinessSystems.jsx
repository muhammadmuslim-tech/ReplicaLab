import softwareEngineeringServices from "@/data/softwareEngineeringData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./InternalBusinessSystems.css";

export default function InternalBusinessSystems() {
  const service = softwareEngineeringServices.find(
    (item) => item.slug === "internal-business-systems"
  );

  if (!service) {
    return null;
  }

  return (
    <main className="software-detail-page">

      <section className="internal-business-systems-hero">

        <div className="internal-business-systems-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="software-detail-container">

          <div className="internal-business-systems-hero-content">

            <div className="internal-business-systems-hero-label">
              SOFTWARE ENGINEERING
            </div>

            <h1>
              Internal Business
              <span> Systems.</span>
            </h1>

            <div className="internal-business-systems-hero-description">

              <span className="internal-business-systems-hero-line"></span>

              <p>{service.shortDescription}</p>

            </div>

          </div>

        </div>

      </section>


      <section className="internal-business-systems-overview-section">

        <div className="software-detail-container">

          <div className="internal-business-systems-overview-layout">

            <div className="internal-business-systems-overview-heading">

              <h2>
                Internal tools
                
                built around
                <br />
                your
                <span> teams.</span>
              </h2>

            </div>

            <div className="internal-business-systems-overview-content">

              <p className="internal-business-systems-overview-lead">
                {service.overview}
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="internal-business-systems-impact-section">

        <div className="software-detail-container">

          <div className="internal-business-systems-section-heading">

            <h2>{service.businessTitle}</h2>

          </div>

          <div className="internal-business-systems-impact-list">

            {service.businessBenefits.map((benefit, index) => (

              <article
                className="internal-business-systems-impact-item"
                key={benefit.title}
              >

                <div className="internal-business-systems-impact-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="internal-business-systems-impact-main">

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>

                </div>

                <div className="internal-business-systems-impact-symbol">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      <section className="internal-business-systems-deliverables-section">

        <div className="software-detail-container">

          <div className="internal-business-systems-section-heading">

            <h2>{service.deliverablesTitle}</h2>

          </div>

          <div className="internal-business-systems-deliverables">

            {service.deliverables.map((item, index) => (

              <article
                className="internal-business-systems-deliverable"
                key={item.title}
              >

                <div className="internal-business-systems-deliverable-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="internal-business-systems-deliverable-title">
                  <h3>{item.title}</h3>
                </div>

                <div className="internal-business-systems-deliverable-description">
                  <p>{item.description}</p>
                </div>

                <div className="internal-business-systems-deliverable-arrow">
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