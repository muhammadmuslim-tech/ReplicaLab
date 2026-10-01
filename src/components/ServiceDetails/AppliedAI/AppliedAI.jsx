  import Link from "next/link";
import appliedAIServices from "@/data/appliedAIData.js";
import AIServiceBlock from "./AIServiceBlock";
import "./AppliedAI.css";

export default function AppliedAI() {
  return (
    <main className="applied-ai-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="applied-ai-hero" id="applied-ai">

        <div className="applied-ai-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="applied-ai-container">

          <div className="applied-ai-hero-content">

            <div className="applied-ai-hero-label">
              APPLIED AI
            </div>

            <h1>
              Intelligent systems
              <br />
              built for enterprise.
            </h1>

            <div className="applied-ai-hero-description">

              <span className="applied-ai-hero-line"></span>

              <p>
                AI systems that turn enterprise data, processes, and
                decisions into intelligent operational capabilities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="applied-ai-services">

        <div className="applied-ai-container">

          <div className="applied-ai-section-header">

            <div className="applied-ai-section-title">

              <span>
                OUR AI CAPABILITIES
              </span>

              {/* <h2>
                Applied intelligence
                <br />
                for real operations.
              </h2> */}

            </div>

            <p>
              Explore the AI capabilities Replica Lab engineers
              for enterprise organizations and operational systems.
            </p>

          </div>


          <div className="applied-ai-services-grid">

            {appliedAIServices.map((service) => (
              <AIServiceBlock
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

      {/* <section className="applied-ai-bottom">

        <div className="applied-ai-container">

          <div className="applied-ai-bottom-line">

            <span>
              REPLICA LAB
            </span>

            <span>
              APPLIED AI
            </span>

          </div>

          <div className="applied-ai-bottom-content">

            <span>
              DIGITAL INTELLIGENCE
            </span>

            <h2>
              Engineering intelligence
              <br />
              into enterprise systems.
            </h2>

            <Link href="/services">
              BACK TO SERVICES
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section> */}

    </main>
  );
}