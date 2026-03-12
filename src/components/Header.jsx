import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/">Hem</Link>
            <Link to="/produkter">Produkter</Link>
            <Link to="/galleri">Galleri</Link>
            <a href="#">Referens</a>
            <Link to="/om-oss">Om oss</Link>
            <Link to="/reklam">Reklam</Link>
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