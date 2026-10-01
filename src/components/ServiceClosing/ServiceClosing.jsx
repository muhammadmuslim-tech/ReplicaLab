"use client";

import "./ServiceClosing.css";

export default function ServiceClosing() {
  return (
    <section className="service-closing">
      <div className="service-closing-grid"></div>

      <div className="service-closing-circle service-closing-circle-one"></div>
      <div className="service-closing-circle service-closing-circle-two"></div>

      <div className="service-closing-content">
        <div className="service-closing-main">

          <div className="service-closing-label">
            <span className="service-closing-pulse"></span>

            <span>READY FOR DIGITAL TRANSFORMATION</span>
          </div>

          <h2>
            Begin Your Journey
            <span> with Replica Lab</span>
          </h2>

          <p>
            Transform your organization's operational capability with
            intelligent software solutions designed for the future.
          </p>

          <a
            href="/contact#contact-inquiry"
            className="service-closing-button"
          >
            <span>SCHEDULE STRATEGY CONSULTATION</span>

            <span className="service-closing-arrow">
              ↗
            </span>
          </a>

        </div>

        {/* 
        <div className="service-closing-bottom">
          <span>REPLICA LAB</span>

          <div className="service-closing-line"></div>

          <span>DIGITAL TRANSFORMATION</span>
        </div>
        */}

      </div>
    </section>
  );
}