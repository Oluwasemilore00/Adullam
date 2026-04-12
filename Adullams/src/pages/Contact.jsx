import React, { useState } from 'react';
import './Contact.css';
import './About.css';

const socialLinks = [
  
  {
    name: 'Twitter / X',
    handle: '@adullam_consult',
    url: 'https://x.com/adullam_consult',
    desc: 'Real-time commentary on markets, strategy, and global business.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: '@adullamconsult',
    url: 'https://www.facebook.com/adullamconsult',
    desc: 'Corporate updates, events, and community engagement.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@adullam_consulting',
    url: 'https://www.instagram.com/adullam_consulting',
    desc: 'Behind-the-scenes culture, events, and firm milestones.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

const offices = [
  {
    city: 'London',
    address: 'One Canada Square, Canary Wharf\nLondon, E14 5AB',
    phone: '+44 (0)20 7123 4567',
    email: 'london@nexusmeridian.com',
    tag: 'Headquarters',
  },
  {
    city: 'New York',
    address: '9 West 57th Street, 32nd Floor\nNew York, NY 10019',
    phone: '+1 (212) 555 0190',
    email: 'newyork@nexusmeridian.com',
    tag: 'Americas',
  },
  {
    city: 'Dubai',
    address: 'DIFC, Gate Village Building 7\nDubai, UAE',
    phone: '+971 4 555 0123',
    email: 'dubai@nexusmeridian.com',
    tag: 'Middle East',
  },
  {
    city: 'Singapore',
    address: '10 Marina Boulevard, #22-01\nSingapore 018983',
    phone: '+65 6555 0178',
    email: 'singapore@nexusmeridian.com',
    tag: 'Asia Pacific',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

      setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send-message", {
        method: "POST", // ✅ IMPORTANT
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), // ✅ send data to Flask
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setSent(true);
        setForm({ name: "", company: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus(data.message || "Failed to send message");
      }

    } catch (error) {
      console.error(error);
      setStatus("Something went wrong");
    }
  };




  return (
    <div className="contact">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="section-label" style={{ color: 'var(--gold)' }}>Reach Us</p>
          <h1 className="page-hero__title">Get In Touch</h1>
          <p className="page-hero__sub">
            Whether you have a specific mandate in mind or simply wish to explore
            how we might assist your organisation, we welcome your enquiry.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="contact-main section-pad">
        <div className="container contact-main__inner">
          {/* Form */}
          <div className="contact-form-wrap">
            <p className="section-label">Send An Enquiry</p>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>How can we help?</h2>
            <div className="divider" />

            {sent ? (
              <div className="contact-success">
                <span className="contact-success__icon">✓</span>
                <h3>Thank you for your enquiry</h3>
                <p>A member of our team will be in touch within one business day.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
                  </div>
                  <div className="form-group">
                    <label>Company / Organisation *</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder="Your organisation" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                  </div>
                  <div className="form-group">
                    <label>Telephone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+44 (0)20 …" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Service of Interest</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Please select…</option>
                    <option>Strategic Advisory</option>
                    <option>Mergers & Acquisitions</option>
                    <option>Capital Markets</option>
                    <option>Risk Management</option>
                    <option>Digital Transformation</option>
                    <option>Regulatory & Compliance</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Please briefly describe your enquiry or the challenge you are seeking to address…" />
                </div>
                <button type="submit" className="btn btn-gold contact-submit">
                  Submit Enquiry →
                </button>
                {status && <p className="form-status">{status}</p>}
              </form>
            )}
          </div>

          {/* Info Panel */}
          <aside className="contact-info">
            <div className="contact-info__block">
              <p className="contact-info__label">Global Enquiries</p>
              <a href="tel:+442071234567" className="contact-info__value contact-info__value--link">+44 (0)77 2158 0882</a>
              <a href="mailto:enquiries@nexusmeridian.com" className="contact-info__value contact-info__value--link">support@adullamltd.org</a>
            </div>
            <div className="contact-info__block">
              <p className="contact-info__label">Response Time</p>
              <p className="contact-info__value">We aim to respond to all enquiries within one business day.</p>
            </div>
           
          </aside>
        </div>
      </section>

     

      {/* Social Media */}
      <section className="social-section section-pad" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ color: 'var(--gold)' }}>Follow Us</p>
            <h2 className="section-title light">Connect on Social Media</h2>
            <div className="divider centered" />
            <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '500px', margin: '0 auto', fontSize: '0.9rem', lineHeight: '1.8' }}>
              Stay connected with Adullam Consulting  for thought leadership, market insights, firm news, and events across all major platforms.
            </p>
          </div>
          <div className="social-grid">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <div className="social-card__icon">{s.icon}</div>
                <div>
                  <h4 className="social-card__name">{s.name}</h4>
                  <p className="social-card__handle">{s.handle}</p>
                  <p className="social-card__desc">{s.desc}</p>
                </div>
                <span className="social-card__arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

}
