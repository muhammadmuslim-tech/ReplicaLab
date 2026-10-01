import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* =========================================
          FOOTER MAIN
      ========================================= */}

      <div className="footer-container">

        {/* =========================================
            BRAND / COMPANY DETAIL
        ========================================= */}

        <div className="footer-brand">

          {/* <a href="/" className="footer-logo">
            <Image
              src="/images/replica_logo.png"
              alt="Replica Lab"
              width={48}
              height={48}
            />
          </a> */}

          <div className="footer-brand-content">
            <div className="footer-brand-name">
              REPLICA LAB
            </div>

            <div className="footer-brand-tagline">
              Building Intelligent Digital Ecosystems.
            </div>
          </div>

          <p className="footer-description">
            We engineer intelligent digital ecosystems that modernize
            enterprise operations, automate complexity, and create
            long-term technological value.
          </p>

          {/* <div className="footer-location">
            <span className="footer-location-dot"></span>
            <span>Digital Transformation Studio</span>
          </div> */}

        </div>


        {/* =========================================
            SERVICES
        ========================================= */}

        <div className="footer-column">

          <div className="footer-column-label">
            SERVICES
          </div>

          <nav className="footer-links">

            <a href="/services/applied-ai">
              Applied AI
            </a>

            <a href="/services/automation-workflow">
              Automation & Workflow
            </a>

            <a href="/services/software-engineering">
              Software Engineering
            </a>

            <a href="/services/strategy-design">
              Strategy & Design
            </a>

            

          </nav>

        </div>


        {/* =========================================
            TECHNOLOGIES
        ========================================= */}



        {/* =========================================
            OTHER NAVIGATION
        ========================================= */}

        <div className="footer-column">

          <div className="footer-column-label">
            NAVIGATION
          </div>

          <nav className="footer-links">

            {/* <a href="/">
              Home
            </a> */}

            {/* <a href="#case-studies">
              Case Studies
            </a> */}

            <a href="/about">
              About
            </a>

            <a href="/contact">
              Contact Us
            </a>

            <a href="/technologies">
              Technologies
            </a>

          </nav>

        </div>

            <div className="footer-column">
    
              <div className="footer-column-label">
                SOCIAL MEDIA
              </div>
    
              <nav className="footer-links">
    
                <a href="https://www.linkedin.com/company/replica-lab/posts/">
                  Linkedin
                </a>
    
                <a href="https://www.instagram.com/replica_lab_?stkn=YXB6Y3B4YTB5em02">
                  Instagram
                </a>
    
                
    
              </nav>
    
            </div>
      </div>


      {/* =========================================
          FOOTER BOTTOM
      ========================================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-inner">

          <span className="footer-copyright">
            © {new Date().getFullYear()} Replica Lab. All rights reserved.
          </span>

          {/* <div className="footer-bottom-links">

            <a href="#privacy">
              Privacy Policy
            </a>

            <span className="footer-bottom-separator"></span>

            <a href="#terms">
              Terms & Conditions
            </a>

          </div> */}

          {/* <span className="footer-status">
            <span className="footer-status-dot"></span>
            SYSTEMS ONLINE
          </span> */}

        </div>

      </div>

    </footer>
  );
}