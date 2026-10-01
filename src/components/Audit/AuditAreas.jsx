import "./AuditAreas.css";

const auditAreas = [
  {
    number: "01",
    short: "SYSTEMS",
    title: "Existing Software",
    description:
      "Current applications, internal systems, and operational tools.",
  },
  {
    number: "02",
    short: "WORKFLOW",
    title: "Business Workflows",
    description:
      "Manual processes, repetitive tasks, and operational bottlenecks.",
  },
  {
    number: "03",
    short: "INTELLIGENCE",
    title: "AI Opportunities",
    description:
      "Processes where AI, intelligent agents, or automation could add value.",
  },
  {
    number: "04",
    short: "INFRASTRUCTURE",
    title: "Digital Infrastructure",
    description:
      "System integration, data movement, and modernization opportunities.",
  },
  {
    number: "05",
    short: "EXPERIENCE",
    title: "Customer Experience",
    description:
      "Web platforms, digital journeys, and user-facing processes.",
  },
];

export default function AuditAreas() {
  return (
    <section className="audit-areas">
      <div className="audit-areas-container">
        <div className="audit-areas-header">
          <span>ASSESSMENT SCOPE</span>

          <h2>
            What We <span>Evaluate.</span>
          </h2>

          <p>
            The initial audit focuses on the areas where software,
            automation, and applied AI can create meaningful
            operational improvements.
          </p>
        </div>

        <div className="audit-areas-track">
          <div className="audit-areas-line" />

          {auditAreas.map((area) => (
            <article
              className="audit-area"
              key={area.number}
            >
              <div className="audit-area-top">
                <span className="audit-area-number">
                  {area.number}
                </span>

                <span className="audit-area-node">
                  <i />
                </span>
              </div>

              <span className="audit-area-short">
                {area.short}
              </span>

              <h3>{area.title}</h3>

              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}