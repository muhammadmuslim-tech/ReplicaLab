"use client";

import { useState } from "react";
import "./HomeIntro.css";

const points = [
  {
    number: "01",
    title: "Who We Are",
    description:
      "A premier studio composed of senior architects and technology strategists dedicated to enterprise excellence.",
  },
  {
    number: "02",
    title: "What We Do",
    description:
      "We engineer Websites, Web Applications, ERP & Business Systems, Process Automation pipelines, and custom AI Solutions.",
  },
  {
    number: "03",
    title: "How We Help",
    description:
      "We streamline friction, automate repetitive corporate workflows, and convert legacy operational complexity into clean digital velocity.",
  },
  {
    number: "04",
    title: "Why Trust Us",
    description:
      "We prioritize business-centric impact, zero-defect engineering, robust security, and long-term technical partnerships.",
  },
];

export default function HomeIntro() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="home-intro-section">

      <div className="home-intro-bg-number">
        04
      </div>

      <div className="home-intro-wrapper">

        {/* =================================
            HEADING
        ================================= */}

        <div className="home-intro-heading">

          <span className="home-intro-eyebrow">
            THE REPLICA LAB APPROACH
          </span>

          <h2>
            Modernizing enterprise operations through
            <span> intelligent software solutions.</span>
          </h2>

          <p>
            At <strong>Replica Lab</strong>, we bridge high-level corporate
            strategy with cutting-edge software engineering. We don't just
            build static software; we architect self-reinforcing digital
            ecosystems equipped with applied artificial intelligence.
          </p>

        </div>


        {/* =================================
            INTERACTIVE TYPOGRAPHY
        ================================= */}

        <div className="home-intro-experience">

          {/* <div className="home-intro-experience-top">

            <span>
              EXPLORE
            </span>

            <span>
              01 — 04
            </span>

          </div> */}


          <div className="home-intro-items">

            {points.map((item, index) => {

              const active = activeIndex === index;

              return (
                <button
                  key={item.number}
                  type="button"
                  className={`home-intro-item ${
                    active ? "is-active" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >

                  <span className="home-intro-item-number">
                    {item.number}
                  </span>

                  <span className="home-intro-item-title">
                    {item.title}
                  </span>

                  <span className="home-intro-item-arrow">
                    ↗
                  </span>

                  <span className="home-intro-item-description">
                    {item.description}
                  </span>

                </button>

              );

            })}

          </div>


          {/* =================================
              ACTIVE DESCRIPTION
          ================================= */}

          {/* <div className="home-intro-active-info">

            <div className="home-intro-active-line"></div>

            <div className="home-intro-active-number">
              {points[activeIndex].number}
            </div>

            <p>
              {points[activeIndex].description}
            </p>

          </div> */}

        </div>


        {/* =================================
            FOOTER
        ================================= */}

        {/* <div className="home-intro-footer">

          <span>STRATEGY</span>

          <span></span>

          <span>ENGINEERING</span>

          <span></span>

          <span>INTELLIGENCE</span>

          <span></span>

          <span>IMPACT</span>

        </div> */}

      </div>

    </section>
  );
}