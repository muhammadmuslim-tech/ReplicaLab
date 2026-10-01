import Link from "next/link";
import softwareEngineeringServices from "@/data/softwareEngineeringData.js";
import "./SoftwareEngineering.css";

export default function SoftwareEngineering() {
  return (
    <section className="software-engineering-services">

      {/* =========================================================
          SOFTWARE ENGINEERING HERO
      ========================================================= */}

      <div className="software-engineering-hero">

        <div className="software-engineering-hero-structure">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>


        <div className="software-engineering-hero-container">

          <div className="software-engineering-hero-content">

            {/* LABEL */}

            <div className="software-engineering-hero-label">

              <span className="software-engineering-hero-label-line"></span>

              <span>
                SOFTWARE ENGINEERING
              </span>

            </div>


            {/* HEADING */}

            <h1>
              Software systems
              <br />
              built for enterprise.
            </h1>


            {/* DESCRIPTION */}

            <div className="software-engineering-hero-description">

              <span className="software-engineering-hero-description-line"></span>

              <p>
                Scalable software architectures engineered for reliability,
                performance, security, and long-term organizational growth.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================================
          EXISTING SOFTWARE ENGINEERING CONTENT
          KEEPING YOUR EXISTING CARDS
      ========================================================= */}

      <div className="software-engineering-container">

        <div className="software-engineering-header">

          <div className="software-engineering-heading">

            <span className="software-engineering-label">
              OUR SOFTWARE CAPABILITIES
            </span>

          </div>


          <p className="software-engineering-intro">
            Explore the Software capabilities Replica Lab engineers for enterprise organizations and operational systems.
          </p>

        </div>


        <div className="software-engineering-grid">

          {softwareEngineeringServices.map((service) => (

            <Link
              href={`/services/software-engineering/${service.slug}`}
              className="software-engineering-service-card"
              key={service.number}
            >

              <div className="software-engineering-service-top">

                <span className="software-engineering-service-number">
                  {service.number}
                </span>

                <span className="software-engineering-service-category">
                  SOFTWARE ENGINEERING
                </span>

              </div>


              <div className="software-engineering-service-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.shortDescription}
                </p>

              </div>


              <div className="software-engineering-service-bottom">

                <span>
                  EXPLORE SERVICE
                </span>

                <span className="software-engineering-service-arrow">
                  ↗
                </span>

              </div>


              <span className="software-engineering-service-line"></span>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}