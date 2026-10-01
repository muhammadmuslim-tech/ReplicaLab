import "./TechnologyBadge.css";

export default function TechnologyBadge({ category, type }) {
  return (
    <div className="technology-badges">
      <span className="technology-category-badge">
        {category}
      </span>

      <span className="technology-type-badge">
        {type}
      </span>
    </div>
  );
}