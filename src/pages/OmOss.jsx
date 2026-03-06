import React from 'react';

/**
 * The OmOss page replicates the supplied HTML design for the "Om oss"
 * (About us) page.  It includes a hero section, a benefits section
 * and a contact band.  The header and footer are rendered from
 * separate components in the App layout.
 */
function OmOss() {
  return (
    <main className="page">
      {/* Container wraps the hero section */}
      <div className="container">
        <section className="hero">
          {/* Left column with headline and call‑to‑action buttons */}
          <div>
            <div className="eyebrow">OM OSS</div>
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

            <div className="note">
              MÖJLIGHET ATT KÖPA REDAN FRÅN 1 STYCK!
            </div>
          </div>

          {/* Right column with decorative art */}
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

      {/* Benefits section describing why to choose the service */}
      <section className="benefits-section">
        <div className="scroll-dot">↓</div>
        <div className="benefits-container">
          <div className="section-eyebrow">ÄR DU</div>
          <h2 className="benefits-title">
            Trött På Reklam Som Snabbt Bleknar,<br />
            Faller Av Eller Ser Billig Ut?
          </h2>
          <p className="benefits-intro">
            <strong>Din reklam</strong> försvinner bland konkurrenterna, kunderna lägger inte
            märke till<br />den och du betalar för något som måste bytas ut varje
            säsong.<br />Vi producerar annonser som verkligen{' '}
            <strong>fungerar:</strong>
          </p>

          <div className="benefits-grid">
            {/* Benefit item 1 */}
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Hållbara material och solvent tryck.</h3>
                <p>
                  Färgerna bleknar inte under flera år, inte ens på bilen,
                  fönstret eller fasaden, online pris uppskattning inom en
                  timme.
                </p>
              </div>
            </div>
            {/* Benefit item 2 */}
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Fönster, väggar, roll-ups, banderoller, dekor, tryckfolier.</h3>
                <p>
                  Professionella tryckta folier för fönster, väggar, roll-ups,
                  banderoller och dekorationer, hållbara, väderbeständiga,
                  online pris uppskattning inom en timme.
                </p>
              </div>
            </div>
            {/* Benefit item 3 */}
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Snabb leverans, även inom 24/48 timmar</h3>
                <p>
                  Fönster, väggar, roll-ups, banderoller, dekorationer och
                  tryckta folier. Online-prisuppskattning inom en timme.
                </p>
              </div>
            </div>
            {/* Benefit item 4 */}
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Rättvisa priser, utan „dolda” tillägg</h3>
                <p>
                  Du har redan betalat för mycket för rollups som visade sig
                  vara av dålig kvalitet. Online pris uppskattning inom en
                  timme.
                </p>
              </div>
            </div>
          </div>

          <div className="benefits-cta-box">
            <p>
              Vi skapar så bra reklam för dig att du kommer att rekommendera
              oss<br />till dina vänner i branschen. Vill du se hur mycket du
              faktiskt kan<br />spara och hur snabbt vi kan göra det? Skriv eller
              ring oss.
            </p>
            <div className="benefits-cta-row">
              <button className="cta cta-small">FÅ OFFERT</button>
              <button className="cta cta-small">RING OSS</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact band section */}
      <section className="contact-band-section">
        <div className="contact-band-container">
          <div className="contact-band">
            <div className="contact-band-copy">
              <h2>
                Har du fler frågor<br />eller är nåt oklart?
              </h2>
              <button className="contact-band-btn">SKRIV</button>
            </div>
            <div className="contact-band-art">
              <div className="contact-band-circle"></div>
              <div className="contact-band-star-dot"></div>
              <div className="contact-band-arch"></div>
              <div className="contact-band-card">
                <img
                  src="https://i.postimg.cc/52LCYj7f/whitecard.webp"
                  alt="card"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OmOss;