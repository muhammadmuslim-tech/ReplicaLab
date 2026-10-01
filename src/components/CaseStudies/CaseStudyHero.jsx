import "./CaseStudyHero.css";

export default function CaseStudiesHero() {
    return (
        <section className="case-studies-hero">

            <div className="case-studies-hero-grid" />

            <div className="case-studies-hero-inner">

                <div className="case-studies-hero-meta">
                    {/* <span>REPLICA LAB</span> */}

                    <span className="case-studies-hero-line" />

                    <span>CASE STUDIES</span>
                </div>

                <div className="case-studies-hero-content">

                    <div className="case-studies-hero-title-wrap">

                        <h1>
                            Work that
                            <br />
                            <span>creates impact</span>
                        </h1>

                        <p>
                            A collection of selected projects, strategic
                            explorations, research, and digital systems built
                            by Replica Lab.
                        </p>

                    </div>

                    {/* <div className="case-studies-hero-index">
            <span>01</span>
            <span>/</span>
            <span>WORK</span>
          </div> */}

                </div>

                {/* <div className="case-studies-hero-bottom">

          <span>SELECTED WORK</span>

          <span className="case-studies-scroll-line" />

          <span>SCROLL TO EXPLORE</span>

        </div> */}

            </div>
        </section>
    );
}