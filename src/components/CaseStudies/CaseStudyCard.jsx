import Link from "next/link";

import "./CaseStudyCard.css";

export default function CaseStudyCard({ study }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="case-study-card"
    >

      <div className="case-study-card-top">

        <span className="case-study-card-number">
          {/* {study.number} */}
        </span>

        <span className="case-study-card-year">
          {study.year}
        </span>

      </div>

      <div className="case-study-card-middle">

        {/* <span className="case-study-card-category">
          {study.category}
        </span> */}

        <h3>{study.title}</h3>

        <p>{study.summary}</p>

      </div>

      <div className="case-study-card-bottom">

        <div className="case-study-card-tags">

          {study.tags.slice(0, 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}

        </div>

        <span className="case-study-card-arrow">
          ↗
        </span>

      </div>

    </Link>
  );
}