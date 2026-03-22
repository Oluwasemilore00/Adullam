import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



const services = [
  {
    num: '01',
    title: 'Strategic Advisory',
    desc: 'Bespoke counsel for boards and C-suites navigating complex, high-stakes decisions in volatile global markets.',
    icon: '◈',
  },
  {
    num: '02',
    title: 'Leadership Training & Strategy',
    desc: 'End-to-end leadership and strategic support from vision setting and capability development through to execution and sustained performance.',
    icon: '◉',
  },
  {
    num: '03',
    title: 'Product Evaluation',
    desc: 'Access to deep market intelligence and analytical insight to evaluate product viability, optimise performance, and maximise commercial success.',
    icon: '◇',
  },
  {
    num: '04',
    title: 'Health Education & Capacity Development',
    desc: 'Proprietary methodologies to diagnose capability needs, build resilient health systems, and elevate workforce performance across regions and sectors.',
    icon: '◈',
  },
];


export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.classList.add('hero--visible');
  }, []);

  return (
    <div className="home">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero" ref={heroRef}>
        <div className="hero__bg">
          <div className="hero__gradient" />
          <div className="hero__grid-overlay" />
        </div>
        <div className="container hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            <span>Strategic Advisory · Global Consulting</span>
          </div>
          <h1 className="hero__title">
            Clarity in<br />
            <em>Complexity.</em>
          </h1>
          <p className="hero__subtitle">
            Adullam Consulting Limited  partners with the world's most ambitious
            organisations to navigate transformative challenges and unlock
            enduring value.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn btn-gold">Explore Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Speak to an Adviser</Link>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span></span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      

      {/* ── About Strip ──────────────────────────────────── */}
      <section className="intro section-pad">
        <div className="container intro__inner">
          <div className="intro__text">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">Building trusted<br />partnerships for the future</h2>
            <div className="divider" />
            <p className="intro__body">
             Founded to redefine the standard of strategic advisory, Adullam Consulting LTD is an independent firm serving corporations, institutions, and public sector organisations. We bring together rigorous analysis, global perspective, and disciplined execution to address our clients’ most consequential challenges.
            <p className="intro__body" style={{ marginTop: '1rem' }}>
              Our independence is fundamental to our approach. Free from conflicts and unconstrained by legacy interests, we provide objective, unvarnished counsel, aligned solely with the long-term success of those we advise.
            </p>
            </p>
            <p className="intro__body" style={{ marginTop: '1rem' }}>
              Our independence is our greatest strength free from conflicts of
              interest, we provide objective counsel aligned entirely to the goals
              of our clients.
            </p>
            <Link to="/about" className="btn btn-navy" style={{ marginTop: '2rem' }}>
              Our Story →
            </Link>
          </div>
          <div className="intro__visual">
            <div className="intro__card intro__card--back" />
            <div className="intro__card intro__card--front">
              <blockquote className="intro__quote">
                <p>"The measure of our success is the enduring value we create for clients."</p>
                <footer>
                  <strong>Dr Babatunde Adelekan</strong>
                  <span>Founder & CEO</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="home-services section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="home-services__header">
            <div>
              <p className="section-label">What We Do</p>
              <h2 className="section-title">Core Capabilities</h2>
              <div className="divider" />
            </div>
            <Link to="/services" className="btn btn-navy">View All Services</Link>
          </div>
          <div className="home-services__grid">
            {services.map((s) => (
              <div key={s.num} className="service-card">
                <div className="service-card__top">
                  <span className="service-card__num">{s.num}</span>
                  <span className="service-card__icon">{s.icon}</span>
                </div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <Link to="/services" className="service-card__link">
                  Learn More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="home-cta">
        <div className="container home-cta__inner">
          <div>
            <p className="section-label" style={{ color: 'var(--gold-light)' }}>Get Started</p>
            <h2 className="section-title light">Ready to accelerate<br />your ambitions?</h2>
          </div>
          <div className="home-cta__actions">
            <Link to="/contact" className="btn btn-gold">Arrange a Consultation</Link>
            <Link to="/team" className="btn btn-outline">Meet the Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
