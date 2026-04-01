import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Team.css';
import './About.css';
import ab from '../assets/AB.jpg'

const team = [
  {
    name: 'Dr Babatunde Adelekan',
    role: 'Founder & CEO',
    bio: 'Sir Jonathan founded Nexus Meridian Group in 1989 following a distinguished career at Lazard and Goldman Sachs. He has advised on more than 120 major transactions and served as a Non-Executive Director of the Bank of England\'s Financial Policy Committee. He was awarded a knighthood for services to British industry in 2012.',
    expertise: ['Strategic Advisory', 'Corporate Governance', 'M&A'],
    linkedin: 'https://www.linkedin.com/in/',
    initials: 'AB',
    image: ab,
  },
  {
    name: 'Marcus Heidegger-Wolf',
    role: 'Managing Director, M&A',
    bio: 'Marcus leads our Mergers & Acquisitions practice globally. With 28 years of deal experience across Europe, the Americas, and Asia, he has advised on landmark transactions in financial services, industrials, and technology sectors. He is based in Frankfurt.',
    expertise: ['M&A', 'Cross-Border Transactions', 'Due Diligence'],
    linkedin: 'https://www.linkedin.com/in/',
    initials: 'MH',
  },
  {
    name: 'Claire Sutherland-Park',
    role: 'Managing Director, Strategic Advisory',
    bio: 'Claire joined NMG from McKinsey & Company, where she was a Senior Partner. She leads our Strategic Advisory practice in Europe and the Middle East, specialising in corporate transformations, portfolio strategy, and the intersection of regulation and competitive strategy.',
    expertise: ['Corporate Strategy', 'Transformation', 'Regulatory Strategy'],
    linkedin: 'https://www.linkedin.com/in/',
    initials: 'CS',
  },
];

export default function Team() {
  const [selected, setSelected] = useState(null);

  const open = team.find(m => m.name === selected);

  return (
    <div className="team">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <p className="section-label" style={{ color: 'var(--gold)' }}>Our People</p>
          <h1 className="page-hero__title">The Core Team</h1>
          <p className="page-hero__sub">
            A senior leadership group of global advisers united by intellectual rigour,
            sector depth, and a shared commitment to client excellence.
          </p>
        </div>
      </section>

      {/* Team Grid */}
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
                  <div className="team-card__tags">
                    {member.expertise.map(e => (
                      <span key={e} className="team-card__tag">{e}</span>
                    ))}
                  </div>
                  <button className="team-card__btn">View Profile →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && open && (
        <div className="team-modal" onClick={() => setSelected(null)}>
          <div className="team-modal__box" onClick={e => e.stopPropagation()}>
            <button className="team-modal__close" onClick={() => setSelected(null)}>✕</button>
            <div className="team-modal__header">
              <div className="team-modal__avatar"><img src={open.image} alt={open.name} /></div>
              <div>
                <h2 className="team-modal__name">{open.name}</h2>
                <p className="team-modal__role">{open.role}</p>
              </div>
            </div>
            <p className="team-modal__bio">{open.bio}</p>
            <div className="team-modal__tags"> 
              {open.expertise.map(e => <span key={e} className="team-card__tag">{e}</span>)}
            </div>
            <a
              href={open.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-navy team-modal__linkedin"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              View LinkedIn Profile
            </a>
          </div>
        </div>
      )}

      
    </div>
  );
}
