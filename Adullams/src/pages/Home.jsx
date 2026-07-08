import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const services = [
  {
    num: '01',
    title: 'Organisational Development and Transformation',
    desc: 'Stronger structures, governance systems, workflows, operations, teams, and culture.',
    icon: '01',
  },
  {
    num: '02',
    title: 'Learning, Leadership and Workforce Development',
    desc: 'Practical learning solutions that strengthen individual, team, and organisational performance.',
    icon: '02',
  },
  {
    num: '03',
    title: 'Public Health and Development Consulting',
    desc: 'Technical support for high-impact health, social development, and institutional programmes.',
    icon: '03',
  },
  {
    num: '04',
    title: 'Research, Monitoring, Evaluation and Learning',
    desc: 'Evidence, insight, and measurement systems that improve decisions, accountability, and results.',
    icon: '04',
  },
];

const proofPoints = [
  { value: '20+', label: 'Years of applied experience' },
  { value: '8', label: 'Integrated service areas' },
  { value: '2', label: 'Continents of operation' },
];

const advantages = [
  {
    num: '01',
    title: 'Independent counsel',
    desc: 'Objective advice shaped around the client mandate, not legacy interests or one-size-fits-all frameworks.',
  },
  {
    num: '02',
    title: 'Evidence-led decisions',
    desc: 'Research, field insight, and structured analysis are used to turn complex questions into clear choices.',
  },
  {
    num: '03',
    title: 'Leadership capability',
    desc: 'Strategy is paired with training and organisational development so teams can sustain momentum after the engagement.',
  },
  {
    num: '04',
    title: 'Implementation focus',
    desc: 'Recommendations are built to be acted on, monitored, and adapted as conditions change.',
  },
];

const impactSteps = [
  'Clarify the mandate',
  'Build the evidence',
  'Shape the strategy',
  'Support execution',
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
      <section className="hero" ref={heroRef}>
        <div className="hero__bg">
          <div className="hero__gradient" />
          <div className="hero__grid-overlay" />
        </div>
        <div className="container hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            <span>Organisational Transformation - Development Consulting</span>
          </div>
          <h1 className="hero__title">
            Clarity in<br />
            <em>Complexity.</em>
          </h1>
          <p className="hero__subtitle">
            We help governments, NGOs, faith-based organizations, donors,
            universities, and development partners design, implement, evaluate,
            and strengthen high-impact programmes.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn btn-gold">Explore Our Services</Link>
            <Link to="/contact" className="btn btn-outline">Speak to an Adviser</Link>
          </div>
          <div className="hero__proof" aria-label="Adullam Consulting highlights">
            {proofPoints.map((item) => (
              <div className="hero__proof-item" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span></span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      <section className="intro section-pad reveal">
        <div className="container intro__inner">
          <div className="intro__text">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">Building trusted<br />partnerships for the future</h2>
            <div className="divider" />
            <p className="intro__body">
              Adullam Consulting Limited is a strategy, people, performance,
              public health, and development consulting firm supporting
              organisations to grow, improve systems, build workforce capacity,
              and deliver measurable results.
            </p>
            <p className="intro__body" style={{ marginTop: '1rem' }}>
              We work with businesses, NGOs, faith-based organisations, public
              institutions, health organisations, development partners, and
              social impact organisations across Africa, Europe, and
              international markets.
            </p>
            <p className="intro__body" style={{ marginTop: '1rem' }}>
              Our strength is simple: we help organisations become clearer,
              stronger, more efficient, and more impactful.
            </p>
            <Link to="/about" className="btn btn-navy" style={{ marginTop: '2rem' }}>
              Our Story -&gt;
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
            <div className="intro__note">
              <span>Independent counsel</span>
              <strong>Built for consequential decisions</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="why-adullam section-pad">
        <div className="container">
          <div className="why-adullam__header reveal">
            <p className="section-label">Why Adullam</p>
            <h2 className="section-title">Practical insight for<br />high-stakes decisions</h2>
            <div className="divider" />
          </div>
          <div className="why-adullam__grid">
            {advantages.map((item, index) => (
              <article className={`why-card reveal reveal-delay-${Math.min(index, 3)}`} key={item.title}>
                <span className="why-card__num">{item.num}</span>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-services section-pad reveal" style={{ background: 'var(--cream)' }}>
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
                  Learn More <span>-&gt;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-path section-pad">
        <div className="container impact-path__inner">
          <div className="impact-path__copy reveal">
            <p className="section-label">How Value Is Created</p>
            <h2 className="section-title light">From uncertainty<br />to confident action</h2>
            <p>
              Every engagement is shaped around a clear path from diagnosis to
              decision. The result is advice that leaders can understand,
              defend, and implement.
            </p>
          </div>
          <div className="impact-path__steps">
            {impactSteps.map((step, index) => (
              <div className={`impact-step reveal reveal-delay-${Math.min(index, 3)}`} key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta reveal">
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
