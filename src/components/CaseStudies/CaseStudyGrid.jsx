import caseStudies from "@/data/caseStudies";

import CaseStudyCard from "./CaseStudyCard";

import "./CaseStudyGrid.css";

export default function CaseStudyGrid() {
  return (
    <section className="case-study-grid-section">

      <div className="case-study-grid-container">

        <div className="case-study-grid-header">

          <div>
            {/* <span className="case-study-grid-label">
              SELECTED PROJECTS
            </span> */}

            <h2>
              A closer look at
              <span> our work.</span>
            </h2>
          </div>

          <p>
            Explore the thinking, research, strategy, and systems
            behind selected Replica Lab projects.
          </p>

        </div>

        <div className="case-study-grid">

          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              study={study}
            />
          ))}

        </div>

      </div>

    </section>
  );
}   