import softwareEngineeringServices from "@/data/softwareEngineeringData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./WebApplicationDevelopment.css";

export default function WebApplicationDevelopment() {
  const service = softwareEngineeringServices.find(
    (item) => item.slug === "web-application-development"
  );

  if (!service) {
    return null;
  }

  return (
    <main className="software-detail-page">

      <section className="web-application-development-hero">

        <div className="web-application-development-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="software-detail-container">

          <div className="web-application-development-hero-content">

            <div className="web-application-development-hero-label">
              SOFTWARE ENGINEERING
            </div>

            <h1>
              Web Application
              <span>Development.</span>
            </h1>

            <div className="web-application-development-hero-description">

              <span className="web-application-development-hero-line"></span>

              <p>{service.shortDescription}</p>

            </div>

          </div>

        </div>

      </section>


      <section className="web-application-development-overview-section">

        <div className="software-detail-container">

          <div className="web-application-development-overview-layout">

            <div className="web-application-development-overview-heading">

              <h2>
                Applications
                <br />
                engineered for
                <br />
                your
                <span> scale.</span>
              </h2>

            </div>

            <div className="web-application-development-overview-content">

              <p className="web-application-development-overview-lead">
                {service.overview}
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="web-application-development-impact-section">

        <div className="software-detail-container">

          <div className="web-application-development-section-heading">

            <h2>{service.businessTitle}</h2>

          </div>

          <div className="web-application-development-impact-list">

            {service.businessBenefits.map((benefit, index) => (

              <article
                className="web-application-development-impact-item"
                key={benefit.title}
              >

                <div className="web-application-development-impact-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="web-application-development-impact-main">

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>

                </div>

                <div className="web-application-development-impact-symbol">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      <section className="web-application-development-deliverables-section">

        <div className="software-detail-container">

          <div className="web-application-development-section-heading">

            <h2>{service.deliverablesTitle}</h2>

          </div>

          <div className="web-application-development-deliverables">

            {service.deliverables.map((item, index) => (

              <article
                className="web-application-development-deliverable"
                key={item.title}
              >

                <div className="web-application-development-deliverable-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="web-application-development-deliverable-title">
                  <h3>{item.title}</h3>
                </div>

                <div className="web-application-development-deliverable-description">
                  <p>{item.description}</p>
                </div>

                <div className="web-application-development-deliverable-arrow">
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