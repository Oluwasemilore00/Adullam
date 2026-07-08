import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import './About.css';

const services = [
  {
    id: 'organisational-development',
    num: '01',
    title: 'Organisational Development and Transformation',
    tagline: 'Stronger systems, structures, workflows, and teams',
    desc: 'We help organisations strengthen structures, improve governance systems, redesign workflows, enhance operational efficiency, and build high-performing teams.',
    features: [
      'Organisational assessments and diagnostics',
      'Organisational restructuring and redesign',
      'Workflow and process improvement',
      'Change management and transformation support',
      'Governance and accountability systems',
      'Business process optimisation',
      'Operational excellence and performance improvement',
      'Team effectiveness and culture transformation',
    ],
    icon: '01',
  },
  {
    id: 'learning-leadership',
    num: '02',
    title: 'Learning, Leadership and Workforce Development',
    tagline: 'Practical learning that improves performance',
    desc: 'We design and deliver practical learning solutions that strengthen individual, team, and organisational performance.',
    features: [
      'Leadership development programmes',
      'Executive coaching and mentoring',
      'Workforce capability assessments',
      'Competency framework development',
      'Learning needs assessments',
      'Graduate employability programmes',
      'Talent development strategies',
      'Succession planning',
      'Learning management systems deployment and optimisation',
      'Digital learning and micro-learning solutions',
      'Training programme design, implementation and evaluation',
    ],
    icon: '02',
  },
  {
    id: 'performance-management',
    num: '03',
    title: 'Performance Management and Business Excellence',
    tagline: 'Aligning people, processes, and results',
    desc: 'We support organisations to establish performance systems that align people, processes, and results.',
    features: [
      'Performance management system design',
      'Balanced Scorecard development and implementation',
      'KPI framework development',
      'Organisational performance reviews',
      'Results-based management systems',
      'Continuous improvement frameworks',
      'Strategic performance monitoring',
      'Productivity and efficiency assessments',
    ],
    icon: '03',
  },
  {
    id: 'public-health-development',
    num: '04',
    title: 'Public Health and Development Consulting',
    tagline: 'Technical assistance for programme quality and impact',
    desc: 'We provide technical assistance to governments, NGOs, development partners, faith-based organisations, and health institutions to strengthen programme quality, effectiveness, and impact.',
    features: [
      'Health systems strengthening',
      'Sexual and reproductive health and rights',
      'HIV prevention and response',
      'Adolescent and youth development',
      'Maternal and child health',
      'Gender equality and social inclusion',
      'Gender-based violence prevention and response',
      'Community health systems',
      'Safeguarding and protection programming',
      'Humanitarian and resilience programming',
    ],
    icon: '04',
  },
  {
    id: 'research-mel',
    num: '05',
    title: 'Research, Monitoring, Evaluation and Learning',
    tagline: 'Evidence for decisions, accountability, and improvement',
    desc: 'We generate evidence that supports decision-making, accountability, and programme improvement.',
    features: [
      'Baseline studies and needs assessments',
      'Monitoring and evaluation systems',
      'Programme evaluations',
      'Impact assessments',
      'Research studies',
      'Data quality assessments',
      'Learning reviews',
      'Theory of Change development',
      'Logical framework design',
      'Results measurement systems',
      'Data analytics and reporting',
    ],
    icon: '05',
  },
  {
    id: 'strategy-programme-design',
    num: '06',
    title: 'Strategy, Programme Design and Resource Mobilisation',
    tagline: 'From vision to fundable, implementable programmes',
    desc: 'We help organisations move from vision to implementation through practical planning and resource mobilisation.',
    features: [
      'Strategic planning',
      'Business planning',
      'Programme design',
      'Concept note development',
      'Grant proposal writing',
      'Theory of Change development',
      'Stakeholder mapping and analysis',
      'Risk assessments',
      'Implementation planning',
      'Partnership development',
    ],
    icon: '06',
  },
  {
    id: 'employability-workforce',
    num: '07',
    title: 'Employability and Workforce Readiness Solutions',
    tagline: 'Improving workforce readiness and employability outcomes',
    desc: 'We support governments, institutions, employers, and development partners to improve workforce readiness and employability outcomes.',
    features: [
      'Graduate employability programmes',
      'Internship programme design and management',
      'Workforce transition programmes',
      'Career development systems',
      'Workplace readiness training',
      'Youth employment initiatives',
      'Skills development programmes',
      'Industry readiness assessments',
    ],
    icon: '07',
  },
  {
    id: 'digital-learning',
    num: '08',
    title: 'Digital Learning and Knowledge Solutions',
    tagline: 'Technology-enabled learning and knowledge management',
    desc: 'We leverage technology to improve learning, knowledge management, and workforce performance.',
    features: [
      'Learning Management System implementation',
      'Digital learning strategy',
      'Micro-learning design',
      'E-learning development',
      'Knowledge management systems',
      'Learning content development',
      'Virtual learning programmes',
      'Organisational knowledge-sharing platforms',
    ],
    icon: '08',
  },
];

const serviceStats = [
  'Public Sector',
  'NGOs',
  'Healthcare',
  'Education',
  'Technology',
  'Oil and Gas',
  'Financial Services',
  'Humanitarian',
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
            Integrated services in organisational transformation, leadership,
            workforce capability, public health, development consulting,
            research, performance management, and strategic advisory.
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
