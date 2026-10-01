"use client";

import { useState } from "react";
import "./AuditForm.css";

const industries = [
  "Technology / SaaS",
  "Retail / E-commerce",
  "Education",
  "Healthcare",
  "Finance",
  "Manufacturing",
  "Professional Services",
  "Real Estate",
  "Logistics",
  "Other",
];

const auditAreas = [
  "Existing Software",
  "Business Workflows",
  "AI Opportunities",
  "Workflow Automation",
  "Website / Web Platform",
  "ERP / Business Systems",
  "Data & Analytics",
  "Other",
];

const challenges = [
  "Manual repetitive work",
  "Disconnected systems",
  "Outdated software",
  "Scaling operations",
  "Limited automation",
  "AI adoption",
  "Poor digital experience",
  "Not sure — need guidance",
];

const outcomes = [
  "Reduce manual work",
  "Improve efficiency",
  "Introduce AI",
  "Modernize software",
  "Connect existing systems",
  "Improve customer experience",
  "Scale operations",
  "Explore possibilities",
];

const initialForm = {
  companyName: "",
  website: "",
  industry: "",
  auditAreas: [],
  primaryChallenge: "",
  currentSituation: "",
  outcomes: [],
  fullName: "",
  email: "",
  phone: "",
  preferredContact: "Email",
  additionalNotes: "",
};

export default function AuditForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const updateField = (name, value) => {
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const toggleArrayValue = (field, value) => {
    setFormData((current) => {
      const exists = current[field].includes(value);

      return {
        ...current,
        [field]: exists
          ? current[field].filter((item) => item !== value)
          : [...current[field], value],
      };
    });
  };

  const canContinueStepOne =
    formData.companyName.trim() &&
    formData.industry &&
    formData.auditAreas.length > 0;

  const canContinueStepTwo =
    formData.primaryChallenge &&
    formData.currentSituation.trim() &&
    formData.outcomes.length > 0;

  const canSubmit =
    formData.fullName.trim() && formData.email.trim();

  const nextStep = () => {
    if (step === 1 && !canContinueStepOne) return;
    if (step === 2 && !canContinueStepTwo) return;

    setStep((current) => Math.min(current + 1, 3));
  };

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 1));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/replicalabofficial@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "New Free Audit Request — Replica Lab",
            _replyto: formData.email,
            _template: "table",

            "Company Name": formData.companyName,
            Website: formData.website || "Not provided",
            Industry: formData.industry,

            "Audit Areas":
              formData.auditAreas.length > 0
                ? formData.auditAreas.join(", ")
                : "Not provided",

            "Primary Challenge": formData.primaryChallenge,

            "Current Situation": formData.currentSituation,

            Outcomes:
              formData.outcomes.length > 0
                ? formData.outcomes.join(", ")
                : "Not provided",

            "Full Name": formData.fullName,
            Email: formData.email,
            Phone: formData.phone || "Not provided",

            "Preferred Contact": formData.preferredContact,

            "Additional Notes":
              formData.additionalNotes || "Not provided",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message || "Submission failed"
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Audit submission error:", error);

      setSubmitError(
        "We couldn't send your request right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setFormData(initialForm);
    setSubmitError("");
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <section
        className="audit-form-section"
        id="audit-form"
      >
        <div className="audit-form-shell audit-success">
          <div className="audit-success-icon">
            ✓
          </div>

          <span className="audit-success-label">
            AUDIT REQUEST RECEIVED
          </span>

          <h2>
            Thank you,
            <span> {formData.fullName}.</span>
          </h2>

          <p>
            Your audit request has been submitted
            successfully. The Replica Lab team will
            review your information and follow up
            using your preferred contact method.
          </p>

          <button
            type="button"
            onClick={resetForm}
            className="audit-success-button"
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      className="audit-form-section"
      id="audit-form"
    >
      <div className="audit-form-container">

        {/* INTRO */}
        <div className="audit-form-intro">
          <span>FREE ASSESSMENT</span>

          <h2>
            Start Your
            <span> Free Audit.</span>
          </h2>

          <p>
            Give us a focused view of your business,
            current challenges, and transformation goals.
          </p>
        </div>

        {/* FORM SHELL */}
        <div className="audit-form-shell">

          {/* PROGRESS */}
          <div className="audit-progress">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className={`audit-progress-step ${
                  step === item ? "active" : ""
                } ${
                  step > item ? "completed" : ""
                }`}
              >
                <div className="audit-progress-heading">
                  <span>0{item}</span>

                  <strong>
                    {item === 1 && "Business"}
                    {item === 2 && "Assessment"}
                    {item === 3 && "Contact"}
                  </strong>
                </div>

                <div className="audit-progress-line">
                  <span />
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit}>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="audit-step">

                <div className="audit-step-heading">
                  <span>01 / YOUR BUSINESS</span>

                  <h3>
                    Tell us about
                    <span> your business.</span>
                  </h3>

                  <p>
                    Start with a few details about the
                    organization and the areas you would
                    like us to evaluate.
                  </p>
                </div>

                <div className="audit-input-grid">

                  <label className="audit-field">
                    <span>Company Name *</span>

                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(event) =>
                        updateField(
                          "companyName",
                          event.target.value
                        )
                      }
                      placeholder="Company name"
                      required
                    />
                  </label>

                  <label className="audit-field">
                    <span>Company Website</span>

                    <input
                      type="url"
                      value={formData.website}
                      onChange={(event) =>
                        updateField(
                          "website",
                          event.target.value
                        )
                      }
                      placeholder="https://..."
                    />
                  </label>

                </div>

                <label className="audit-field">
                  <span>
                    Business / Industry *
                  </span>

                  <select
                    value={formData.industry}
                    onChange={(event) =>
                      updateField(
                        "industry",
                        event.target.value
                      )
                    }
                    required
                  >
                    <option value="" disabled>
                      Select industry
                    </option>

                    {industries.map((industry) => (
                      <option
                        key={industry}
                        value={industry}
                      >
                        {industry}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="audit-choice-group">

                  <div className="audit-choice-heading">
                    <span>
                      What would you like us
                      to evaluate? *
                    </span>

                    <small>
                      Select all that apply
                    </small>
                  </div>

                  <div className="audit-choice-grid">
                    {auditAreas.map((area) => {
                      const selected =
                        formData.auditAreas.includes(area);

                      return (
                        <button
                          key={area}
                          type="button"
                          className={`audit-choice ${
                            selected ? "selected" : ""
                          }`}
                          onClick={() =>
                            toggleArrayValue(
                              "auditAreas",
                              area
                            )
                          }
                        >
                          <span>{area}</span>

                          <i>
                            {selected ? "✓" : "+"}
                          </i>
                        </button>
                      );
                    })}
                  </div>

                </div>

                <div className="audit-step-actions audit-step-actions-end">

                  <span className="audit-step-count">
                    01 / 03
                  </span>

                  <button
                    type="button"
                    className="audit-next"
                    onClick={nextStep}
                    disabled={!canContinueStepOne}
                  >
                    <span>Continue</span>
                    <i>→</i>
                  </button>

                </div>

              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="audit-step">

                <div className="audit-step-heading">
                  <span>
                    02 / CURRENT CHALLENGE
                  </span>

                  <h3>
                    Where are you experiencing
                    <span> friction?</span>
                  </h3>

                  <p>
                    Help us understand the operational
                    problem and the outcome you want to
                    achieve.
                  </p>
                </div>

                <div className="audit-choice-group">

                  <div className="audit-choice-heading">
                    <span>
                      What is your primary
                      challenge? *
                    </span>

                    <small>
                      Select one
                    </small>
                  </div>

                  <div className="audit-choice-grid">
                    {challenges.map((challenge) => {
                      const selected =
                        formData.primaryChallenge ===
                        challenge;

                      return (
                        <button
                          key={challenge}
                          type="button"
                          className={`audit-choice ${
                            selected ? "selected" : ""
                          }`}
                          onClick={() =>
                            updateField(
                              "primaryChallenge",
                              challenge
                            )
                          }
                        >
                          <span>
                            {challenge}
                          </span>

                          <i>
                            {selected ? "✓" : "○"}
                          </i>
                        </button>
                      );
                    })}
                  </div>

                </div>

                <label className="audit-field audit-textarea-field">

                  <span>
                    Tell us about your current
                    situation *
                  </span>

                  <textarea
                    rows="6"
                    value={formData.currentSituation}
                    onChange={(event) =>
                      updateField(
                        "currentSituation",
                        event.target.value
                      )
                    }
                    placeholder="Briefly describe the system, process, or challenge you'd like Replica Lab to review..."
                    required
                  />

                </label>

                <div className="audit-choice-group">

                  <div className="audit-choice-heading">
                    <span>
                      What outcome are you
                      looking for? *
                    </span>

                    <small>
                      Select all that apply
                    </small>
                  </div>

                  <div className="audit-choice-grid">
                    {outcomes.map((outcome) => {
                      const selected =
                        formData.outcomes.includes(
                          outcome
                        );

                      return (
                        <button
                          key={outcome}
                          type="button"
                          className={`audit-choice ${
                            selected ? "selected" : ""
                          }`}
                          onClick={() =>
                            toggleArrayValue(
                              "outcomes",
                              outcome
                            )
                          }
                        >
                          <span>{outcome}</span>

                          <i>
                            {selected ? "✓" : "+"}
                          </i>
                        </button>
                      );
                    })}
                  </div>

                </div>

                <div className="audit-step-actions">

                  <button
                    type="button"
                    className="audit-back"
                    onClick={previousStep}
                  >
                    ← Back
                  </button>

                  <button
                    type="button"
                    className="audit-next"
                    onClick={nextStep}
                    disabled={!canContinueStepTwo}
                  >
                    <span>Continue</span>
                    <i>→</i>
                  </button>

                </div>

              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="audit-step">

                <div className="audit-step-heading">
                  <span>03 / CONTACT</span>

                  <h3>
                    Where should we
                    <span> follow up?</span>
                  </h3>

                  <p>
                    Add your contact details so the
                    Replica Lab team can continue the
                    conversation about your assessment.
                  </p>
                </div>

                <div className="audit-input-grid">

                  <label className="audit-field">
                    <span>Full Name *</span>

                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(event) =>
                        updateField(
                          "fullName",
                          event.target.value
                        )
                      }
                      placeholder="Your full name"
                      required
                    />
                  </label>

                  <label className="audit-field">
                    <span>Work Email *</span>

                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) =>
                        updateField(
                          "email",
                          event.target.value
                        )
                      }
                      placeholder="you@company.com"
                      required
                    />
                  </label>

                </div>

                <label className="audit-field">

                  <span>
                    Phone / WhatsApp
                  </span>

                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(event) =>
                      updateField(
                        "phone",
                        event.target.value
                      )
                    }
                    placeholder="+92..."
                  />

                </label>

                <div className="audit-choice-group">

                  <div className="audit-choice-heading">
                    <span>
                      Preferred Contact Method
                    </span>
                  </div>

                  <div className="audit-contact-methods">

                    {[
                      "Email",
                      "WhatsApp",
                      "Phone",
                    ].map((method) => {
                      const selected =
                        formData.preferredContact ===
                        method;

                      return (
                        <button
                          key={method}
                          type="button"
                          className={`audit-contact-method ${
                            selected ? "selected" : ""
                          }`}
                          onClick={() =>
                            updateField(
                              "preferredContact",
                              method
                            )
                          }
                        >
                          <i />
                          {method}
                        </button>
                      );
                    })}

                  </div>

                </div>

                <label className="audit-field audit-textarea-field">

                  <span>
                    Anything else we should know?
                  </span>

                  <textarea
                    rows="4"
                    value={formData.additionalNotes}
                    onChange={(event) =>
                      updateField(
                        "additionalNotes",
                        event.target.value
                      )
                    }
                    placeholder="Optional additional context..."
                  />

                </label>

                <p className="audit-consent">
                  By submitting this request, you agree
                  to be contacted by Replica Lab
                  regarding your audit request.
                </p>

                {submitError && (
                  <p className="audit-submit-error">
                    {submitError}
                  </p>
                )}

                <div className="audit-step-actions">

                  <button
                    type="button"
                    className="audit-back"
                    onClick={previousStep}
                    disabled={isSubmitting}
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    className="audit-submit"
                    disabled={
                      !canSubmit || isSubmitting
                    }
                  >
                    <span>
                      {isSubmitting
                        ? "Sending..."
                        : "Request My Free Audit"}
                    </span>

                    <i>
                      {isSubmitting ? "..." : "↗"}
                    </i>
                  </button>

                </div>

                <div className="audit-form-trust">

                  <span>
                    No Obligation
                  </span>

                  <i />

                  <span>
                    Confidential Inquiry
                  </span>

                  <i />

                  <span>
                    Initial Assessment
                  </span>

                </div>

              </div>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}