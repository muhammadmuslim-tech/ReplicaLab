import { useState } from "react";
import TechnologyBadge from "./TechnologyBadge";
import "./TechnologyItem.css";

export default function TechnologyItem({
  technology,
  onSelect,
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="technology-item"
      onClick={() => onSelect(technology)}
    >
      <div className="technology-item-top">

        <div className="technology-logo">

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

        <TechnologyBadge
          category={technology.categoryName}
          type={technology.type}
        />

      </div>

      <div className="technology-item-content">

        <h3>
          {technology.name}
        </h3>

        <p>
          {technology.description}
        </p>

      </div>

      <div className="technology-item-bottom">

        <span>
          INSPECT TECHNOLOGY
        </span>

        <span className="technology-arrow">
          ↗
        </span>

      </div>

    </article>
  );
}