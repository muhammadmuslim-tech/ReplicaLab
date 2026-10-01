import softwareEngineeringServices from "@/data/softwareEngineeringData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./ERPBusinessManagement.css";

export default function ERPBusinessManagement() {
  const service = softwareEngineeringServices.find(
    (item) => item.slug === "erp-business-management"
  );

  if (!service) {
    return null;
  }

  return (
    <main className="software-detail-page">

      <section className="erp-business-management-hero">

        <div className="erp-business-management-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="software-detail-container">

          <div className="erp-business-management-hero-content">

            <div className="erp-business-management-hero-label">
              SOFTWARE ENGINEERING
            </div>

            <h1>
              ERP & Business
              <span>Management.</span>
            </h1>

            <div className="erp-business-management-hero-description">

              <span className="erp-business-management-hero-line"></span>

              <p>{service.shortDescription}</p>

            </div>

          </div>

        </div>

      </section>


      <section className="erp-business-management-overview-section">

        <div className="software-detail-container">

          <div className="erp-business-management-overview-layout">

            <div className="erp-business-management-overview-heading">

              <h2>
                One system
                <br />
                for your entire
                <br />
                <span>operation.</span>
              </h2>

            </div>

            <div className="erp-business-management-overview-content">

              <p className="erp-business-management-overview-lead">
                {service.overview}
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="erp-business-management-impact-section">

        <div className="software-detail-container">

          <div className="erp-business-management-section-heading">

            <h2>{service.businessTitle}</h2>

          </div>

          <div className="erp-business-management-impact-list">

            {service.businessBenefits.map((benefit, index) => (

              <article
                className="erp-business-management-impact-item"
                key={benefit.title}
              >

                <div className="erp-business-management-impact-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="erp-business-management-impact-main">

                  <h3>{benefit.title}</h3>

                  <p>{benefit.description}</p>

                </div>

                <div className="erp-business-management-impact-symbol">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      <section className="erp-business-management-deliverables-section">

        <div className="software-detail-container">

          <div className="erp-business-management-section-heading">

            <h2>{service.deliverablesTitle}</h2>

          </div>

          <div className="erp-business-management-deliverables">

            {service.deliverables.map((item, index) => (

              <article
                className="erp-business-management-deliverable"
                key={item.title}
              >

                <div className="erp-business-management-deliverable-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="erp-business-management-deliverable-title">
                  <h3>{item.title}</h3>
                </div>

                <div className="erp-business-management-deliverable-description">
                  <p>{item.description}</p>
                </div>

                <div className="erp-business-management-deliverable-arrow">
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