import automationWorkflowServices from "@/data/automationWorkflowData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./BusinessProcessAutomation.css";

export default function BusinessProcessAutomation() {
    const service = automationWorkflowServices.find(
        (item) => item.slug === "business-process-automation"
    );

    if (!service) {
        return null;
    }

    return (
        <main className="business-process-automation-page">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="business-process-automation-hero">

                <div className="business-process-automation-hero-structure">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="business-process-automation-container">

                    <div className="business-process-automation-hero-content">

                        {/* <div className="business-process-automation-hero-label">
              BUSINESS PROCESS AUTOMATION
            </div> */}

                        <h1>
                            Business process
                            <span>automation.</span>
                        </h1>

                        <div className="business-process-automation-hero-description">

                            <span className="business-process-automation-hero-line"></span>

                            <p>
                                {service.shortDescription}
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          OVERVIEW
      ===================================================== */}

            <section className="business-process-automation-overview-section">

                <div className="business-process-automation-container">

                    <div className="business-process-automation-overview-layout">

                        <div className="business-process-automation-overview-heading">

                            <h2>
                                Digital processes built around your
                                <span> business.</span>
                            </h2>

                        </div>

                        <div className="business-process-automation-overview-content">

                            <p className="business-process-automation-overview-lead">
                                {service.overview}
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          BUSINESS IMPACT
      ===================================================== */}

            <section className="business-process-automation-impact-section">

                <div className="business-process-automation-container">

                    <div className="business-process-automation-section-heading">

                        <h2>
                            {service.businessTitle}
                        </h2>

                    </div>


                    <div className="business-process-automation-impact-list">

                        {service.businessBenefits.map((benefit, index) => (

                            <article
                                className="business-process-automation-impact-item"
                                key={benefit.title}
                            >

                                <div className="business-process-automation-impact-index">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="business-process-automation-impact-main">

                                    <h3>
                                        {benefit.title}
                                    </h3>

                                    <p>
                                        {benefit.description}
                                    </p>

                                </div>

                                <div className="business-process-automation-impact-symbol">
                                    ↗
                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
          ENGINEERING OUTPUT
      ===================================================== */}

            <section className="business-process-automation-deliverables-section">

                <div className="business-process-automation-container">

                    <div className="business-process-automation-section-heading">

                        <h2>
                            {service.deliverablesTitle}
                        </h2>

                    </div>


                    <div className="business-process-automation-deliverables">

                        {service.deliverables.map((item, index) => (

                            <article
                                className="business-process-automation-deliverable"
                                key={item.title}
                            >

                                <div className="business-process-automation-deliverable-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div className="business-process-automation-deliverable-title">

                                    <h3>
                                        {item.title}
                                    </h3>

                                </div>

                                <div className="business-process-automation-deliverable-description">

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

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