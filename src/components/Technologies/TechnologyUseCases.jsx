import "./TechnologyUseCases.css";

export default function TechnologyUseCases({ useCases = [] }) {
  return (
    <div className="use-cases-section">
      <span className="inspection-label">
        PRIMARY USE CASES
      </span>

      <div className="use-cases-list">
        {useCases.map((useCase, index) => (
          <div className="use-case" key={useCase}>
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>{useCase}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}