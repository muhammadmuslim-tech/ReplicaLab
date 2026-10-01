import Link from "next/link";
import "./AutomationServiceBlock.css";

export default function AutomationServiceBlock({ service }) {
  return (
    <Link
      href={`/services/automation-workflow/${service.slug}`}
      className="automation-service-block"
    >

      {/* =========================================
          TOP
      ========================================= */}

      <div className="automation-service-block-top">

        <span className="automation-service-block-number">
          {service.number}
        </span>

        <span className="automation-service-block-category">
          AUTOMATION & WORKFLOW
        </span>

      </div>


      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="automation-service-block-content">

        <h3>
          {service.title}
        </h3>

        <p>
          {service.shortDescription}
        </p>

      </div>


      {/* =========================================
          BOTTOM
      ========================================= */}

      <div className="automation-service-block-bottom">

        <span>
          EXPLORE SERVICE
        </span>

        <span className="automation-service-block-arrow">
          ↗
        </span>

      </div>


      <span className="automation-service-block-line"></span>

    </Link>
  );
}