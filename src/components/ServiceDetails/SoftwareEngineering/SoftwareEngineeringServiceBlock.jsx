import Link from "next/link";
import "./SoftwareEngineeringServiceBlock.css";

export default function SoftwareEngineeringServiceBlock({ service }) {
  return (
    <Link
      href={`/services/software-engineering/${service.slug}`}
      className="software-engineering-service-block"
    >

      <div className="software-engineering-service-block-top">

        <span className="software-engineering-service-block-number">
          {service.number}
        </span>

        <span className="software-engineering-service-block-category">
          SOFTWARE ENGINEERING
        </span>

      </div>


      <div className="software-engineering-service-block-content">

        <h3>{service.title}</h3>

        <p>{service.shortDescription}</p>

      </div>


      <div className="software-engineering-service-block-bottom">

        <span>EXPLORE SERVICE</span>

        <span className="software-engineering-service-block-arrow">
          ↗
        </span>

      </div>


      <span className="software-engineering-service-block-line"></span>

    </Link>
  );
}