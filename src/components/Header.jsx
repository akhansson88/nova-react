import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * Header component containing the site logo, navigation menu and
 * contact button. The navigation makes use of React Router's `Link`
 * where appropriate to prevent a full page reload. Styling is
 * provided globally in `App.css`.
 */
function Header() {
  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            {/* Logo image inverted on dark background */}
            <img
              src="https://i.postimg.cc/1tW6mw8K/nova-logo-(1).webp"
              alt="Nova logo"
              style={{ height: '32px', width: 'auto', display: 'block', filter: 'invert(1)' }}
            />
          </div>
          {/* Navigation links */}
          <div className="menu">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>Hem</NavLink>
            <NavLink to="/produkter" className={({ isActive }) => (isActive ? 'active' : undefined)}>Produkter</NavLink>
            <NavLink to="/galleri" className={({ isActive }) => (isActive ? 'active' : undefined)}>Galleri</NavLink>
            <a href="#">Referens</a>
            <NavLink to="/om-oss" className={({ isActive }) => (isActive ? 'active' : undefined)}>Om oss</NavLink>
            <NavLink to="/reklam" className={({ isActive }) => (isActive ? 'active' : undefined)}>Reklam</NavLink>
            <a href="#">Blog</a>
          </div>
          {/* Contact button */}
          <Link to="/kontakt" className="cta">KONTAKT</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;