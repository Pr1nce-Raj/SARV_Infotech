import React, { useState } from 'react';
import { personalInfo, faqsList } from '../config/cardsConfig';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <main className="page-content contact-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <span className="section-badge">Get In Touch</span>
          <h1 className="page-title">Let's Connect</h1>
          <p className="page-subtitle">
            Whether you have an internship opportunity, project collaboration, or technical inquiry,
            I'd love to hear from you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-container">
          <div className="contact-info-panel">
            <h3>Direct Contact</h3>
            <p>
              I am based in India and actively considering software engineering roles.
            </p>

            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{personalInfo.email}</span>
              <button type="button" onClick={copyEmail} className="btn-copy">
                {copiedEmail ? 'Copied! ✓' : 'Copy'}
              </button>
            </div>

            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">{personalInfo.location}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Resume:</span>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-inline-link"
              >
                View PDF File 📄
              </a>
            </div>

            <div className="info-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-badge"
              >
                GitHub Profile &rarr;
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-badge"
              >
                LinkedIn Profile &rarr;
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Direct Message</h3>

            {submitted && (
              <div className="form-alert-success">
                Thank you! Your message has been sent successfully. I will get back to you shortly.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Aarav Sharma"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. aarav.sharma@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the role, project, or question..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Send Message &rarr;
            </button>
          </form>
        </div>

        {/* FAQs Section */}
        <section className="faqs-section">
          <div className="section-header">
            <span className="section-badge">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faqs-grid">
            {faqsList.map((faq, idx) => (
              <div key={idx} className="faq-card">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
