import React, { useEffect, useRef, useState } from 'react';

function Kontakt() {
  const [mouseMoved, setMouseMoved] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const formTimeRef = useRef(Date.now());
  const gotchaRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = () => setMouseMoved(true);
    document.addEventListener('mousemove', handleMouseMove, { once: true });
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const timeTaken = Date.now() - formTimeRef.current;
    const gotchaFilled = gotchaRef.current?.value?.trim();

    if (timeTaken < 600 || !mouseMoved || gotchaFilled) {
      alert('Ovanligt beteende upptäcktes. Försök igen.');
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSuccess(true);
      setSubmitting(false);
      e.target.reset();
      formTimeRef.current = Date.now();
    }, 1200);
  };

  return (
    <main className="page">
      <div className="container">
        <section className="hero hero-home">
          <div className="scroll-dot">↓</div>
          <div>
            <div className="eyebrow">KONTAKT</div>
            <h1 className="headline">
              Tryckning Dekaler,<br />
              Fönsterdekor, Bildekaler,<br />
              Banderoller, Rollup,<br />
              Bilfoliering
            </h1>

            <div className="cta-row">
              <button className="cta">FÅ OFFERT</button>
              <button className="cta">RING OSS</button>
            </div>

            <div className="note">MÖJLIGHET ATT KÖPA REDAN FRÅN 1 STYCK!</div>
          </div>

          <div className="art">
            <div className="bg-card"></div>
            <div className="cloud-scribble"></div>
            <div
              className="floating-card"
              style={{
                backgroundImage: "url('https://i.postimg.cc/HL2QVfJm/color-palette.webp')",
              }}
            ></div>
            <div
              className="main-image"
              style={{
                backgroundImage: "url('https://i.postimg.cc/TPVXmcGX/Chat-GPT-Image-Mar-6-2026-08-33-33-AM.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div
              className="portrait"
              style={{
                backgroundImage: "url('https://i.postimg.cc/pdZDpg9N/profile-picture.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        </section>
      </div>

      <section className="contact-page-section">
        <div className="scroll-dot">↓</div>
        <div className="contact-page-container">
          <div className="contact-page-top">
            <div className="contact-info-card">
              <div className="contact-info-icon">◧</div>
              <div className="contact-info-label">PHONE</div>
              <p>+1 (234) 567-89-00</p>
            </div>

            <div className="contact-info-card contact-info-card-active">
              <div className="contact-info-icon">✉</div>
              <div className="contact-info-label">EMAIL</div>
              <p>kontakt@novatryck.se</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">⬤</div>
              <div className="contact-info-label">ADDRESS</div>
              <p>Johannesfredsvägen 11, Bromma</p>
              <p>Organisationsnummer: 556872-0090</p>
            </div>
          </div>

          <div className="contact-form-script-wrap">
            <div className="contact-script-card">
              <h2>Har Du Andra Frågor?</h2>

              <form className="contact-script-form" autoComplete="off" onSubmit={handleSubmit}>
                <div className="contact-hp-field" aria-hidden="true">
                  <input ref={gotchaRef} type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
                </div>

                <div className="contact-script-group contact-script-group-hidden">
                  <label htmlFor="name">Namn och efternamn</label>
                  <input type="text" id="name" name="name" placeholder="Jan Kowalski" />
                </div>

                <div className="contact-script-group">
                  <input type="email" id="email" name="email" required placeholder="Your email" />
                </div>

                <div className="contact-script-group contact-script-group-select">
                  <input type="text" id="subject" name="subject" required placeholder="Subject" />
                  <span className="contact-script-caret">▾</span>
                </div>

                <div className="contact-script-group">
                  <textarea id="message" name="message" required placeholder="Message" rows="6"></textarea>
                </div>

                <button type="submit" className="cta contact-submit-btn" disabled={submitting}>
                  {submitting ? 'SKICKAR...' : 'SKICKA'}
                </button>

                {success && (
                  <div className="contact-script-success">
                    Tack! Vi hör av oss senast i morgon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="scroll-dot">↓</div>
        <div className="contact-map-wrap">
          <iframe
            className="contact-map-frame"
            title="Karta över Johannesfredsvägen 11, Bromma"
            src="https://www.google.com/maps?q=Johannesfredsv%C3%A4gen%2011%2C%20Bromma&z=13&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
          <div className="contact-map-overlay"></div>
        </div>
      </section>
    </main>
  );
}

export default Kontakt;
