"use client";

import "./TransformationCTA.css";

export default function TransformationCTA() {
  return (
    <section className="transformation-cta">
      <div className="transformation-cta-grid"></div>

      <div className="transformation-cta-circle transformation-cta-circle-one"></div>

      <div className="transformation-cta-circle transformation-cta-circle-two"></div>

      <div className="transformation-cta-content">
        <div className="transformation-cta-main">

          <div className="transformation-cta-label">
            <span className="transformation-cta-pulse"></span>

            <span>
              READY FOR DIGITAL TRANSFORMATION
            </span>
          </div>

          <h2>
            Begin Your Journey
            <span> with Replica Lab</span>
          </h2>

          <p>
            Transform your organization's operational capability with
            intelligent software solutions designed for the future.
          </p>

          {/* CTA BUTTON */}

          <a
            href="/contact#contact-inquiry"
            className="transformation-cta-button"
          >
            <span>
              SCHEDULE STRATEGY CONSULTATION
            </span>

            <span className="transformation-cta-arrow">
              ↗
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}