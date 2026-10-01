import Link from "next/link";
import "./AuditHero.css";

export default function AuditHero() {
  return (
    <section className="audit-hero">
      <div className="audit-hero-grid" />

      <div className="audit-hero-container">
        <div className="audit-hero-top">
          <div className="audit-hero-eyebrow">
            <span>FREE DIGITAL &amp; AI AUDIT</span>
            <span className="audit-hero-line" />
            <span>REPLICA LAB</span>
          </div>

          {/* <span className="audit-hero-index">
            01 / ASSESSMENT
          </span> */}
        </div>

        <div className="audit-hero-content">
          <h1>
            Find the Opportunities
            <span>Your Business Is Missing.</span>
          </h1>

          <p>
            Get an initial assessment of your digital systems,
            operational workflows, and AI opportunities to identify
            areas for automation, modernization, and intelligent
            transformation.
          </p>

          {/* <Link href="#audit-form" className="audit-hero-button">
            <span>Start Free Audit</span>

            <span className="audit-hero-button-arrow">
              ↓
            </span>
          </Link> */}
        </div>

        {/* <div className="audit-hero-trust">
          <span>No Obligation</span>
          <i />
          <span>Confidential Inquiry</span>
          <i />
          <span>Initial Assessment</span>
        </div> */}
      </div>
    </section>
  );
}