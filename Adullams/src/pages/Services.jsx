import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import './About.css';

const services = [
  {
    id: 'advisory',
    num: '01',
    title: 'Strategic Advisory',
    tagline: 'Board-level counsel for transformational decisions',
    desc: 'We provide senior-level strategic advisory services to boards, CEOs, and leadership teams navigating significant transitions, from market repositioning to long-range strategic planning.',
    features: [
      'Corporate strategy & competitive positioning',
      'Board advisory & governance review',
      'Business model transformation',
      'Market entry & growth strategy',
      'Portfolio rationalisation',
    ],
    icon: '01',
  },
  {
    id: 'leadership',
    num: '02',
    title: 'Leadership Training & Strategy',
    tagline: 'End-to-end leadership and strategy excellence',
    desc: 'We partner with ambitious organisations to strengthen leadership capability and shape strategies that drive sustainable growth.',
    features: [
      'Executive & founder leadership development',
      'Corporate and growth strategy formulation',
      'Operational transformation & scalability design',
      'Market entry and expansion strategy',
      'Organisational alignment & performance optimisation',
    ],
    icon: '02',
  },
  {
    id: 'product',
    num: '03',
    title: 'Product Evaluation',
    tagline: 'Optimising product value and performance',
    desc: 'We help organisations assess, refine, and position products to maximise market impact and long-term value.',
    features: [
      'Product concept validation & feasibility analysis',
      'Market research & competitive benchmarking',
      'Pricing strategy & value optimisation',
      'Product performance analysis & lifecycle management',
      'Go-to-market strategy & product positioning',
    ],
    icon: '03',
  },
  {
    id: 'analysis',
    num: '04',
    title: 'Survey and Analysis',
    tagline: 'Maximising insight across every dimension',
    desc: 'We help organisations generate deep insights through rigorous analysis, structured inquiry, and clear reporting.',
    features: [
      'Survey design & data collection strategy',
      'Market research & stakeholder analysis',
      'Quantitative & qualitative data analysis',
      'Performance evaluation & benchmarking',
      'Insight generation & strategic reporting',
    ],
    icon: '04',
  },
  {
    id: 'health',
    num: '05',
    title: 'Health Education & Capacity Development',
    tagline: 'Building stronger systems and future-ready teams',
    desc: 'We empower organisations to build capability through education, skills development, and knowledge transfer.',
    features: [
      'Curriculum design & health education strategy',
      'Workforce training & capacity building programmes',
      'Public health awareness & community engagement',
      'Monitoring, evaluation & impact assessment',
    ],
    icon: '05',
  },
];

const serviceStats = [
  'Strategy',
  'Leadership',
  'Research',
  'Evaluation',
  'Capacity',
];

export default function Services() {
  const [active, setActive] = useState(services[0].id);
  const activeService = services.find((s) => s.id === active);

  return (
    <div className="services">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="section-label" style={{ color: 'var(--gold)' }}>What We Do</p>
          <h1 className="page-hero__title">Our Services</h1>
          <p className="page-hero__sub">
            Five integrated practice areas led by specialists with practical
            advisory, development, research, and implementation experience.
          </p>
        </div>
      </section>

      <section className="services-panel section-pad">
        <div className="container services-panel__inner">
          <nav className="services-nav">
            {services.map((s) => (
              <button
                key={s.id}
                className={`services-nav__item ${active === s.id ? 'services-nav__item--active' : ''}`}
                onClick={() => setActive(s.id)}
              >
                <span className="services-nav__num">{s.num}</span>
                <span className="services-nav__label">{s.title}</span>
              </button>
            ))}
          </nav>

          <div className="services-detail" key={active}>
            <div className="services-detail__top">
              <span className="services-detail__icon">{activeService.icon}</span>
              <div>
                <p className="section-label">{activeService.tagline}</p>
                <h2 className="section-title">{activeService.title}</h2>
              </div>
            </div>
            <div className="divider" />
            <p className="services-detail__desc">{activeService.desc}</p>
            <ul className="services-detail__features">
              {activeService.features.map((f) => (
                <li key={f}>
                  <span className="services-detail__check">-</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-gold" style={{ marginTop: '2rem' }}>
              Enquire About This Service
            </Link>
          </div>
        </div>
        <div className="container services-snapshot" aria-label="Service focus areas">
          {serviceStats.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="services-approach section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">How We Work</p>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Our Approach</h2>
          <div className="divider centered" />
          <div className="approach-grid">
            {[
              { num: '1', title: 'Discovery', desc: 'We invest deeply in understanding your organisation, context, and specific challenge.' },
              { num: '2', title: 'Analysis', desc: 'We combine structured research, sector knowledge, and clear evidence to form practical recommendations.' },
              { num: '3', title: 'Counsel', desc: 'We deliver direct, actionable guidance that helps leaders move with clarity and confidence.' },
              { num: '4', title: 'Implementation', desc: 'We remain available through execution, monitoring progress and adapting recommendations as circumstances evolve.' },
            ].map((step) => (
              <div key={step.num} className="approach-card">
                <span className="approach-card__num">{step.num}</span>
                <h3 className="approach-card__title">{step.title}</h3>
                <p className="approach-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label" style={{ color: 'var(--gold)' }}>Next Step</p>
          <h2 className="section-title light" style={{ marginBottom: '2rem' }}>
            Discuss your requirements<br />with our team
          </h2>
          <Link to="/contact" className="btn btn-gold">Arrange a Briefing</Link>
        </div>
      </section>
    </div>
  );
}
