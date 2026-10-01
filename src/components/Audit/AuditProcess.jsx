import "./AuditProcess.css";

const process = [
  {
    number: "01",
    title: "Submit",
    description:
      "Tell us about your business, systems, and current operational challenges.",
  },
  {
    number: "02",
    title: "Review",
    description:
      "Replica Lab reviews the submitted context and identifies areas worth investigating.",
  },
  {
    number: "03",
    title: "Discussion",
    description:
      "Our team contacts you to discuss the most relevant opportunities and potential next steps.",
  },
];

export default function AuditProcess() {
  return (
    <section className="audit-process">
      <div className="audit-process-container">
        <div className="audit-process-header">
          <span>AFTER SUBMISSION</span>

          <h2>
            What Happens <span>Next.</span>
          </h2>
        </div>

        <div className="audit-process-grid">
          {process.map((item) => (
            <article
              className="audit-process-item"
              key={item.number}
            >
              <div className="audit-process-number">
                {item.number}
              </div>

              <div>
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="audit-confidentiality">
          <div>
            <span>YOUR INFORMATION</span>

            <h3>
              Handled with
              <span> discretion.</span>
            </h3>
          </div>

          <p>
            Information submitted through the audit request
            is used to understand your inquiry and communicate
            with you regarding the requested assessment.
          </p>
        </div>
      </div>
    </section>
  );
}