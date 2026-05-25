import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Team.css';
import './About.css';
import ab from '../assets/dad3.jpeg'
import uncle from '../assets/uncle.jpg'

const team = [
  {
    name: 'Dr Babatunde Adelekan',
    role: 'Founder & CEO',
    bio: 'Dr. Adelekan Adeshina Babatunde is a Public Health Physician, researcher, consultant, and development practitioner with over two decades of experience leading health, gender, and social development initiatives across Nigeria and West Africa. His work spans health systems strengthening, monitoring and evaluation, gender equality, gender-based violence prevention and response, adolescent and youth health, HIV prevention, sexual and reproductive health and rights (SRHR), comprehensive sexuality education, and policy development. He has worked extensively with governments, UN agencies, donor organisations, academic institutions, civil society organisations, and community-based structures to design and implement evidence-driven programmes that improve health outcomes and strengthen institutional systems.',
    expertise: ['Strategic Advisory', 'Survey & Data Analysis', 'M&E', 'Health Education & Capacity Development'],
    linkedin: 'https://www.linkedin.com/in/',
    initials: 'AB',
    image: ab,
  },
  {
    name: 'Dr Adeyemi Adelekan',
    role: 'Consultant',
    bio: 'Adeyemi is an experienced organisational development and learning leader with expertise in workflow optimisation, capacity building, and talent development across Africa, Europe, Asia, and North America. He had led large-scale onboarding for 1,700+ IT engineers, designed leadership and competency programs, and delivered performance management and employability initiatives for multinational organisations across consulting, technology, oil and gas, and nonprofit sectors.',
    expertise: ['M&E', 'Leadership Training & Strategy', 'Product Evaluation'],
    linkedin: 'https://www.linkedin.com/in/',
    initials: 'AA',
    image: uncle,
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
            
          </div>
        </div>
      )}

      
    </div>
  );
}
