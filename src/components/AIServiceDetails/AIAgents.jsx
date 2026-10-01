import appliedAIServices from "@/data/appliedAIData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./AIAgents.css";

export default function AIAgents() {
    const service = appliedAIServices.find(
        (item) => item.slug === "ai-agents"
    );

    if (!service) {
        return null;
    }

    return (
        <main className="ai-agents-page">

            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="ai-agents-hero">

                <div className="ai-agents-hero-structure">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="ai-agents-container">

                    <div className="ai-agents-hero-content">

                        <div className="ai-agents-hero-label">
                            AUTONOMOUS INTELLIGENT SYSTEMS
                        </div>

                        <h1>
                            AI
                            <span>Agents.</span>
                        </h1>

                        <div className="ai-agents-hero-description">

                            <span className="ai-agents-hero-line"></span>

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

            <section className="ai-agents-overview-section">

                <div className="ai-agents-container">

                    <div className="ai-agents-overview-layout">

                        {/* Heading ABOVE paragraph */}

                        <div className="ai-agents-overview-heading">

                            <h2>
                                Autonomous
                                <br />
                                intelligence
                                <br />
                                built for
                                <br />
                                your
                                <span> business.</span>
                            </h2>

                        </div>

                        {/* Paragraph BELOW heading */}

                        <div className="ai-agents-overview-content">

                            <p className="ai-agents-overview-lead">
                                {service.overview}
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          BUSINESS IMPACT
      ===================================================== */}

            <section className="ai-agents-impact-section">

                <div className="ai-agents-container">

                    <div className="ai-agents-section-heading">

                        <h2>
                            {service.businessTitle}
                        </h2>

                    </div>


                    <div className="ai-agents-impact-list">

                        {service.businessBenefits.map((benefit, index) => (

                            <article
                                className="ai-agents-impact-item"
                                key={benefit.title}
                            >

                                <div className="ai-agents-impact-index">
                                    {String(index + 1).padStart(2, "0")}
                                </div>


                                <div className="ai-agents-impact-main">

                                    <h3>
                                        {benefit.title}
                                    </h3>

                                    <p>
                                        {benefit.description}
                                    </p>

                                </div>


                                <div className="ai-agents-impact-symbol">
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

            <section className="ai-agents-deliverables-section">

                <div className="ai-agents-container">

                    <div className="ai-agents-section-heading">

                        <h2>
                            {service.deliverablesTitle}
                        </h2>

                    </div>


                    <div className="ai-agents-deliverables">

                        {service.deliverables.map((item, index) => (

                            <article
                                className="ai-agents-deliverable"
                                key={item.title}
                            >

                                <div className="ai-agents-deliverable-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>


                                <div className="ai-agents-deliverable-title">

                                    <h3>
                                        {item.title}
                                    </h3>

                                </div>


                                <div className="ai-agents-deliverable-description">

                                    <p>
                                        {item.description}
                                    </p>

                                </div>


                                <div className="ai-agents-deliverable-arrow">
                                    ↗
                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
          SERVICE CLOSING
      ===================================================== */}

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