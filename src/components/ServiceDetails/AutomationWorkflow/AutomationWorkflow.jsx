import Link from "next/link";
import automationWorkflowServices from "@/data/automationWorkflowData.js";
import AutomationServiceBlock from "./AutomationServiceBlock";
import "./AutomationWorkflow.css";

export default function AutomationWorkflow() {
  return (
    <main className="automation-workflow-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="automation-workflow-hero">

        <div className="automation-workflow-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="automation-workflow-container">

          <div className="automation-workflow-hero-content">

            <div className="automation-workflow-hero-label">
              AUTOMATION & WORKFLOW
            </div>

            <h1>
              Intelligent workflows
              <br />
              built for enterprise.
            </h1>

            <div className="automation-workflow-hero-description">

              <span className="automation-workflow-hero-line"></span>

              <p>
                Intelligent automation that removes repetitive operational
                friction and connects complex business workflows.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="automation-workflow-services">

        <div className="automation-workflow-container">

          <div className="automation-workflow-section-header">

            <div className="automation-workflow-section-title">

              <span>
                OUR AUTOMATION CAPABILITIES
              </span>

              {/* <h2>
                Intelligent automation
                <br />
                for real operations.
              </h2> */}

            </div>

            <p>
              Explore the automation capabilities Replica Lab engineers
              for enterprise organizations and operational systems.
            </p>

          </div>


          <div className="automation-workflow-services-grid">

            {automationWorkflowServices.map((service) => (
              <AutomationServiceBlock
                key={service.slug}
                service={service}
              />
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BACK TO SERVICES
      ===================================================== */}

      {/* <section className="automation-workflow-bottom">

        <div className="automation-workflow-container">

          <div className="automation-workflow-bottom-line">

            <span>
              REPLICA LAB
            </span>

            <span>
              AUTOMATION & WORKFLOW
            </span>

          </div>


          <div className="automation-workflow-bottom-content">

            <span>
              OPERATIONAL AUTOMATION
            </span>

            <h2>
              Engineering automation
              <br />
              into enterprise operations.
            </h2>

            <Link href="/services">

              BACK TO SERVICES

              <span>
                ↗
              </span>

            </Link>

          </div>

        </div>

      </section> */}

    </main>
  );
}