import Link from "next/link";
import "./CoreCapabilities.css";

const capabilities = [
  {
    number: "01",
    title: "Applied AI",
    description:
      "AI systems that turn enterprise data, processes, and decisions into intelligent operational capabilities.",
    tags: ["AI Solutions", "AI Chatbots", "AI Agents"],
    slug: "applied-ai",
  },
  {
    number: "02",
    title: "Automation & Workflow",
    description:
      "Intelligent automation that removes repetitive operational friction and connects complex business workflows.",
    tags: ["Workflow Automation", "Business Process Automation"],
    slug: "automation-workflow",
  },
  {
    number: "03",
    title: "Software Engineering",
    description:
      "Scalable software architectures engineered for reliability, performance, security, and long-term organizational growth.",
    tags: [
      "Web Application Development",
      "ERP & Business Management Systems",
      "System Integration",
    ],
    slug: "software-engineering",
  },
  {
    number: "04",
    title: "Strategy & Design",
    description:
      "Business-focused digital strategy and system design that transforms complex requirements into clear technical direction.",
    tags: ["Digital Strategy", "System Architecture"],
    slug: "strategy-design",
  },
];

export default function CoreCapabilities() {
  return (
    <section className="core-capabilities">
      <div className="capabilities-container">

        {/* Section Header */}
        <div className="capabilities-header">
          <div className="capabilities-heading">
            <span className="capabilities-label">
              OUR CAPABILITIES
            </span>

            {/* Future heading can be added here */}
            {/* 
            <h2>
              Engineering the systems
              <br />
              behind digital transformation.
            </h2>
            */}
          </div>

          <p className="capabilities-intro">
            From intelligent software to automated operations, Replica Lab
            combines strategy, engineering, and emerging technology to build
            systems designed for long-term business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="capabilities-grid">
          {capabilities.map((capability) => (
            <Link
              href={`/services/${capability.slug}`}
              className="service-card"
              key={capability.number}
            >
              {/* Top */}
              <div className="service-card-top">
                <span className="service-number">
                  {/* {capability.number} */}
                </span>

                <span className="service-card-arrow">
                  ↗
                </span>
              </div>

              {/* Main Content */}
              <div className="service-card-content">
                <h3>{capability.title}</h3>

                <p>{capability.description}</p>
              </div>

              {/* Bottom */}
              <div className="service-card-bottom">
                <div className="service-tags">
                  {capability.tags.map((tag) => (
                    <span className="service-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Future CTA can be added here */}
                {/*
                <span className="service-explore">
                  Explore Service
                </span>
                */} 
              </div>

              {/* Hover Line */}
              <span className="service-card-line"></span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}