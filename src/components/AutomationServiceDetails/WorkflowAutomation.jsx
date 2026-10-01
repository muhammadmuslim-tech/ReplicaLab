import automationWorkflowServices from "@/data/automationWorkflowData.js";
import ServiceClosing from "@/src/components/ServiceClosing/ServiceClosing.jsx";
import "./WorkflowAutomation.css";

export default function WorkflowAutomation() {
  const service = automationWorkflowServices.find(
    (item) => item.slug === "workflow-automation"
  );

  if (!service) {
    return null;
  }

  return (
    <main className="workflow-automation-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="workflow-automation-hero">

        <div className="workflow-automation-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="workflow-automation-container">

          <div className="workflow-automation-hero-content">

            {/* <div className="workflow-automation-hero-label">
              WORKFLOW AUTOMATION
            </div> */}

            <h1>
              Workflow
              <span>Automation.</span>
            </h1>

            <div className="workflow-automation-hero-description">

              <span className="workflow-automation-hero-line"></span>

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

      <section className="workflow-automation-overview-section">

        <div className="workflow-automation-container">

          <div className="workflow-automation-overview-layout">

            <div className="workflow-automation-overview-heading">

              <h2>
                Intelligent
             
                workflows
                
                built around
                
                your
                <span> business.</span>
              </h2>

            </div>

            <div className="workflow-automation-overview-content">

              <p className="workflow-automation-overview-lead">
                {service.overview}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BUSINESS IMPACT
      ===================================================== */}

      <section className="workflow-automation-impact-section">

        <div className="workflow-automation-container">

          <div className="workflow-automation-section-heading">

            <h2>
              {service.businessTitle}
            </h2>

          </div>


          <div className="workflow-automation-impact-list">

            {service.businessBenefits.map((benefit, index) => (

              <article
                className="workflow-automation-impact-item"
                key={benefit.title}
              >

                <div className="workflow-automation-impact-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="workflow-automation-impact-main">

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.description}
                  </p>

                </div>

                <div className="workflow-automation-impact-symbol">
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

      <section className="workflow-automation-deliverables-section">

        <div className="workflow-automation-container">

          <div className="workflow-automation-section-heading">

            <h2>
              {service.deliverablesTitle}
            </h2>

          </div>


          <div className="workflow-automation-deliverables">

            {service.deliverables.map((item, index) => (

              <article
                className="workflow-automation-deliverable"
                key={item.title}
              >

                <div className="workflow-automation-deliverable-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="workflow-automation-deliverable-title">

                  <h3>
                    {item.title}
                  </h3>

                </div>

                <div className="workflow-automation-deliverable-description">

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