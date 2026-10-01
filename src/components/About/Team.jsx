"use client";

import { useEffect, useState } from "react";
import "./Team.css";

const teamMembers = [
  {
    id: 1,
    number: "01",
    name: "Muhammad Sufiyan",
    role: "Product Lead & Full Stack Engineer",
    description:
      "Leads product development and builds scalable full-stack systems with a focus on performance, architecture, and real-world digital solutions.",
    image: "/images/sufiyan.jpeg",
    linkedin:
      "https://www.linkedin.com/in/sufiyan-hussain-954b31287/",
  },

  {
    id: 2,
    number: "02",
    name: "Zeeshan Ahmed",
    role: "Lead AI Engineer",
    description:
      "Works on intelligent systems, AI-driven solutions, and machine learning technologies that turn complex problems into practical digital products.",
    image: "/images/zeeshan.jpeg",
    linkedin: "https://www.linkedin.com/in/zeeshan-ahmed-863416281/",
  },

  {
    id: 3,
    number: "03",
    name: "Ateeq Ur Rehman",
    role: "Product Engineer",
    description:
      "Builds and improves digital products by combining software engineering, product thinking, and practical solutions for real-world requirements.",
    image: "/images/ateeq.jpeg",
    linkedin: "https://www.linkedin.com/in/ateeq-ur-rehman-5a588b2b9/",
  },

  {
    id: 4,
    number: "04",
    name: "Muhammad Muslim",
    role: "Web Developer & Marketing Associate",
    description:
      "Bridges technology and creativity by crafting modern web experiences while turning digital ideas into a stronger, more recognizable presence.",
    image: "/images/muhammad.jpeg",
    linkedin: "https://www.linkedin.com/in/muhammad-muslim-249755424/",
  },

  {
    id: 5,
    number: "05",
    name: "Muhammad Shuraim",
    role: "Associate Product Engineer",
    description:
      "Contributes to the team's ongoing projects, helping turn ideas into useful digital experiences and supporting the overall product development process.",
    image: "/images/shuraim.jpeg",
    linkedin: "https://www.linkedin.com/in/muhammad-shuraim-05673b367/",
  },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  /*
    =========================================
    AUTOMATIC SLIDER
    =========================================
    Slider automatically changes every 2600ms.

    When user hovers over the active card,
    isPaused becomes true and the slider stops.
  */

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === teamMembers.length - 1 ? 0 : current + 1
      );
    }, 2600);

    return () => clearInterval(interval);
  }, [isPaused]);


  /*
    =========================================
    CARD POSITION
    =========================================
  */

  const getPosition = (index) => {
    const total = teamMembers.length;

    const difference =
      (index - activeIndex + total) % total;

    if (difference === 0) {
      return "active";
    }

    if (difference === 1) {
      return "next";
    }

    if (difference === 2) {
      return "far-next";
    }

    if (difference === total - 1) {
      return "previous";
    }

    if (difference === total - 2) {
      return "far-previous";
    }

    return "hidden";
  };


  /*
    =========================================
    MANUAL DOT NAVIGATION
    =========================================
  */

  const handlePaginationClick = (index) => {
    setActiveIndex(index);
  };


  /*
    =========================================
    HOVER HANDLERS
    =========================================
  */

  const handleCardMouseEnter = (isActive) => {
    if (!isActive) return;

    setIsHovered(true);
    setIsPaused(true);
  };

  const handleCardMouseLeave = (isActive) => {
    if (!isActive) return;

    setIsHovered(false);
    setIsPaused(false);
  };


  return (
    <section className="team-section">

      <div className="team-section-container">

        {/* =================================
            HEADER
        ================================= */}

        <div className="team-header">

          <div className="team-header-meta">

            <span>REPLICA LAB</span>

            <span className="team-header-line" />

            <span>OUR TEAM</span>

          </div>


          <div className="team-header-main">

            <div className="team-header-copy">

              <h2>
                The People Behind
                <span> Replica Lab.</span>
              </h2>

              <p>
                A focused team building intelligent digital systems,
                scalable software, and technology designed for real
                operational impact.
              </p>

            </div>


            <div className="team-counter">

              <span>
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="team-counter-divider">
                /
              </span>

              <span>
                {String(teamMembers.length).padStart(2, "0")}
              </span>

            </div>

          </div>

        </div>


        {/* =================================
            CAROUSEL
        ================================= */}

        <div className="team-carousel">

          <div className="team-stage">

            {teamMembers.map((member, index) => {

              const position = getPosition(index);

              const isActive =
                position === "active";

              const isCurrentHovered =
                isActive && isHovered;

              return (

                <article
                  key={member.id}
                  className={`
                    team-card
                    team-card-${position}
                    ${isCurrentHovered ? "team-card-hovered" : ""}
                  `}
                  onClick={() =>
                    !isActive &&
                    handlePaginationClick(index)
                  }
                  onMouseEnter={() =>
                    handleCardMouseEnter(isActive)
                  }
                  onMouseLeave={() =>
                    handleCardMouseLeave(isActive)
                  }
                  aria-hidden={!isActive}
                >

                  {/* =================================
                      IMAGE
                  ================================= */}

                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-card-image"
                    draggable="false"
                  />


                  {/* =================================
                      IMAGE SHADE
                  ================================= */}

                  <div className="team-card-image-shade" />


                  {/* =================================
                      BOTTOM GRADIENT
                  ================================= */}

                  <div className="team-card-bottom-gradient" />


                  {/* =================================
                      ACTIVE CARD CONTENT
                  ================================= */}

                  {isActive && (
                    <>

                      {/* =================================
                          HOVER DESCRIPTION
                      ================================= */}

                      <div className="team-card-description">

                        {/* <span className="team-description-label">
                          WHAT I DO
                        </span> */}

                        <p>
                          {member.description}
                        </p>

                      </div>


                      {/* =================================
                          PERSON INFO
                      ================================= */}

                      <div className="team-card-content">

                        <div className="team-card-person">

                          <h3>
                            {member.name}
                          </h3>

                          <p>
                            {member.role}
                          </p>

                        </div>


                        {/* =================================
                            LINKEDIN
                        ================================= */}

                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-linkedin"
                          aria-label={`Open ${member.name}'s LinkedIn profile`}
                          onClick={(event) =>
                            event.stopPropagation()
                          }
                        >

                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >

                            <path d="M6.5 8.25H3.25V20H6.5V8.25ZM4.88 3C3.84 3 3 3.84 3 4.88C3 5.91 3.84 6.75 4.88 6.75C5.91 6.75 6.75 5.91 6.75 4.88C6.75 3.84 5.91 3 4.88 3ZM20.75 13.27C20.75 9.73 18.86 8.08 16.34 8.08C14.31 8.08 13.4 9.2 12.89 9.98V8.25H9.64V20H12.89V14.18C12.89 12.65 13.18 11.17 15.08 11.17C16.95 11.17 16.97 12.92 16.97 14.28V20H20.22V13.55C20.22 13.45 20.22 13.36 20.22 13.27H20.75Z" />

                          </svg>

                        </a>

                      </div>

                    </>
                  )}

                </article>
              );
            })}

          </div>

        </div>


        {/* =================================
            PAGINATION
        ================================= */}

        <div className="team-pagination">

          {teamMembers.map((member, index) => (

            <button
              key={member.id}
              type="button"
              className={`
                team-pagination-dot
                ${activeIndex === index ? "active" : ""}
              `}
              onClick={() =>
                handlePaginationClick(index)
              }
              aria-label={`Show ${member.name}`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

