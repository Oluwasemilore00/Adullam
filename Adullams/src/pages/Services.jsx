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
    desc: 'We provide senior-level strategic advisory services to boards, CEOs, and leadership teams navigating significant transitions — whether a market repositioning, ownership change, response to competitive disruption, or long-range strategic planning.',
    features: [
      'Corporate strategy & competitive positioning',
      'Board advisory & governance review',
      'Business model transformation',
      'Market entry & growth strategy',
      'Portfolio rationalisation',
    ],
    icon: '◈',
  },
  {
    id: 'ma',
    num: '02',
    title: 'Leadership Training & Strategy',
    tagline: 'End-to-End Leadership & Strategy Excellence',
    desc: 'We partner with ambitious organisations to strengthen leadership capability and shape strategies that drive sustainable growth. Combining analytical rigour with practical execution, we support leaders in navigating complexity, unlocking performance, and positioning their businesses for long-term success.',
    features: [
      'Executive & founder leadership development',
      'Corporate and growth strategy formulation',
      'Operational transformation & scalability design',
      'Market entry and expansion strategy',
      'Organisational alignment & performance optimisation',
    ],
    icon: '◉',
  },
  {
    id: 'capital',
    num: '03',
    title: 'Product Evaluation',
    tagline: 'Optimising Product Value & Performance',
    desc: 'We support organisations in assessing, refining, and positioning their products to maximise market impact and long-term value. From concept validation through to performance optimisation, we combine analytical rigour with market insight to ensure products are commercially viable, competitive, and scalable.',
    features: [
      'Product concept validation & feasibility analysis',
      'Market research & competitive benchmarking',
      'Pricing strategy & value optimisation',
      'Product performance analysis & lifecycle management',
      'Go-to-market strategy & product positioning',
    ],
    icon: '◇',
  },
  {
    id: 'risk',
    num: '04',
    title: 'Survey and Analysis',
    tagline: 'Maximising Insight Across Every Dimension',
    desc: 'In an increasingly complex and data-driven environment, we help organisations generate deep insights through rigorous analysis and structured inquiry. Our approach enables clients to understand underlying trends, evaluate performance, and make informed decisions with clarity and confidence.',
    features: [
      'Survey design & data collection strategy',
      'Market research & stakeholder analysis',
      'Quantitative & qualitative data analysis',
      'Performance evaluation & benchmarking',
      'Insight generation & strategic reporting',
    ],
    icon: '⟡',
  },
  {
    id: 'digital',
    num: '05',
    title: 'Health Education & Capacity Development',
    tagline: 'Engineering the Future of Health Education & Capacity Development',
    desc: 'As healthcare systems evolve in an increasingly technology-driven world, we empower organisations to build future-ready capabilities through advanced education, skills development, and knowledge transfer. Our approach integrates innovation, data, and human capital to strengthen healthcare delivery, enhance workforce readiness, and drive sustainable impact at scale.',
    features: [
      'Curriculum design & health education strategy',
      'Workforce training & capacity building programmes',
      'Public health awareness & community engagement',
      'Monitoring, evaluation & impact assessment',
    ],
    icon: '◈',
  },
];

export default function Services() {
  const [active, setActive] = useState(services[0].id);
  const activeService = services.find(s => s.id === active);

  return (
    <div className="services">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="section-label" style={{ color: 'var(--gold)' }}>What We Do</p>
          <h1 className="page-hero__title">Our Services</h1>
          <p className="page-hero__sub">
            Six integrated practice areas, each led by specialists with decades of
            real-world advisory experience across the world's most complex markets.
          </p>
        </div>
      </section>

      {/* Interactive Services Panel */}
      <section className="services-panel section-pad">
        <div className="container services-panel__inner">
          {/* Tab List */}
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

          {/* Detail Panel */}
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
                  <span className="services-detail__check">—</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-gold" style={{ marginTop: '2rem' }}>
              Enquire About This Service
            </Link>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="services-approach section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-label">How We Work</p>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Our Approach</h2>
          <div className="divider centered" />
          <div className="approach-grid">
            {[
              { num: '1', title: 'Discovery', desc: 'We invest deeply in understanding your organisation, industry context, and the specific challenge at hand before forming any view.' },
              { num: '2', title: 'Analysis', desc: 'Our teams apply proprietary frameworks and draw on global databases, networks, and primary research to build a rigorous evidence base.' },
              { num: '3', title: 'Counsel', desc: 'We deliver clear, actionable recommendations — not hedged reports. You receive our best judgement, delivered with conviction.' },
              { num: '4', title: 'Implementation', desc: 'We remain with clients through execution, monitoring progress and adapting recommendations as circumstances evolve.' },
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

      {/* CTA */}
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
