import "./MissionVision.css";

export default function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="mission-vision-container">

        <div className="mission-vision-grid">

          {/* Mission */}
          <article className="mission-vision-card">
            <div className="mission-vision-card-top">
              <span className="mission-vision-number">01</span>
              <span className="mission-vision-type">MISSION</span>
            </div>

            <div className="mission-vision-card-content">
              <h2>Our Mission</h2>

              <p>
                Empowering organizations to thrive in the AI era by
                engineering scalable, intelligent, and business-critical
                digital ecosystems.
              </p>
            </div>

            <div
              className="mission-vision-watermark"
              aria-hidden="true"
            >
              M
            </div>

            {/* <div className="mission-vision-corner" /> */}
          </article>

          {/* Vision */}
          <article className="mission-vision-card">
            <div className="mission-vision-card-top">
              <span className="mission-vision-number">02</span>
              <span className="mission-vision-type">VISION</span>
            </div>

            <div className="mission-vision-card-content">
              <h2>Our Vision</h2>

              <p>
                To be the definitive global benchmark for Applied AI
                and Enterprise Digital Transformation, bridging human
                strategy with autonomous machine intelligence.
              </p>
            </div>

            <div
              className="mission-vision-watermark"
              aria-hidden="true"
            >
              V
            </div>

            {/* <div className="mission-vision-corner" /> */}
          </article>

        </div>

      </div>
    </section>
  );
}