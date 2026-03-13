import React from 'react';

const products = [
  { title: 'DEKALER', icon: 'frame' },
  { title: 'BANDEROLLER', icon: 'banner' },
  { title: 'ROLL-UPS', icon: 'rollup' },
  { title: 'FÖNSTERDEKOR', icon: 'window' },
  { title: 'BILDEKOR', icon: 'car' },
  { title: 'FROSTFOLIE', icon: 'drop' },
];

function ProductIcon({ type }) {
  switch (type) {
    case 'frame':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect x="10" y="14" width="44" height="34" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="23" cy="25" r="4" fill="currentColor" />
          <path d="M16 42l11-11 8 8 7-7 10 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'banner':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect x="12" y="18" width="40" height="26" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="22" cy="25" r="2" fill="currentColor" />
          <circle cx="42" cy="25" r="2" fill="currentColor" />
          <circle cx="22" cy="37" r="2" fill="currentColor" />
          <circle cx="42" cy="37" r="2" fill="currentColor" />
        </svg>
      );
    case 'rollup':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M22 14h20v30H22z" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M26 18h12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M32 44v8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 52h16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M18 22l-6-6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'window':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect x="14" y="14" width="36" height="36" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M32 14v36M14 32h36" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      );
    case 'car':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M18 40l5-13h18l10 13v6H14v-4a2 2 0 0 1 2-2h2z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="24" cy="47" r="4" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="42" cy="47" r="4" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
      );
    case 'drop':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 13c10 13 18 20 18 30a18 18 0 1 1-36 0c0-10 8-17 18-30z" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M24 44c2 4 6 6 10 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function Produkter() {
  return (
    <main className="page">
      <div className="container">
        <section className="hero hero-home">
          <div className="scroll-dot">↓</div>
          <div>
            <div className="eyebrow">PRODUKTER</div>
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

      <section className="products-section">
        <div className="scroll-dot">↓</div>
        <div className="reklam-container">
          <div className="reklam-logo-row reklam-logo-row-image">
            <img
              className="reklam-logo-strip"
              src="/images/brands/kunder-novatryck-stockholm-referenslogos.png"
              alt="Kundlogotyper för Novatryck i Stockholm"
              loading="lazy"
            />
          </div>

          <div className="reklam-divider" />

          <div className="reklam-intro">
            <div className="section-eyebrow">VARFÖR DET ÄR VÄRT</div>
            <h2 className="reklam-title">
              Vet Du Fortfarande Inte
              <br />
              Exakt Vad Du Behöver?
            </h2>
            <p className="reklam-lead">
              Om du funderar på om våra produkter verkligen passar dig
              <br />
              kan du se vad du har att välja mellan nedan.
            </p>
          </div>

          <div className="reklam-grid">
            {products.map((product) => (
              <a key={product.title} href="#" className="reklam-card">
                <span className="reklam-card-badge">✓</span>
                <div className="reklam-icon-wrap">
                  <ProductIcon type={product.icon} />
                </div>
                <h3>{product.title}</h3>
                <span>Läs mer</span>
              </a>
            ))}
          </div>

          <section className="reklam-feature products-feature products-feature-dekaler-image">
            <div className="scroll-dot">↓</div>
            <div className="reklam-feature-copy">
              <h2>DEKALER</h2>
              <p className="reklam-feature-lead">
                Har du svårt att hitta hållbara,
                <br />
                billiga klistermärken i valfri form
                <br />
                och storlek – till bilen, fönstret,
                <br />
                väggen eller skyltfönstret?
              </p>
              <p>
                Vi trycker klistermärken i valfri form och
                <br />
                storlek, exakt efter dina önskemål, och de
                <br />
                tål sol, regn och biltvätt.
              </p>
              <p>
                Snabb onlineprisuppskattning, tillverkning
                <br />
                från 1 st., leverans inom 24–48 timmar –
                <br />
                klistermärken som behåller färg och form i
                <br />
                åratal.
              </p>

              <div className="reklam-feature-actions">
                <button className="cta cta-small reklam-feature-btn">FÅ OFFERT</button>
                <button className="cta cta-small reklam-feature-btn">RING OSS</button>
              </div>
            </div>

            <div className="reklam-feature-art reklam-feature-art-dekaler-image">
              <img
                className="reklam-feature-full-image"
                src="/images/products/dekaler-klistermarken-novatryck-stockholm.png"
                alt="Dekaler och klistermärken från Novatryck i Stockholm"
                loading="lazy"
              />
            </div>
          </section>

          <section className="reklam-feature reklam-feature-alt products-feature-alt products-feature-banderoller-image">
            <div className="scroll-dot">↓</div>
            <div className="reklam-feature-art reklam-feature-art-banderoller-image">
              <img
                className="reklam-feature-full-image"
                src="/images/products/banderoller-reklamtryck-novatryck-stockholm.png"
                alt="Banderoller och reklamtryck från Novatryck i Stockholm"
                loading="lazy"
              />
            </div>

            <div className="reklam-feature-copy reklam-feature-copy-alt">
              <h2>BANDEROLLER</h2>
              <p className="reklam-feature-lead">
                Din reklam försvinner i mängden.
                <br />
                Affischerna lossnar, banderollerna
                <br />
                bleknar efter en vecka och kunderna
                <br />
                passerar dig likgiltigt.
              </p>
              <p>
                Vi tillverkar banderoller som verkligen syns – i
                <br />
                PVC, mesh, spunnen polyester eller bomull.
              </p>
              <p>
                Digitaltryck, screentryck eller precisionsskuren
                <br />
                folie. Tåliga mot vind, regn och sol. Klara för
                <br />
                hallen, gatan, stadion, loppet eller evenemanget.
              </p>
              <p>
                Din reklam kommer att vara tydlig, läsbar och
                <br />
                synlig på långt håll – i minst tre säsonger. Beställ
                <br />
                idag, så har du inom 5–7 dagar ett färdigt,
                <br />
                professionellt reklammedium som drar blickarna
                <br />
                till sig och genererar leads.
              </p>
              <p>
                Vill du se exakt hur mycket det kostar för just ditt
                <br />
                format och din plats?
              </p>

              <div className="reklam-feature-actions">
                <button className="cta cta-small reklam-feature-btn">FÅ OFFERT</button>
                <button className="cta cta-small reklam-feature-btn">RING OSS</button>
              </div>
            </div>
          </section>

          <section className="reklam-feature reklam-feature-rollup products-feature-rollup products-feature-rollup-image">
            <div className="scroll-dot">↓</div>
            <div className="reklam-feature-copy reklam-feature-copy-rollup">
              <h2>ROLL-UP</h2>
              <p className="reklam-feature-lead">
                Du står på en marknad, en konferens
                <br />
                eller i ett köpcentrum. Du vill dra till dig
                <br />
                uppmärksamhet, men banderollen är
                <br />
                skrynklig, står snett och tar upp halva
                <br />
                bagageutrymmet när den är hopvikt och
                <br />
                ser ut som en krossad kartong.
              </p>
              <p>
                Roll-up 85×200 cm med aluminiumkonstruktion
                <br />
                och matt banner 200 g/m². Den väger 3,2 kg
                <br />
                och kan vikas ihop på 20 sekunder till en
                <br />
                kompakt väska med kardborreband och
                <br />
                handtag.
              </p>
              <p>
                Du ställer upp den på 15 sekunder. Den tål
                <br />
                hundratals monteringar och demonteringar.
                <br />
                Den ser professionell ut även efter ett års
                <br />
                intensiv användning.
              </p>
              <p>
                Vi levererar den klar att användas inom 48
                <br />
                timmar efter godkännande av designen.
              </p>
              <p>
                Beställ en roll-up som faktiskt fungerar, inte
                <br />
                bara står där.
              </p>

              <div className="reklam-feature-actions">
                <button className="cta cta-small reklam-feature-btn">FÅ OFFERT</button>
                <button className="cta cta-small reklam-feature-btn">RING OSS</button>
              </div>
            </div>

            <div className="reklam-feature-art reklam-feature-art-rollup-image">
              <img
                className="reklam-feature-full-image"
                src="/images/products/rollup-massvagg-novatryck-stockholm.png"
                alt="Roll-up och mässvägg från Novatryck i Stockholm"
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </section>

      <section className="window-section products-window-section">
        <div className="scroll-dot">↓</div>
        <div className="window-container">
          <div className="window-layout">
            <div className="window-art">
              <div className="window-bg"></div>
              <div className="window-cloud"></div>
              <div className="window-card"></div>
              <div className="window-image"></div>
              <div className="window-arrow"></div>
            </div>

            <div className="window-copy">
              <h2>FÖNSTERDEKOR</h2>
              <p className="window-lead">
                Din butiksfönster lockar förbipasserande,
                <br />
                men avslöjar samtidigt för mycket
                <br />
                av interiören?
              </p>

              <p>Vi skär ut och trycker på skyltfönster:</p>
              <ul className="window-list">
                <li>Matt folie med utskuren logo/text</li>
                <li>Diskret skydd + elegant reklambudskap</li>
                <li>Window Vision – du ser ut, ingen ser in</li>
                <li>Utskärning av grafik och motiv i valfri form och färg.</li>
              </ul>

              <p>
                Du ger oss måtten och idén – vi sköter design,
                <br />
                tillverkning och montering.
              </p>
              <p>
                En effekt som fungerar på gatan och omvandlas till
                <br />
                försäljning. Allt i tid och utan överraskningar.
              </p>
              <p>
                Vill du se hur det ser ut på din webbplats? Vi skickar
                <br />
                tillbaka ett preliminärt förslag + offert inom 48 timmar.
              </p>

              <div className="reklam-feature-actions window-actions">
                <button className="cta cta-small reklam-feature-btn">FÅ OFFERT</button>
                <button className="cta cta-small reklam-feature-btn">RING OSS</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vehicle-section products-vehicle-section">
        <div className="scroll-dot">↓</div>
        <div className="vehicle-container">
          <div className="vehicle-layout">
            <div className="vehicle-copy">
              <h2>FOLIERING, BILDEKOR</h2>
              <p className="vehicle-lead">
                Ditt företag försvinner i mängden på
                <br />
                vägen. Kunderna passerar dig varje
                <br />
                dag utan att ens veta att du finns.
              </p>

              <p>
                Vi folierar in bilar, bussar, lastbilar, motorcyklar
                <br />
                och släpvagnar så att ditt varumärke syns på
                <br />
                långt håll – 24 timmar om dygnet, 7 dagar i
                <br />
                veckan. Vi har arbetat med detta i 15 år.
                <br />
                Vi monterar dekaler hos bilhandlare, i vår
                <br />
                verkstad, men vi kan också komma till ditt
                <br />
                företag.
              </p>

              <p>
                Alltid konkret, snabb prisuppgift (inom 24
                <br />
                timmar), pålitlig montering och ett resultat som
                <br />
                verkligen drar blickarna till sig och genererar
                <br />
                telefonsamtal. Över 1000 genomförda projekt.
              </p>

              <p>
                Skriv eller ring nu - skicka ett foto på bilen så får
                <br />
                du ett färdigt prisförslag inom 24 timmar.
              </p>

              <div className="reklam-feature-actions vehicle-actions">
                <button className="cta cta-small reklam-feature-btn">FÅ OFFERT</button>
                <button className="cta cta-small reklam-feature-btn">RING OSS</button>
              </div>
            </div>

            <div className="vehicle-art">
              <div className="vehicle-bg"></div>
              <div className="vehicle-cloud"></div>
              <div className="vehicle-card"></div>
              <div className="vehicle-image"></div>
              <div className="vehicle-arrow"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="frost-section products-frost-section">
        <div className="scroll-dot">↓</div>
        <div className="frost-container">
          <div className="frost-layout">
            <div className="frost-art">
              <div className="frost-bg"></div>
              <div className="frost-cloud"></div>
              <div className="frost-card"></div>
              <div className="frost-image"></div>
              <div className="frost-arrow"></div>
            </div>

            <div className="frost-copy">
              <h2>FROSTFOLIE</h2>
              <p className="frost-lead">
                Ditt butiksfönster lockar förbipasserande,
                <br />
                men avslöjar samtidigt för mycket
                <br />
                av interiören?
              </p>

              <p>
                Vi skär ut och trycker för skyltfönster - matt folie med
                <br />
                utskuren logo/text.
              </p>

              <ul className="frost-list">
                <li>Diskret insynsskydd och ett elegant reklambudskap</li>
                <li>Window Vision - du ser ut, men ingen ser in</li>
                <li>Utskärning av grafik och motiv i valfri form och färg.</li>
              </ul>

              <p>
                Du ger oss måtten och idén - vi sköter design,
                <br />
                tillverkning och montering.
              </p>

              <p>
                En effekt som fungerar ute på gatan och omvandlas
                <br />
                till försäljning. Allt i tid och utan överraskningar.
              </p>

              <p>
                Vill du se hur det ser ut på din webbplats? Vi
                <br />
                återkommer med ett preliminärt förslag och en offert
                <br />
                inom 48 timmar.
              </p>

              <div className="reklam-feature-actions frost-actions">
                <button className="cta cta-small reklam-feature-btn">FÅ OFFERT</button>
                <button className="cta cta-small reklam-feature-btn">RING OSS</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-band-section reklam-contact-section">
        <div className="scroll-dot">↓</div>
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

export default Produkter;
