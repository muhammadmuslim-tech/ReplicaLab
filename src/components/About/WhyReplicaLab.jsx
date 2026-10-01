"use client";

import { useState } from "react";
import "./WhyReplicaLab.css";

const reasons = [
  {
    number: "01",
    title: "AI-Ready Systems",
    description:
      "Every software solution we construct is architected with neural integrations in mind, ensuring your system evolves seamlessly as AI capabilities expand.",
  },
  {
    number: "02",
    title: "Business Impact",
    description:
      "We write code tied directly to business metrics, cost reduction, operational speed, and revenue growth—never technology for technology's sake.",
  },
  {
    number: "03",
    title: "Secure Architecture",
    description:
      "Enterprise security and high-throughput reliability are embedded at the core, protecting sensitive operational data across every endpoint.",
  },
  {
    number: "04",
    title: "Modern Tech Stack",
    description:
      "We utilize proven, cutting-edge frameworks and microservice standards to ensure zero tech debt and maximum future-proof flexibility.",
  },
  {
    number: "05",
    title: "Strategic Partnership",
    description:
      "We function as your dedicated engineering partner, providing continuous strategic guidance, iterative optimization, and technical support.",
  },
  {
    number: "06",
    title: "Tangible Advantage",
    description:
      "Our ultimate benchmark of success is measurable organizational transformation and tangible competitive advantage.",
  },
];

export default function WhyReplicaLab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeReason = reasons[activeIndex];

  const progress =
    reasons.length > 1
      ? (activeIndex / (reasons.length - 1)) * 100
      : 0;

  return (
    <section className="why-replica">
      <div className="why-replica-container">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="why-replica-header">
          <h2>
            Why Choose <span>Replica Lab</span>
          </h2>

          <p>
            We prepare businesses for an AI-driven future by turning
            technological complexity into sustainable operational value.
          </p>
        </div>

        {/* =========================
            DESKTOP TIMELINE
        ========================== */}
        <div className="why-timeline-desktop">
          <div className="why-timeline">

            {/* Base gray line */}
            <div className="why-timeline-line" />

            {/* Active progress line */}
            <div
              className="why-timeline-progress"
              style={{ width: `${progress}%` }}
            />

            {reasons.map((reason, index) => {
              const isActive = activeIndex === index;
              const isPassed = index <= activeIndex;

              return (
                <button
                  key={reason.number}
                  type="button"
                  className={`why-timeline-item ${
                    isActive ? "active" : ""
                  } ${isPassed ? "passed" : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${reason.title}`}
                  aria-pressed={isActive}
                >
                  <span className="why-timeline-number">
                    {reason.number}
                  </span>

                  <span className="why-timeline-node">
                    <span />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================
            MOBILE SELECTOR
        ========================== */}
        <div className="why-mobile-selector">
          {reasons.map((reason, index) => (
            <button
              key={reason.number}
              type="button"
              className={`why-mobile-button ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View ${reason.title}`}
              aria-pressed={activeIndex === index}
            >
              {reason.number}
            </button>
          ))}
        </div>

        {/* =========================
            ACTIVE CONTENT
        ========================== */}
        <div
          className="why-active-content"
          key={activeReason.number}
        >
          <div className="why-active-left">

            <span className="why-active-count">
              {activeReason.number}
              <span> / 06</span>
            </span>

            <h3>{activeReason.title}</h3>

          </div>

          <div className="why-active-divider" />

          <div className="why-active-right">
            <span className="why-active-label">
              WHY REPLICA LAB
            </span>

            <p>{activeReason.description}</p>
          </div>
        </div>

      </div>
    </section>
  );
}