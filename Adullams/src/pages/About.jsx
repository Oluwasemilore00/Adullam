import React from 'react';
import './About.css';

const values = [
  {
    title: 'Independence',
    desc: 'We maintain independence from conflicting interests, ensuring our advice is objective and client-centred.',
    icon: '01',
  },
  {
    title: 'Integrity',
    desc: 'Our reputation is built on ethical conduct, careful judgement, and transparent counsel.',
    icon: '02',
  },
  {
    title: 'Excellence',
    desc: 'We hold ourselves to high intellectual and professional standards in every engagement we undertake.',
    icon: '03',
  },
  {
    title: 'Partnership',
    desc: 'We regard our clients as long-term partners and invest in relationships that extend beyond individual projects.',
    icon: '04',
  },
];

export default function About() {
  return (
    <div className="about">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="section-label" style={{ color: 'var(--gold)' }}>About Us</p>
          <h1 className="page-hero__title">Fresh Thinking<br /><em>Real Impact</em></h1>
          <p className="page-hero__sub">
            We bring together senior expertise in organisational development,
            workforce capability, leadership development, performance
            management, public health, international development, research,
            monitoring, and evaluation.
          </p>
        </div>
      </section>

      <section className="about-mission section-pad">
        <div className="container about-mission__inner">
          <div className="about-mission__text">
            <p className="section-label">Our Mission</p>
            <h2 className="section-title">Delivering clarity<br />when it matters most</h2>
            <div className="divider" />
            <p className="about-body">
              Adullam Consulting Limited supports organisations that want to
              improve how they work, strengthen their people, design better
              programmes, measure results, and achieve sustainable growth.
            </p>
            <p className="about-body" style={{ marginTop: '1rem' }}>
              We help governments, NGOs, faith-based organizations, donors,
              universities, and development partners design, implement,
              evaluate, and strengthen high-impact programmes.
            </p>
          </div>
          <div className="about-mission__stat-block">
            <div className="about-stat">
              <span className="about-stat__num">20+</span>
              <span className="about-stat__label">Years of Experience</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__num">2</span>
              <span className="about-stat__label">Continents of Operation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values section-pad" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <p className="section-label">What We Stand For</p>
            <h2 className="section-title light">Our Core Values</h2>
            <div className="divider centered" />
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <span className="value-card__icon">{v.icon}</span>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
