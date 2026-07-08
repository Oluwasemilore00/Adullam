import React, { useState } from 'react';
import './Contact.css';
import './About.css';

const API_BASE_URL = (process.env.REACT_APP_API_URL || '').replace(/\/$/, '');

const socialLinks = [
  {
    name: 'Twitter / X',
    handle: '@adullam_consult',
    url: 'https://x.com/adullam_consult',
    desc: 'Real-time commentary on markets, strategy, and global business.',
    icon: 'X',
  },
  {
    name: 'Facebook',
    handle: '@adullamconsult',
    url: 'https://www.facebook.com/adullamconsult',
    desc: 'Corporate updates, events, and community engagement.',
    icon: 'f',
  },
  {
    name: 'Instagram',
    handle: '@adullam_consulting',
    url: 'https://www.instagram.com/adullam_consulting',
    desc: 'Behind-the-scenes culture, events, and firm milestones.',
    icon: 'ig',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/send-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully!');
        setSent(true);
        setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong. Please try again or email support@adullamltd.org.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
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

      <section className="contact-main section-pad">
        <div className="container contact-main__inner">
          <div className="contact-form-wrap">
            <p className="section-label">Send An Enquiry</p>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>How can we help?</h2>
            <div className="divider" />

            {sent ? (
              <div className="contact-success">
                <span className="contact-success__icon">OK</span>
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
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+44 (0)77 2158 0882" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Service of Interest</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Please select...</option>
                    <option>Organisational Development and Transformation</option>
                    <option>Learning, Leadership and Workforce Development</option>
                    <option>Performance Management and Business Excellence</option>
                    <option>Public Health and Development Consulting</option>
                    <option>Research, Monitoring, Evaluation and Learning</option>
                    <option>Strategy, Programme Design and Resource Mobilisation</option>
                    <option>Employability and Workforce Readiness Solutions</option>
                    <option>Digital Learning and Knowledge Solutions</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Please briefly describe your enquiry or the challenge you are seeking to address..." />
                </div>
                <button type="submit" className="btn btn-gold contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit Enquiry ->'}
                </button>
                {status && <p className="form-status">{status}</p>}
              </form>
            )}
          </div>

          <aside className="contact-info">
            <div className="contact-info__intro">
              <span>Direct Access</span>
              <h3>Start a conversation with the advisory team.</h3>
            </div>
            <div className="contact-info__block">
              <p className="contact-info__label">Global Enquiries</p>
              <a href="tel:+447721580882" className="contact-info__value contact-info__value--link">+44 (0)77 2158 0882</a>
              <a href="mailto:support@adullamltd.org" className="contact-info__value contact-info__value--link">support@adullamltd.org</a>
            </div>
            <div className="contact-info__block">
              <p className="contact-info__label">Response Time</p>
              <p className="contact-info__value">We aim to respond to all enquiries within one business day.</p>
            </div>
            <div className="contact-info__quick">
              <span>Transformation</span>
              <span>Research</span>
              <span>Learning</span>
              <span>Health Systems</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="social-section section-pad" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ color: 'var(--gold)' }}>Follow Us</p>
            <h2 className="section-title light">Connect on Social Media</h2>
            <div className="divider centered" />
            <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '500px', margin: '0 auto', fontSize: '0.9rem', lineHeight: '1.8' }}>
              Stay connected with Adullam Consulting for thought leadership, market insights, firm news, and events across all major platforms.
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
                <span className="social-card__arrow">-&gt;</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
