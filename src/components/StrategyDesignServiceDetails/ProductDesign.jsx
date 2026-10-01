import strategyDesignServices from "@/data/strategyDesignData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./ProductDesign.css";

export default function ProductDesign() {
  const service = strategyDesignServices.find(
    (item) => item.slug === "product-design"
  );

  if (!service) {
    return null;
  }

  return (
    <main className="software-detail-page">

      <section className="product-design-hero">

        <div className="product-design-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="software-detail-container">

          <div className="product-design-hero-content">

            <div className="product-design-hero-label">
              STRATEGY & DESIGN
            </div>

            <h1>
              Product
              <span>Design.</span>
            </h1>

            <div className="product-design-hero-description">

              <span className="product-design-hero-line"></span>

              <p>
                {service.shortDescription}
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="product-design-overview-section">

        <div className="software-detail-container">

          <div className="product-design-overview-layout">

            <div className="product-design-overview-heading">

              <h2>
                Products
                <br />
                built around
                <br />
                your
                <span> business.</span>
              </h2>

            </div>

            <div className="product-design-overview-content">

              <p className="product-design-overview-lead">
                {service.overview}
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="product-design-impact-section">

        <div className="software-detail-container">

          <div className="product-design-section-heading">

            <h2>
              {service.businessTitle}
            </h2>

          </div>

          <div className="product-design-impact-list">

            {service.businessBenefits.map((benefit, index) => (

              <article
                className="product-design-impact-item"
                key={benefit.title}
              >

                <div className="product-design-impact-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="product-design-impact-main">

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.description}
                  </p>

                </div>

                <div className="product-design-impact-symbol">
                  ↗
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      <section className="product-design-deliverables-section">

        <div className="software-detail-container">

          <div className="product-design-section-heading">

            <h2>
              {service.deliverablesTitle}
            </h2>

          </div>

          <div className="product-design-deliverables">

            {service.deliverables.map((item, index) => (

              <article
                className="product-design-deliverable"
                key={item.title}
              >

                <div className="product-design-deliverable-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="product-design-deliverable-title">
                  <h3>
                    {item.title}
                  </h3>
                </div>

                <div className="product-design-deliverable-description">
                  <p>
                    {item.description}
                  </p>
                </div>

                <div className="product-design-deliverable-arrow">
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