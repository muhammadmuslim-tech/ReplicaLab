import appliedAIServices from "@/data/appliedAIData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./AIChatbots.css";

export default function AIChatbots() {
    const service = appliedAIServices.find(
        (item) => item.slug === "ai-chatbots"
    );

    if (!service) {
        return null;
    }

    return (
        <main className="ai-chatbots-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="ai-chatbots-hero">

                <div className="ai-chatbots-hero-structure">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="ai-chatbots-container">

                    <div className="ai-chatbots-hero-content">

                        <div className="ai-chatbots-hero-label">
                            INTELLIGENT CONVERSATIONAL SYSTEMS
                        </div>

                        <h1>
                            AI
                            <span>Chatbots.</span>
                        </h1>

                        <div className="ai-chatbots-hero-description">

                            <span className="ai-chatbots-hero-line"></span>

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

            <section className="ai-chatbots-overview-section">

                <div className="ai-chatbots-container">

                    <div className="ai-chatbots-overview-layout">

                        <div className="ai-chatbots-overview-heading">

                            <h2>
                                Conversations
                                <br />
                                built around
                                <br />
                                your
                                <span> business.</span>
                            </h2>

                        </div>


                        <div className="ai-chatbots-overview-content">

                            <p className="ai-chatbots-overview-lead">
                                {service.overview}
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                BUSINESS IMPACT
            ===================================================== */}

            <section className="ai-chatbots-impact-section">

                <div className="ai-chatbots-container">

                    <div className="ai-chatbots-section-heading">

                        <h2>
                            {service.businessTitle}
                        </h2>

                    </div>


                    <div className="ai-chatbots-impact-list">

                        {service.businessBenefits.map((benefit, index) => (

                            <article
                                className="ai-chatbots-impact-item"
                                key={benefit.title}
                            >

                                <div className="ai-chatbots-impact-index">
                                    {String(index + 1).padStart(2, "0")}
                                </div>


                                <div className="ai-chatbots-impact-main">

                                    <h3>
                                        {benefit.title}
                                    </h3>

                                    <p>
                                        {benefit.description}
                                    </p>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                ENGINEERING OUTPUT
            ===================================================== */}

            <section className="ai-chatbots-deliverables-section">

                <div className="ai-chatbots-container">

                    <div className="ai-chatbots-section-heading">

                        <h2>
                            {service.deliverablesTitle}
                        </h2>

                    </div>


                    <div className="ai-chatbots-deliverables">

                        {service.deliverables.map((item, index) => (

                            <article
                                className="ai-chatbots-deliverable"
                                key={item.title}
                            >

                                <div className="ai-chatbots-deliverable-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>


                                <div className="ai-chatbots-deliverable-title">

                                    <h3>
                                        {item.title}
                                    </h3>

                                </div>


                                <div className="ai-chatbots-deliverable-description">

                                    <p>
                                        {item.description}
                                    </p>

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