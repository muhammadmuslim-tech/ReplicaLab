import Link from "next/link";

import "./CaseStudyDetailHero.css";

export default function CaseStudyDetailHero({ study }) {
  return (
    <section className="case-study-detail-hero">

      <div className="case-study-detail-hero-grid" />

      <div className="case-study-detail-hero-inner">

        {/* <Link
          href="/case-studies"
          className="case-study-detail-back"
        >
          <span>←</span>
          <span>ALL CASE STUDIES</span>
        </Link> */}

        <div className="case-study-detail-meta">

          {/* <span>{study.number}</span> */}

          {/* <span className="case-study-detail-meta-line" /> */}

          <span>{study.category}</span>

          <span className="case-study-detail-meta-line" />

          <span>{study.year}</span>

        </div>

        <div className="case-study-detail-title">

          {/* <span className="case-study-detail-eyebrow">
            CASE STUDY
          </span> */}

          <h1>{study.title}</h1>

          <p>{study.summary}</p>

        </div>

        <div className="case-study-detail-info">

          {/* <div>
            <span>CLIENT</span>
            <strong>{study.client}</strong>
          </div> */}

          <div>
            <span>LOCATION</span>
            <strong>{study.location}</strong>
          </div>

          <div>
            <span>TYPE</span>
            <strong>{study.category}</strong>
          </div>

        </div>

      </div>

    </section>
  );
}