"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesPopupOpen, setServicesPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const closeServicesPopup = () => {
    setServicesPopupOpen(false);
  };

  return (
    <header
      className={`navbar-wrapper ${
        isScrolled ? "navbar-wrapper-scrolled" : ""
      }`}
    >
      <nav className="navbar">

        {/* =====================================================
            LOGO
        ====================================================== */}

        <Link
          href="/"
          className="navbar-logo"
          aria-label="Replica Lab Home"
          onClick={() => {
            closeMobileMenu();
            closeServicesPopup();
          }}
        >
          <img
            src="/images/replica_logo.png"
            alt="Replica Lab"
          />
        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <div className="navbar-navigation">

          {/* HOME */}

          <Link
            href="/"
            className="navbar-link"
          >
            Home
          </Link>


          {/* =================================================
              SERVICES
          ================================================== */}

          <div
            className={`navbar-hover-item services-hover-item ${
              servicesPopupOpen
                ? "services-popup-open"
                : ""
            }`}
            onMouseEnter={() => {
              setServicesPopupOpen(true);
            }}
            onMouseLeave={() => {
              setServicesPopupOpen(false);
            }}
          >

            <Link
              href="/services"
              className="navbar-link"
              onClick={closeServicesPopup}
            >
              Services
            </Link>


            {/* =================================================
                SERVICES POPUP
            ================================================== */}

            <div className="navbar-popup services-popup">

              <div className="services-popup-columns">

                {/* =================================================
                    01 — APPLIED AI
                ================================================== */}

                <div className="services-popup-column">

                  <Link
                    href="/services/applied-ai"
                    className="services-popup-title"
                    onClick={closeServicesPopup}
                  >
                    <span className="services-popup-number">
                      01
                    </span>

                    <span>
                      Applied AI
                    </span>
                  </Link>


                  <div className="services-popup-links">

                    <Link
                      href="/services/applied-ai/ai-solutions"
                      onClick={closeServicesPopup}
                    >
                      AI Solutions
                    </Link>

                    <Link
                      href="/services/applied-ai/ai-chatbots"
                      onClick={closeServicesPopup}
                    >
                      AI Chatbots
                    </Link>

                    <Link
                      href="/services/applied-ai/ai-agents"
                      onClick={closeServicesPopup}
                    >
                      AI Agents
                    </Link>

                  </div>

                </div>


                {/* =================================================
                    02 — AUTOMATION & WORKFLOW
                ================================================== */}

                <div className="services-popup-column">

                  <Link
                    href="/services/automation-workflow"
                    className="services-popup-title"
                    onClick={closeServicesPopup}
                  >
                    <span className="services-popup-number">
                      02
                    </span>

                    <span>
                      Automation &amp; Workflow
                    </span>
                  </Link>


                  <div className="services-popup-links">

                    <Link
                      href="/services/automation-workflow/workflow-automation"
                      onClick={closeServicesPopup}
                    >
                      Workflow Automation
                    </Link>

                    <Link
                      href="/services/automation-workflow/business-process-automation"
                      onClick={closeServicesPopup}
                    >
                      Business Process Automation
                    </Link>

                  </div>

                </div>


                {/* =================================================
                    03 — SOFTWARE ENGINEERING
                ================================================== */}

                <div className="services-popup-column">

                  <Link
                    href="/services/software-engineering"
                    className="services-popup-title"
                    onClick={closeServicesPopup}
                  >
                    <span className="services-popup-number">
                      03
                    </span>

                    <span>
                      Software Engineering
                    </span>
                  </Link>


                  <div className="services-popup-links">

                    <Link
                      href="/services/software-engineering/website-development"
                      onClick={closeServicesPopup}
                    >
                      Website Development
                    </Link>

                    <Link
                      href="/services/software-engineering/web-application-development"
                      onClick={closeServicesPopup}
                    >
                      Web Application Development
                    </Link>

                    <Link
                      href="/services/software-engineering/erp-business-management"
                      onClick={closeServicesPopup}
                    >
                      ERP &amp; Business Management Systems
                    </Link>

                    <Link
                      href="/services/software-engineering/internal-business-systems"
                      onClick={closeServicesPopup}
                    >
                      Internal Business Systems
                    </Link>

                    <Link
                      href="/services/software-engineering/system-integration"
                      onClick={closeServicesPopup}
                    >
                      System Integration
                    </Link>

                    <Link
                      href="/services/software-engineering/software-maintenance"
                      onClick={closeServicesPopup}
                    >
                      Software Maintenance
                    </Link>

                  </div>

                </div>


                {/* =================================================
                    04 — STRATEGY & DESIGN
                ================================================== */}

                <div className="services-popup-column">

                  <Link
                    href="/services/strategy-design"
                    className="services-popup-title"
                    onClick={closeServicesPopup}
                  >
                    <span className="services-popup-number">
                      04
                    </span>

                    <span>
                      Strategy &amp; Design
                    </span>
                  </Link>


                  <div className="services-popup-links">

                    <Link
                      href="/services/strategy-design/business-process-analysis"
                      onClick={closeServicesPopup}
                    >
                      Business Process Analysis
                    </Link>

                    <Link
                      href="/services/strategy-design/data-analytics-dashboards"
                      onClick={closeServicesPopup}
                    >
                      Data &amp; Analytics Dashboards
                    </Link>

                    <Link
                      href="/services/strategy-design/ui-ux-design"
                      onClick={closeServicesPopup}
                    >
                      UI/UX Design
                    </Link>

                    <Link
                      href="/services/strategy-design/product-design"
                      onClick={closeServicesPopup}
                    >
                      Product Design
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              TECHNOLOGIES
              NO HOVER POPUP
          ================================================== */}

          <Link
            href="/technologies"
            className="navbar-link"
          >
            Technologies
          </Link>


          {/* =================================================
              ABOUT
          ================================================== */}

          <Link
            href="/about"
            className="navbar-link"
          >
            About
          </Link>


          {/* =================================================
              CONTACT
          ================================================== */}

          <Link
            href="/contact"
            className="navbar-link"
          >
            Contact Us
          </Link>

        </div>


        {/* =====================================================
            DESKTOP CTA
        ====================================================== */}

        {/* <Link
          href="/book-free-audit"
          className="navbar-cta"
        >
          Book Free Audit
        </Link> */}


        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          className={`mobile-menu-button ${
            mobileMenuOpen
              ? "mobile-menu-button-active"
              : ""
          }`}
          onClick={() =>
            setMobileMenuOpen(
              (previous) => !previous
            )
          }
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}

        <div
          className={`mobile-navigation ${
            mobileMenuOpen
              ? "mobile-navigation-open"
              : ""
          }`}
        >

          <Link
            href="/"
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          <Link
            href="/services"
            onClick={closeMobileMenu}
          >
            Services
          </Link>

          <Link
            href="/technologies"
            onClick={closeMobileMenu}
          >
            Technologies
          </Link>



          <Link
            href="/about"
            onClick={closeMobileMenu}
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>

          {/* <Link
            href="/book-free-audit"
            className="mobile-navigation-cta"
            onClick={closeMobileMenu}
          >
            Book Free Audit
          </Link> */}

        </div>

      </nav>
    </header>
  );
}