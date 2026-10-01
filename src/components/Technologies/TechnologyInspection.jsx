import { useState } from "react";
import TechnologyUseCases from "./TechnologyUseCases";
import "./TechnologyInspection.css";

export default function TechnologyInspection({
  technology,
  onClose,
}) {
  const [imageError, setImageError] = useState(false);

  if (!technology) return null;

  return (
    <div
      className="inspection-overlay"
      onClick={onClose}
    >
      <aside
        className="technology-inspection"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="inspection-close"
          onClick={onClose}
          aria-label="Close technology details"
        >
          x
        </button>

        <div className="inspection-header">

          <div className="inspection-logo">

            {technology.logo && !imageError ? (
              <img
                src={technology.logo}
                alt={`${technology.name} logo`}
                onError={() => setImageError(true)}
              />
            ) : (
              <span>
                {technology.name.charAt(0)}
              </span>
            )}

          </div>

          <div>

            <span>
              {technology.categoryName}
            </span>

            <h2>
              {technology.name}
            </h2>

            <small>
              {technology.type}
            </small>

          </div>

        </div>

        <div className="inspection-body">

          <div className="inspection-section">

            <span className="inspection-label">
              OVERVIEW
            </span>

            <p>
              {technology.description}
            </p>

          </div>

          <TechnologyUseCases
            useCases={technology.useCases}
          />

          <div className="inspection-section">

            <span className="inspection-label">
              WHY WE USE IT
            </span>

            <p>
              {technology.why}
            </p>

          </div>

        </div>

        <div className="inspection-footer">

          <span>
            ENTERPRISE GRADE
          </span>

          <span>
            PRODUCTION VERIFIED
          </span>

        </div>

      </aside>
    </div>
  );
}