"use client";

import { useState } from "react";
import "./ContactInquiry.css";

const services = [
  "Website Development",
  "Web Application Development",
  "Applied AI Solutions",
  "AI Agents & Chatbots",
  "Workflow Automation",
  "ERP & Business Systems",
  "UI/UX & Product Design",
  "Digital Transformation",
  "Other / Custom Requirement",
];

export default function ContactInquiry() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      EMAIL SUBJECT
    */
    const subject = encodeURIComponent(
      `Project Inquiry — ${formData.service} | Replica Lab`
    );

    /*
      EMAIL BODY
    */
    const body = encodeURIComponent(
      `Hello Replica Lab Team,

I’m reaching out to explore a potential project with Replica Lab.
I’d like to discuss my requirements and understand how your
team could help turn the idea into a practical digital solution.


CONTACT DETAILS

Full Name: ${formData.fullName}
Company: ${formData.company || "Not provided"}
Email: ${formData.email}
Phone / WhatsApp: ${formData.phone || "Not provided"}


PROJECT INTEREST:

Service: ${formData.service}


MY REQUIREMENT:

${formData.message}


Looking forward to connecting with you.`
    );

    /*
      GMAIL COMPOSE URL
    */
    const gmailComposeUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=replicalabofficial@gmail.com` +
      `&su=${subject}` +
      `&body=${body}`;

    /*
      OPEN GMAIL IN A NEW TAB
    */
    window.open(
      gmailComposeUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="contact-inquiry"
      id="contact-inquiry"
    >
      <div className="contact-inquiry-container">

        {/* =========================================
            LEFT INFORMATION
        ========================================= */}

        <div className="contact-inquiry-intro">

          <span className="contact-inquiry-eyebrow">
            INITIATE DIALOGUE
          </span>

          <h2>
            Tell us what you&apos;re
            <span> building.</span>
          </h2>

          <p className="contact-inquiry-description">
            Fill out the inquiry form to discuss your system
            requirements, software development needs, or AI
            implementation goals directly with the engineering
            team at <strong>Replica Lab</strong>.
          </p>

          <div className="contact-info-block">
            <span>DIRECT INBOX PIPELINE</span>

            <p>
              Your inquiry is prepared for direct communication
              with <strong>replicalabofficial@gmail.com</strong>.
            </p>
          </div>

          <div className="contact-info-block">
            <span>APPLIED AI &amp; ENTERPRISE SYSTEMS</span>

            <p>
              Explore intelligent software, automation,
              AI systems, and modern digital solutions built
              around real operational requirements.
            </p>
          </div>

          <div className="contact-directory">

            <span className="contact-directory-title">
              REPLICA LAB OFFICIAL DIRECTORY
            </span>

            <div>
              <span>OFFICIAL GMAIL</span>

              <strong>
                replicalabofficial@gmail.com
              </strong>
            </div>

            <div>
              <span>PHONE / WHATSAPP</span>

              <strong>
                +92 321 2260509
              </strong>
            </div>

          </div>

        </div>

        {/* =========================================
            FORM PANEL
        ========================================= */}

        <div className="contact-form-panel">

          <div className="contact-form-heading">

            <div>
              <span>INQUIRY FORM</span>

              <h3>
                Direct Pipeline
              </h3>
            </div>

            <span className="contact-form-status">
              <i />
              OPEN
            </span>

          </div>

          <form
            onSubmit={handleSubmit}
            className="contact-form"
          >

            {/* NAME + COMPANY */}

            <div className="contact-form-row">

              <label>
                <span>Full Name *</span>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </label>

              <label>
                <span>Company Name</span>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Optional"
                />
              </label>

            </div>

            {/* EMAIL + PHONE */}

            <div className="contact-form-row">

              <label>
                <span>Email Address *</span>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@company.com"
                />
              </label>

              <label>
                <span>Phone Number / WhatsApp</span>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Optional"
                />
              </label>

            </div>

            {/* SERVICE */}

            <label>
              <span>
                Subject / Core Service *
              </span>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option
                  value=""
                  disabled
                >
                  Select from list
                </option>

                {services.map((service) => (
                  <option
                    key={service}
                    value={service}
                  >
                    {service}
                  </option>
                ))}
              </select>
            </label>

            {/* MESSAGE */}

            <label>
              <span>Message *</span>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us about your project, system, challenge, or idea..."
              />
            </label>

            {/* SUBMIT */}

            <button
              type="submit"
              className="contact-submit"
            >
              <span>
                Send Direct Inquiry to Replica Lab
              </span>

              <span className="contact-submit-arrow">
                ↗
              </span>
            </button>

            <p className="contact-form-note">
              Prepared for direct delivery to{" "}
              <strong>
                replicalabofficial@gmail.com
              </strong>
              {" "}• NDA &amp; Confidentiality Assured
            </p>

          </form>

        </div>

      </div>
    </section>
  );
}