import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">Adullam Consulting</span>
            <span className="navbar__logo-sub">Limited</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__nav">
          {['/', '/about', '/services', '/team', '/contact'].map((path, i) => {
            const labels = ['Home', 'About', 'Services', 'Team', 'Contact'];
            return (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
          <Link to="/contact" className="btn btn-gold navbar__cta">Get In Touch</Link>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {['/', '/about', '/services', '/team', '/contact'].map((path, i) => {
          const labels = ['Home', 'About', 'Services', 'Team', 'Contact'];
          return (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              onClick={closeMenu}
            >
              {labels[i]}
            </NavLink>
          );
        })}
        <Link to="/contact" className="btn btn-gold" onClick={closeMenu} style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>
          Get In Touch
        </Link>
      </div>
    </header>
  );
}
