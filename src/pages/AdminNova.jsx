import React from 'react';

function AdminNova() {
  return (
    <main className="page admin-page">
      <section className="admin-login-section">
        <div className="admin-login-container">
          <div className="admin-login-card">
            <div className="section-eyebrow">ADMIN NOVA</div>
            <h1 className="admin-login-title">Logga in</h1>
            <p className="admin-login-intro">
              Ange ditt användarnamn och lösenord för att komma vidare till adminpanelen.
            </p>

            <form className="admin-login-form">
              <label className="admin-login-field">
                <span>Användarnamn</span>
                <input type="text" name="username" placeholder="Användarnamn" autoComplete="username" />
              </label>

              <label className="admin-login-field">
                <span>Lösenord</span>
                <input type="password" name="password" placeholder="Lösenord" autoComplete="current-password" />
              </label>

              <button type="submit" className="cta admin-login-button">Logga in</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AdminNova;
