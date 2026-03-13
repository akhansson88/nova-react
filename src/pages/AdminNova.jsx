import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase.js';

const menuItems = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'users', label: 'Users' },
  { key: 'analytics', label: 'Analytics' },
];

const pageCopy = {
  dashboard: {
    title: 'Dashboard',
    text: 'Översikt över webbplatsen och senaste aktivitet.',
  },
  users: {
    title: 'Users',
    text: 'Hantera användare och behörigheter här.',
  },
  analytics: {
    title: 'Analytics',
    text: 'Se grundläggande statistik och trafiksiffror.',
  },
};

function AdminNova() {
  const [activeView, setActiveView] = useState('dashboard');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const currentPage = useMemo(() => pageCopy[activeView], [activeView]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Fel användarnamn eller lösenord. Försök igen.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setActiveView('dashboard');
  };

  if (loading) {
    return (
      <main className="admin-shell">
        <div className="admin-shell-loading">Laddar Admin Nova...</div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="admin-shell admin-shell-login">
        <section className="admin-login-section">
          <div className="admin-login-container">
            <div className="admin-login-card">
              <div className="section-eyebrow">ADMIN NOVA</div>
              <h1 className="admin-login-title">Logga in</h1>
              <Link to="/" className="admin-login-back">← Tillbaka till startsidan</Link>
              <p className="admin-login-intro">
                Ange din e-postadress och ditt lösenord för att komma vidare till adminpanelen.
              </p>

              <form className="admin-login-form" onSubmit={handleSubmit}>
                <label className="admin-login-field">
                  <span>E-post</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="din@epost.se"
                    autoComplete="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                <label className="admin-login-field">
                  <span>Lösenord</span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Lösenord"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>

                {error ? <div className="admin-login-error">{error}</div> : null}

                <button type="submit" className="cta admin-login-button" disabled={submitting}>
                  {submitting ? 'Loggar in...' : 'Logga in'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <div className="admin-layout">
        <aside className="admin-sidebar">
          <div className="admin-sidebar-top">
            <div>
              <div className="section-eyebrow admin-sidebar-eyebrow">ADMIN NOVA</div>
              <h1 className="admin-sidebar-title">Panel</h1>
            </div>

            <nav className="admin-sidebar-nav" aria-label="Admin navigation">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={`admin-sidebar-link${activeView === item.key ? ' is-active' : ''}`}
                  onClick={() => setActiveView(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <button type="button" className="admin-logout" onClick={handleLogout}>
            Logga ut
          </button>
        </aside>

        <section className="admin-content">
          <div className="admin-content-card">
            <div className="section-eyebrow">ADMIN</div>
            <h2 className="admin-content-title">{currentPage.title}</h2>
            <p className="admin-content-text">{currentPage.text}</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AdminNova;
