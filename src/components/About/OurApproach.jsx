import "./OurApproach.css";

const approachSteps = [
  {
    number: "01",
    label: "UNDERSTAND",
    title: "Discover",
    description:
      "We analyze workflows, identify operational bottlenecks, and map high-value opportunities for digital modernization and AI integration.",
  },
  {
    number: "02",
    label: "ENGINEER",
    title: "Build",
    description:
      "We engineer secure and scalable software solutions around your operational model using modern technology stacks and robust patterns.",
  },
  {
    number: "03",
    label: "EVOLVE",
    title: "Transform",
    description:
      "We deploy the intelligent ecosystem, integrate AI capabilities, and enable seamless adoption for long-term competitive advantage.",
  },
];

export default function OurApproach() {
  return (
    <section className="our-approach">
      <div className="our-approach-container">

        {/* Heading */}
        <div className="our-approach-header">
          <h2>Our Approach</h2>

          <p>
            A structured three-phase methodology engineered for rapid
            alignment and long-term stability.
          </p>
        </div>

        {/* Process */}
        <div className="approach-process">

          <div className="approach-grid">
            {approachSteps.map((step) => (
              <article className="approach-step" key={step.number}>

                <div className="approach-step-rail">
                  <div className="approach-node">
                    <span>{step.number}</span>
                  </div>

                  <span className="approach-step-label">
                    {step.label}
                  </span>
                </div>

                <div className="approach-step-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}