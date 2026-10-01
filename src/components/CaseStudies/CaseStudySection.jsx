import "./CaseStudySection.css";

export default function CaseStudySection({ section }) {
  return (
    <article className="case-study-section">

      <div className="case-study-section-number">
        {section.number}
      </div>

      <div className="case-study-section-content">

        <h2>{section.title}</h2>

        <p>{section.text}</p>

      </div>

    </article>
  );
}