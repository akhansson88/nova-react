import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component replicating the design from the supplied HTML.  It
 * contains sections for navigation, services and social links.  On
 * small screens the grid layout collapses gracefully thanks to the
 * accompanying CSS.
 */
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Logo linking back to the home/om-oss page */}
          <Link to="/" className="footer-logo">
            <img
              src="/images/logos/novatryck-logotyp-stockholm-header.svg"
              alt="Novatryck logotyp för reklamtryck i Stockholm"
            />
          </Link>

          {/* Main menu links */}
          <div>
            <p className="footer-title">Menu</p>
            <div className="footer-links">
              <Link to="/">Hem</Link>
              <a href="#">Tjänster</a>
              <Link to="/produkter">Produkter</Link>
              <Link to="/galleri">Galleri</Link>
              <Link to="/om-oss">Om oss</Link>
              <Link to="/kontakt">Kontakt</Link>
              <a href="#">Blog</a>
            </div>
          </div>

          {/* Service links */}
          <div>
            <p className="footer-title">Service</p>
            <div className="footer-links">
              <a href="#">Dekaler</a>
              <a href="#">Banderoller</a>
              <a href="#">Rollup</a>
              <a href="#">Fönsterdekor</a>
              <a href="#">Bilfoliering</a>
              <a href="#">Frostfolie</a>
            </div>
          </div>

          {/* Social link(s) */}
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <img
                src="/images/social/facebook-ikon-novatryck-stockholm.svg"
                alt="Facebook-ikon för Novatryck i Stockholm"
              />
            </a>
          </div>
        </div>

        {/* Bottom bar with copyright and legal links */}
        <div className="footer-bottom">
          <div>Copyright © 2022 Novatryck. All Rights Reserved.</div>
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
          <a href="#" className="footer-admin-login" aria-label="Admin login">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM4 12.5h7.2l1.3 1.3v1.7h-1.7V17H9.1v-1.5H7.4V17H5.7v-2.2L4 13.1v-.6Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;