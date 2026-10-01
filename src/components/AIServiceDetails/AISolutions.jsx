import appliedAIServices from "@/data/appliedAIData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./AISolutions.css";

export default function AISolutions() {
    const service = appliedAIServices.find(
        (item) => item.slug === "ai-solutions"
    );

    if (!service) {
        return null;
    }

    return (
        <main className="ai-detail-page">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="ai-solutions-hero">

                <div className="ai-hero-structure">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="ai-detail-container">

                    {/* <div className="ai-hero-topline">

            <div className="ai-hero-id">
              <span className="ai-hero-dot"></span>
              APPLIED AI
            </div>

            <div className="ai-hero-index">
              SERVICE / 01
            </div>

          </div> */}


                    <div className="ai-hero-content">

                        <div className="ai-hero-label">
                            INTELLIGENT SYSTEMS
                        </div>

                        <h1>
                            AI
                            <span>Solutions.</span>
                        </h1>

                        <div className="ai-hero-description">

                            <span className="ai-hero-line"></span>

                            <p>
                                {service.shortDescription}
                            </p>

                        </div>

                    </div>


                    {/* <div className="ai-hero-bottom">

            <span>
              REPLICA LAB / DIGITAL INTELLIGENCE
            </span>

            <span>
              SCROLL TO EXPLORE
            </span>

          </div> */}

                </div>

            </section>


            {/* =====================================================
          OVERVIEW
      ===================================================== */}

            <section className="ai-overview-section">

                <div className="ai-detail-container">

                    {/* <div className="ai-section-marker">
            <span>01</span>
            <i></i>
            <small>OVERVIEW</small>
          </div> */}


                    <div className="ai-overview-layout">

                        {/* Heading ABOVE paragraph */}

                        <div className="ai-overview-heading">

                            {/* <span>
                ENTERPRISE
              </span> */}

                            <h2>
                                Intelligence
                                <br />
                                built around
                                <br />
                                your
                                <span> business.</span>
                            </h2>

                        </div>


                        {/* Paragraph BELOW heading */}

                        <div className="ai-overview-content">

                            <p className="ai-overview-lead">
                                {service.overview}
                            </p>


                            {/* System Architecture */}

                            {/* <div className="ai-overview-system">

                <div className="ai-system-header">

                  <span>
                    SYSTEM ARCHITECTURE
                  </span>

                  <span>
                    01 — 04
                  </span>

                </div>


                <div className="ai-system-row">

                  <span>
                    INPUT
                  </span>

                  <strong>
                    Enterprise Data
                  </strong>

                </div>


                <div className="ai-system-row">

                  <span>
                    PROCESS
                  </span>

                  <strong>
                    Applied Intelligence
                  </strong>

                </div>


                <div className="ai-system-row">

                  <span>
                    OUTPUT
                  </span>

                  <strong>
                    Operational Insight
                  </strong>

                </div>

              </div> */}

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          BUSINESS IMPACT
      ===================================================== */}

            <section className="ai-impact-section">

                <div className="ai-detail-container">

                    <div className="ai-section-heading">

                        {/* <div className="ai-section-marker">
              <span>02</span>
              <i></i>
              <small>BUSINESS IMPACT</small>
            </div> */}

                        <h2>
                            {service.businessTitle}
                        </h2>

                    </div>


                    <div className="ai-impact-list">

                        {service.businessBenefits.map((benefit, index) => (

                            <article
                                className="ai-impact-item"
                                key={benefit.title}
                            >

                                <div className="ai-impact-index">
                                    {String(index + 1).padStart(2, "0")}
                                </div>


                                <div className="ai-impact-main">

                                    <h3>
                                        {benefit.title}
                                    </h3>

                                    <p>
                                        {benefit.description}
                                    </p>

                                </div>


                                <div className="ai-impact-symbol">
                                    ↗
                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
          ENGINEERING OUTPUT
      ====================================================*/}

            <section className="ai-deliverables-section">

                <div className="ai-detail-container">

                    <div className="ai-section-heading">

                        {/* <div className="ai-section-marker">
              <span>03</span>
              <i></i>
              <small>ENGINEERING OUTPUT</small>
            </div> */}

                        <h2>
                            {service.deliverablesTitle}
                        </h2>

                    </div>


                    <div className="ai-deliverables">

                        {service.deliverables.map((item, index) => (

                            <article
                                className="ai-deliverable"
                                key={item.title}
                            >

                                <div className="ai-deliverable-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>


                                <div className="ai-deliverable-title">

                                    <h3>
                                        {item.title}
                                    </h3>

                                </div>


                                <div className="ai-deliverable-description">

                                    <p>
                                        {item.description}
                                    </p>

                                </div>


                                {/* <div className="ai-deliverable-arrow">
                  ↗
                </div> */}

                            </article>

                        ))}

                    </div>

                </div>

            </section>

            <ServiceClosing
                label="READY FOR DIGITAL TRANSFORMATION"
                title="Begin Your Journey"
                highlight="with Replica Lab"
                description="Transform your organization's operational capability with intelligent software solutions designed for the future."
                buttonText="SCHEDULE STRATEGY CONSULTATION"
            />


        </main>
    );
}