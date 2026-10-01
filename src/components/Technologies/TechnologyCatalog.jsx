import TechnologyItem from "./TechnologyItem";
import "./TechnologyCatalog.css";

export default function TechnologyCatalog({
  technologies,
  onSelect,
}) {
  if (!technologies.length) {
    return (
      <div className="technology-empty">
        <strong>No technologies found</strong>
        <p>
          Try another search term or select a different technology category.
        </p>
      </div>
    );
  }

  return (
    <div className="technology-catalog">
      {technologies.map((technology) => (
        <TechnologyItem
          key={technology.id}
          technology={technology}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}