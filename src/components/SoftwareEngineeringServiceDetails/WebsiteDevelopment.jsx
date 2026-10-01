import softwareEngineeringServices from "@/data/softwareEngineeringData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./WebsiteDevelopment.css";

export default function WebsiteDevelopment() {
  const service = softwareEngineeringServices.find(
    (item) => item.slug === "website-development"
  );

  if (!service) {
    return null;
  }

  return (
    <main className="software-detail-page">

      <section className="website-development-hero">

        <div className="website-development-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="software-detail-container">

          <div className="website-development-hero-content">

            <div className="website-development-hero-label">
              SOFTWARE ENGINEERING
            </div>

            <h1>
              Website
              <span>Development.</span>
            </h1>

            <div className="website-development-hero-description">

              <span className="website-development-hero-line"></span>

              <p>{service.shortDescription}</p>

            </div>

          </div>

        </div>

      </section>


      <section className="website-development-overview-section">

        <div className="software-detail-container">

          <div className="website-development-overview-layout">

            <div className="website-development-overview-heading">

              <h2>
                Digital experiences
                <br />
                engineered around
                <br />
                your
                <span> business.</span>
              </h2>

            </div>

            <div className="website-development-overview-content">

              <p className="website-development-overview-lead">
                {service.overview}
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="website-development-impact-section">

        <div className="software-detail-container">

          <div className="website-development-section-heading">

            <h2>{service.businessTitle}</h2>

          </div>

          <div className="website-development-impact-list">

            {service.businessBenefits.map((benefit, index) => (

              <article
                className="website-development-impact-item"
                key={benefit.title}
              >

                <div className="website-development-impact-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="website-development-impact-main">

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>

                </div>

                <div className="website-development-impact-symbol">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      <section className="website-development-deliverables-section">

        <div className="software-detail-container">

          <div className="website-development-section-heading">

            <h2>{service.deliverablesTitle}</h2>

          </div>

          <div className="website-development-deliverables">

            {service.deliverables.map((item, index) => (

              <article
                className="website-development-deliverable"
                key={item.title}
              >

                <div className="website-development-deliverable-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="website-development-deliverable-title">
                  <h3>{item.title}</h3>
                </div>

                <div className="website-development-deliverable-description">
                  <p>{item.description}</p>
                </div>

                <div className="website-development-deliverable-arrow">
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