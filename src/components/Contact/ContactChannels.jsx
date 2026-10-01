"use client";

import { useState } from "react";
import "./ContactChannels.css";

const channels = [
  {
    id: "01",
    shortTitle: "Email",
    title: "Email",
    type: "mail",

    eyebrow: "PRIMARY CHANNEL",

    headline: "Start a direct conversation.",

    description:
      "For project inquiries, collaborations, proposals, and detailed business conversations, reach the Replica Lab team directly.",

    bestFor: "Project inquiries",
    response: "Business communication",

    destination: "replicalabofficial@gmail.com",

    action: "Open Email",
    href: "mailto:replicalabofficial@gmail.com",
  },

  {
    id: "02",
    shortTitle: "WhatsApp",
    title: "WhatsApp",
    type: "whatsapp",

    eyebrow: "REAL-TIME CHANNEL",

    headline: "Talk to the team directly.",

    description:
      "A faster way to start a conversation, ask a quick question, or discuss an active project with the team.",

    bestFor: "Quick conversations",
    response: "Real-time dialogue",

    destination: "+92 321 2260509",

    action: "Open WhatsApp",
    href: "https://wa.me/923212260509",
  },

  {
    id: "03",
    shortTitle: "Phone",
    title: "Phone",
    type: "phone",

    eyebrow: "DIRECT LINE",

    headline: "Let's discuss the idea.",

    description:
      "For conversations that need more context, speak directly with the team and explore the next step together.",

    bestFor: "Direct consultation",
    response: "Voice conversation",

    destination: "+92 321 2260509",

    action: "Call Replica Lab",
    href: "tel:+923212260509",
  },

  {
    id: "04",
    shortTitle: "LinkedIn",
    title: "LinkedIn",
    type: "linkedin",

    eyebrow: "PROFESSIONAL NETWORK",

    headline: "Follow what we're building.",

    description:
      "Stay connected with Replica Lab through company updates, technical thinking, product work, and new developments.",

    bestFor: "Company updates",
    response: "Professional network",

    destination: "linkedin.com/company/replica-lab",

    action: "Visit LinkedIn",
    href: "https://www.linkedin.com/company/replica-lab",
  },

  {
    id: "05",
    shortTitle: "Instagram",
    title: "Instagram",
    type: "instagram",

    eyebrow: "STUDIO PRESENCE",

    headline: "See the work behind the work.",

    description:
      "Explore the visual side of Replica Lab, including studio updates, creative experiments, product moments, and team culture.",

    bestFor: "Studio updates",
    response: "Visual content",

    destination: "@replica_lab_",

    action: "Visit Instagram",
    href: "https://www.instagram.com/replica_lab_/",
  },
];


/* =========================================================
   COLORFUL CONTACT ICONS
========================================================= */

function ContactIcon({ type }) {
  /* -------------------------
     GMAIL
  ------------------------- */
  if (type === "mail") {
    return (
      <svg
        className="contact-brand-svg"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          fill="#EA4335"
          d="M7 11.5C7 9.57 8.57 8 10.5 8h27C39.43 8 41 9.57 41 11.5v25C41 38.43 39.43 40 37.5 40h-27C8.57 40 7 38.43 7 36.5v-25Z"
        />

        <path
          fill="#4285F4"
          d="M10.5 8h27c1.93 0 3.5 1.57 3.5 3.5v25c0 .77-.25 1.48-.67 2.06L24 24.4 7.67 38.56A3.47 3.47 0 0 1 7 36.5v-25C7 9.57 8.57 8 10.5 8Z"
        />

        <path
          fill="#34A853"
          d="M7.67 38.56 20.8 27.18l3.2 2.77 3.2-2.77 13.13 11.38A3.48 3.48 0 0 1 37.5 40h-27c-1.11 0-2.12-.52-2.83-1.44Z"
        />

        <path
          fill="#FBBC04"
          d="M7 11.5C7 9.57 8.57 8 10.5 8h27c1.1 0 2.1.51 2.82 1.42L24 23.73 7.68 9.42A3.48 3.48 0 0 0 7 11.5Z"
        />

        <path
          fill="#EA4335"
          d="M7 11.5v25c0 .77.25 1.48.67 2.06L24 24.4 7.67 10.24A3.48 3.48 0 0 0 7 11.5Z"
        />

        <path
          fill="#4285F4"
          d="M41 11.5v25c0 .77-.25 1.48-.67 2.06L24 24.4l16.33-14.16c.42.35.67.77.67 1.26Z"
        />
      </svg>
    );
  }


  /* -------------------------
     WHATSAPP
  ------------------------- */
  if (type === "whatsapp") {
    return (
      <svg
        className="contact-brand-svg"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="18"
          fill="#25D366"
        />

        <path
          fill="#ffffff"
          d="M33.5 14.7A13.35 13.35 0 0 0 24 10.75c-7.38 0-13.38 5.99-13.38 13.37 0 2.36.62 4.67 1.79 6.7L10.7 37.2l6.56-1.72a13.4 13.4 0 0 0 6.74 1.82h.01c7.37 0 13.37-6 13.37-13.38 0-3.57-1.39-6.93-3.88-9.22ZM24 34.92h-.01a11.1 11.1 0 0 1-5.66-1.55l-.4-.24-3.89 1.02 1.04-3.79-.26-.39a11.08 11.08 0 0 1-1.7-5.85c0-6.11 4.97-11.08 11.09-11.08 2.96 0 5.74 1.15 7.83 3.25a11.01 11.01 0 0 1 3.24 7.84c0 6.11-4.97 11.09-11.08 11.09Zm6.08-8.31c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.17-1.38-.51-2.63-1.62-.97-.86-1.63-1.92-1.82-2.25-.19-.33-.02-.51.14-.68.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.17-.74-1.79-1.01-2.45-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.72s1.17 3.16 1.33 3.38c.16.22 2.3 3.51 5.57 4.92.78.34 1.39.54 1.87.69.79.25 1.51.21 2.08.13.63-.09 1.95-.8 2.22-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.38Z"
        />
      </svg>
    );
  }


  /* -------------------------
     PHONE
  ------------------------- */
  if (type === "phone") {
    return (
      <svg
        className="contact-brand-svg contact-phone-svg"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="18"
          fill="url(#phoneGradient)"
        />

        <path
          d="M18.2 14.5c.65-.65 1.68-.75 2.44-.24l3.12 2.08c.76.51 1.08 1.48.77 2.35l-1.05 2.95a2.2 2.2 0 0 0 .5 2.28l.9.9a2.2 2.2 0 0 0 2.28.5l2.95-1.05c.87-.31 1.84.01 2.35.77l2.08 3.12c.51.76.41 1.79-.24 2.44l-1.82 1.82c-1.08 1.08-2.68 1.46-4.12.98-3.38-1.13-6.45-3.07-8.99-5.61-2.54-2.54-4.48-5.61-5.61-8.99-.48-1.44-.1-3.04.98-4.12l1.82-1.82Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <defs>
          <linearGradient
            id="phoneGradient"
            x1="8"
            y1="8"
            x2="40"
            y2="40"
          >
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="100%" stopColor="#00A884" />
          </linearGradient>
        </defs>
      </svg>
    );
  }


  /* -------------------------
     LINKEDIN
  ------------------------- */
  if (type === "linkedin") {
    return (
      <svg
        className="contact-brand-svg"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="6"
          width="36"
          height="36"
          rx="8"
          fill="#0A66C2"
        />

        <path
          fill="#ffffff"
          d="M14.5 19.3h4.15V33H14.5V19.3Zm2.08-6.3a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8ZM21.75 19.3h3.98v1.87h.06c.55-1.05 1.91-2.16 3.94-2.16 4.21 0 4.99 2.77 4.99 6.38V33h-4.14v-6.74c0-1.61-.03-3.68-2.24-3.68-2.25 0-2.59 1.76-2.59 3.56V33h-4V19.3Z"
        />
      </svg>
    );
  }


  /* -------------------------
     INSTAGRAM
  ------------------------- */
  return (
    <svg
      className="contact-brand-svg"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="instagramGradient"
          x1="7"
          y1="41"
          x2="41"
          y2="7"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="35%" stopColor="#DD2A7B" />
          <stop offset="65%" stopColor="#8134AF" />
          <stop offset="100%" stopColor="#515BD4" />
        </linearGradient>
      </defs>

      <rect
        x="5"
        y="5"
        width="38"
        height="38"
        rx="11"
        fill="url(#instagramGradient)"
      />

      <rect
        x="13"
        y="13"
        width="22"
        height="22"
        rx="7"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.6"
      />

      <circle
        cx="24"
        cy="24"
        r="5"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.6"
      />

      <circle
        cx="31.2"
        cy="16.8"
        r="1.6"
        fill="#ffffff"
      />
    </svg>
  );
}


export default function ContactChannels() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeChannel = channels[activeIndex];

  const isExternal = activeChannel.href.startsWith("http");

  return (
    <section className="contact-command">

      <div className="contact-command-grid" />


      <div className="contact-command-container">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="contact-command-header">

          <h2>
            Connect with
            <span> Replica Lab.</span>
          </h2>

          <p>
            Choose the channel that fits your conversation and
            connect directly with the people behind Replica Lab.
          </p>

        </div>


        {/* =========================================
            MAIN EXPERIENCE
        ========================================= */}

        <div className="contact-command-layout">

          {/* =========================================
              LEFT DIRECTORY
          ========================================= */}

          <div className="contact-command-selector">

            <div className="contact-selector-label">

              <span>CHANNEL DIRECTORY</span>

              <span>SELECT / 01—05</span>

            </div>


            <div className="contact-selector-list">

              {channels.map((channel, index) => {

                const isActive = activeIndex === index;

                return (
                  <button
                    key={channel.id}
                    type="button"
                    className={`contact-selector-item ${
                      isActive ? "active" : ""
                    }`}
                    onMouseEnter={() =>
                      setActiveIndex(index)
                    }
                    onFocus={() =>
                      setActiveIndex(index)
                    }
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    aria-pressed={isActive}
                  >

                    <span className="contact-selector-number">
                      {channel.id}
                    </span>

                    <span className="contact-selector-name">
                      {channel.title}
                    </span>

                    <span className="contact-selector-line" />

                    <span className="contact-selector-node">
                      <span />
                    </span>

                  </button>
                );

              })}

            </div>

          </div>


          {/* =========================================
              ACTIVE PANEL
          ========================================= */}

          <div
            className="contact-active-panel"
            key={activeChannel.id}
          >

            {/* Watermark */}

            <span
              className="contact-panel-big-number"
              aria-hidden="true"
            >
              {activeChannel.id}
            </span>


            {/* Top */}

            <div className="contact-panel-top">

              <div className="contact-panel-index">

                <span>{activeChannel.id}</span>

                <span>/</span>

                <span>{activeChannel.eyebrow}</span>

              </div>


              <span className="contact-panel-status">

                <i />

                AVAILABLE

              </span>

            </div>


            {/* Main content */}

            <div className="contact-panel-center">

              <div
                className={`contact-panel-icon contact-panel-icon-${activeChannel.type}`}
              >
                <ContactIcon type={activeChannel.type} />
              </div>


              <div className="contact-panel-information">

                <span className="contact-panel-type">
                  {activeChannel.title}
                </span>


                <h3>
                  {activeChannel.headline}
                </h3>


                <p>
                  {activeChannel.description}
                </p>


                {/* Meta information */}

                <div className="contact-panel-meta">

                  <div>
                    <span>BEST FOR</span>

                    <strong>
                      {activeChannel.bestFor}
                    </strong>
                  </div>


                  <div>
                    <span>CHANNEL</span>

                    <strong>
                      {activeChannel.response}
                    </strong>
                  </div>

                </div>

              </div>

            </div>


            {/* Action */}

            <a
              href={activeChannel.href}
              target={isExternal ? "_blank" : undefined}
              rel={
                isExternal
                  ? "noopener noreferrer"
                  : undefined
              }
              className="contact-panel-action"
            >

              <div className="contact-panel-action-copy">

                <span className="contact-panel-action-label">
                  {activeChannel.action}
                </span>

                <span className="contact-panel-destination">
                  {activeChannel.destination}
                </span>

              </div>


              <span className="contact-panel-action-line" />


              <span className="contact-panel-arrow">
                ↗
              </span>

            </a>

          </div>

        </div>


        {/* =========================================
            MOBILE SELECTOR
        ========================================= */}

        <div className="contact-mobile-selector">

          {channels.map((channel, index) => (

            <button
              key={channel.id}
              type="button"
              className={`contact-mobile-channel ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() =>
                setActiveIndex(index)
              }
            >

              <span>
                {channel.id}
              </span>

              {channel.shortTitle}

            </button>

          ))}

        </div>

      </div>

    </section>
  );
}