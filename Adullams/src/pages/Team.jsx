import React, { useState } from 'react';
import './Team.css';
import './About.css';
import ab from '../assets/dad3.jpeg';
import uncle from '../assets/uncle.jpg';

const team = [
  {
    name: 'Dr Babatunde Adelekan',
    role: 'Founder & CEO',
    summary: 'Public health, development strategy, research, and programme leadership.',
    bio: 'Dr Babatunde Adelekan is a public health physician, researcher, consultant, and development practitioner with more than two decades of experience supporting governments, NGOs, donors, faith-based organisations, universities, and development partners. His work focuses on health systems strengthening, programme design, monitoring and evaluation, research, gender equality, safeguarding, HIV prevention and response, sexual and reproductive health and rights, adolescent and youth development, and policy advisory. He brings a practical, evidence-led approach to helping institutions design, implement, evaluate, and strengthen high-impact programmes.',
    expertise: ['Public Health and Development', 'Research and Evaluation', 'Programme Design', 'Strategic and Programme Advisory'],
    profileUrl: 'https://www.linkedin.com/in/babatunde-adelekan/',
    initials: 'AB',
    image: ab,
  },
  {
    name: 'Dr Adeyemi Adelekan',
    role: 'Chief Operating Officer',
    summary: 'Organisational transformation, learning, workforce capability, and operational excellence.',
    bio: 'Dr Adeyemi Adelekan is an organisational development, learning, and transformation leader with experience strengthening people, systems, workflows, and performance across corporate and development-sector environments. His work spans organisational diagnostics, restructuring, process improvement, leadership development, workforce capability assessment, competency frameworks, talent development, employability programmes, digital learning, and performance improvement. He has supported large-scale workforce and learning initiatives across Africa, Europe, Asia, and North America, bringing strong operational discipline to Adullam Consulting Limited as Chief Operating Officer.',
    expertise: ['Organisational Development', 'Leadership Development', 'Workforce Capability', 'Operational Excellence'],
    profileUrl: 'https://www.linkedin.com/in/adeyemi-adelekan-89595741/',
    initials: 'AA',
    image: uncle,
  },
];

export default function Team() {
  const [selected, setSelected] = useState(null);
  const open = team.find((m) => m.name === selected);

  return (
    <div className="team">
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="section-label" style={{ color: 'var(--gold)' }}>Our People</p>
          <h1 className="page-hero__title">The Core Team</h1>
          <p className="page-hero__sub">
            A senior leadership group united by intellectual rigour, sector
            depth, and a shared commitment to client excellence.
          </p>
        </div>
      </section>

      <section className="team-section section-pad">
        <div className="container">
          <div className="team-grid">
            {team.map((member) => (
              <div
                key={member.name}
                className="team-card"
                onClick={() => setSelected(member.name)}
              >
                <div className="team-card__avatar">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-card__body">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p className="team-card__summary">{member.summary}</p>
                  <div className="team-card__tags">
                    {member.expertise.map((e) => (
                      <span key={e} className="team-card__tag">{e}</span>
                    ))}
                  </div>
                  <button type="button" className="team-card__btn">View Profile -&gt;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && open && (
        <div className="team-modal" onClick={() => setSelected(null)}>
          <div className="team-modal__box" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="team-modal__close" onClick={() => setSelected(null)} aria-label="Close profile">x</button>
            <div className="team-modal__header">
              <div className="team-modal__avatar"><img src={open.image} alt={open.name} /></div>
              <div>
                <h2 className="team-modal__name">{open.name}</h2>
                <p className="team-modal__role">{open.role}</p>
                <p className="team-modal__summary">{open.summary}</p>
              </div>
            </div>
            <p className="team-modal__bio">{open.bio}</p>
            <div className="team-modal__tags">
              {open.expertise.map((e) => <span key={e} className="team-card__tag">{e}</span>)}
            </div>
            <a href={open.profileUrl} className="team-card__btn" target="_blank" rel="noopener noreferrer">View LinkedIn Profile -&gt;</a>
          </div>
        </div>
      )}
    </div>
  );
}
