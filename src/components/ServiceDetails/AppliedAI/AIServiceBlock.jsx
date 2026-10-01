import Link from "next/link";
import "./AIServiceBlock.css";

export default function AIServiceBlock({ service }) {
  return (
    <Link
      href={`/services/applied-ai/${service.slug}`}
      className="ai-service-block"
    >

      <div className="ai-service-block-top">

        <span className="ai-service-block-number">
          {service.number}
        </span>

        <span className="ai-service-block-category">
          APPLIED AI
        </span>

      </div>


      <div className="ai-service-block-content">

        <h3>
          {service.title}
        </h3>

        <p>
          {service.shortDescription}
        </p>

      </div>


      <div className="ai-service-block-bottom">

        <span>
          EXPLORE SERVICE
        </span>

        <span className="ai-service-block-arrow">
          ↗
        </span>

      </div>

      <span className="ai-service-block-line"></span>

    </Link>
  );
}