"use client";

import { useMemo, useState } from "react";
import { technologies } from "@/data/technologies";
import { technologyCategories } from "@/data/technologyCategories";

import TechnologyStats from "./TechnologyStats";
import TechnologySearch from "./TechnologySearch";
import TechnologyCategories from "./TechnologyCategories";
import TechnologyCatalog from "./TechnologyCatalog";
import TechnologyInspection from "./TechnologyInspection";

import "./TechnologyExplorer.css";

export default function TechnologyExplorer() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState(null);

  const filteredTechnologies = useMemo(() => {
    return technologies.filter((technology) => {
      const matchesCategory =
        activeCategory === "all" ||
        technology.category === activeCategory;

      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        technology.name.toLowerCase().includes(searchValue) ||
        technology.type.toLowerCase().includes(searchValue) ||
        technology.description.toLowerCase().includes(searchValue) ||
        technology.categoryName.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section className="technology-explorer">
      <div className="explorer-container">

        {/* STATS */}
        <TechnologyStats />

        {/* TECHNOLOGY UNIVERSE */}
        <div className="universe-section">
          <div className="universe-heading">
            {/* <span>01 / TECHNOLOGY UNIVERSE</span> */}

            <h2>
              One ecosystem. Infinite possibilities.
            </h2>

            <p>
              Explore the technology stack behind modern digital products,
              intelligent systems, automation workflows, and scalable
              infrastructure.
            </p>
          </div>

          <div className="technology-universe">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <div className="universe-core">
              <strong>60+</strong>
              <span>TECHNOLOGIES</span>
            </div>

            <div className="floating-tech tech-one">
              React
            </div>

            <div className="floating-tech tech-two">
              AI
            </div>

            <div className="floating-tech tech-three">
              Python
            </div>

            <div className="floating-tech tech-four">
              AWS
            </div>

            <div className="floating-tech tech-five">
              Node.js
            </div>

            <div className="floating-tech tech-six">
              Next.js
            </div>

            <div className="floating-tech tech-seven">
              Docker
            </div>

            <div className="floating-tech tech-eight">
              OpenAI
            </div>
          </div>
        </div>

        {/* TECHNOLOGY CATALOG */}
        <div className="catalog-section">

          <div className="catalog-heading">
            <div>
              {/* <span>02 / EXPLORE STACK</span> */}

              <h2>
                Technology catalog
              </h2>
            </div>

            <p>
              Search, filter, and inspect the technologies across our
              complete engineering ecosystem.
            </p>
          </div>

          {/* SEARCH */}
          <TechnologySearch
            search={search}
            setSearch={setSearch}
            resultCount={filteredTechnologies.length}
          />

          {/* CATEGORIES */}
          <TechnologyCategories
            categories={technologyCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            technologies={technologies}
          />

          {/* CATALOG */}
          <TechnologyCatalog
            technologies={filteredTechnologies}
            onSelect={setSelectedTech}
          />
        </div>

        {/* AI ECOSYSTEM */}
            {/* <div className="ai-ecosystem">

            <div className="ai-content">

                <span>03 / AI ECOSYSTEM</span>

                <h2>
                Intelligence connected
                <br />
                to your business.
                </h2>

                <p>
                From foundation models and AI agents to automation,
                analytics, APIs, and cloud infrastructure — our stack
                is designed to connect intelligent capabilities with
                real business systems.
                </p>

            </div>

            <div className="ai-network">

                <div className="network-line line-a"></div>
                <div className="network-line line-b"></div>
                <div className="network-line line-c"></div>
                <div className="network-line line-d"></div>

                <div className="network-node node-center">
                AI
                </div>

                <div className="network-node node-one">
                LLM
                </div>

                <div className="network-node node-two">
                DATA
                </div>

                <div className="network-node node-three">
                API
                </div>

                <div className="network-node node-four">
                AUTO
                </div>

                <div className="network-node node-five">
                CLOUD
                </div>

            </div>
            </div> */}

        {/* CLOSING */}
        <div className="closing-section">

          <span>
            TECHNOLOGY IS THE FOUNDATION
          </span>

          <h2>
            We don't just use technology.
            <br />
            We connect it.
          </h2>

          <p>
            Every framework, platform, model, and infrastructure
            layer has a purpose — together they create scalable
            digital experiences.
          </p>

        </div>

      </div>

      {/* INSPECTION PANEL */}
      <TechnologyInspection
        technology={selectedTech}
        onClose={() => setSelectedTech(null)}
      />

    </section>
  );
}