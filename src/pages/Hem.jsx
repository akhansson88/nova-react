import React, { useEffect, useRef, useState } from 'react';
import PageHero from '../components/PageHero.jsx';

function Hem() {
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
        <PageHero
          id="hem-hero"
          pageName="HEM"
          title={(
            <>
              Behöver du tryck,
              <br />
              men vet inte vilket?
            </>
          )}
          middleContent={(
            <>
              <p className="hero-home-intro">
                Vi erbjuder dig reklamtryck som är
                <br />
                anpassade efter DINA behov:
              </p>

              <ul className="hero-home-list">
                <li>TRYCKTA folier i alla format</li>
                <li>Banderoller och reklam rollups</li>
                <li>Utskurna bokstäver i alla färger</li>
              </ul>
            </>
          )}
          note="MÖJLIGHET ATT KÖPA REDAN FRÅN 1 STYCK!"
        />
      </div>

      <section id="hem-utmaningar" className="home-problems-section">
        <div className="scroll-dot">↓</div>
        <div className="home-problems-container">
          <div className="section-eyebrow">ÄVEN</div>
          <h2 className="home-problems-title">
            Den Bästa Folien Kan Visa Sig
            <br />
            Vara Helt Fel För Ditt Behov
          </h2>
          <p className="home-problems-intro">
            Du behöver en utskrift på folie, banner eller rollup som är exakt anpassad
            <br />
            efter din beställning. Eftersom du är här vet du säkert redan det.
            <br />
            Men du vet också att det inte alltid är så enkelt att hitta rätt lösning.
          </p>

          <div className="home-problems-grid">
            <div className="home-problem-card">
              <img
                className="home-problem-icon"
                src="/images/problem-icons/storformatsfolie-hallbarhet-ikon.svg"
                alt="Ikon för hållbar storformatsfolie från Novatryck"
                loading="lazy"
              />
              <h3>Är storformatsfolien verkligen hållbar?</h3>
              <p>
                Tidigare har filmen snabbt blivit repig
                <br />
                och tappat formen redan efter kort
                <br />
                tids användning.
              </p>
            </div>

            <div className="home-problem-card">
              <img
                className="home-problem-icon"
                src="/images/problem-icons/trycksaker-leverans-i-tid-ikon.svg"
                alt="Ikon för trycksaker med leverans i tid från Novatryck"
                loading="lazy"
              />
              <h3>Kommer trycksakerna att levereras i tid?</h3>
              <p>
                Beställningen kom en vecka för sent,
                <br />
                vilket förstörde hela kampanjplanen.
              </p>
            </div>

            <div className="home-problem-card">
              <img
                className="home-problem-icon"
                src="/images/problem-icons/banderoller-svenskt-klimat-ikon.svg"
                alt="Ikon för banderoller som tål svenskt klimat"
                loading="lazy"
              />
              <h3>Tål era banderoller det svenska klimatet?</h3>
              <p>
                Tidigare banderoller förstördes snabbt av
                <br />
                regn och vind i det svenska vädret.
              </p>
            </div>

            <div className="home-problem-card">
              <img
                className="home-problem-icon"
                src="/images/problem-icons/rollup-pris-ikon.svg"
                alt="Ikon för rollup med tydligt pris från Novatryck"
                loading="lazy"
              />
              <h3>Vad kostar en rollup utan att priset drar iväg?</h3>
              <p>
                Du har redan betalat för mycket för
                <br />
                rollups som visade sig hålla låg
                <br />
                kvalitet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="hem-fragor" className="home-questions-section">
        <div className="scroll-dot scroll-dot-dark">↓</div>
        <div className="home-questions-container">
          <div className="home-questions-layout">
            <div className="home-questions-copy">
              <div className="section-eyebrow">LETAR</div>
              <h2 className="home-questions-title">
                Du Efter Ett Reklamtryckeri
                <br />
                I Stockholm Med Snabb
                <br />
                Leverans?
              </h2>
              <p className="home-questions-intro">
                Stör det dig att banners kommer för sent och
                <br />
                förstör kampanjer? Kanske är du rädd för dålig
                <br />
                tryckkvalitet efter tidigare erfarenheter?
              </p>
              <img
                className="home-questions-arrow"
                src="/images/arrows/pil-billigt-offert-novatryck-stockholm.svg"
                alt="Pil mot innehåll om reklamtryck i Stockholm"
                loading="lazy"
              />
            </div>

            <div className="home-questions-panel">
              <div className="home-question-item">
                <div className="home-question-meta">
                  <img
                    className="home-question-icon"
                    src="/images/question-icons/reklamtryck-snabb-leverans-ikon-1.svg"
                    alt="Ikon för reklamtryck med snabb leverans i Stockholm"
                    loading="lazy"
                  />
                </div>
                <p>Vill du ha högkvalitativa <strong>reklamtryck</strong> i kort tid?</p>
              </div>

              <div className="home-question-item">
                <div className="home-question-meta">
                  <img
                    className="home-question-icon"
                    src="/images/question-icons/banderoller-specialstorlek-ikon-2.svg"
                    alt="Ikon för banderoller i specialstorlekar från Novatryck"
                    loading="lazy"
                  />
                </div>
                <p>Letar du efter ett tryckeri som erbjuder personliga <strong>banderoller</strong> i specialstorlekar?</p>
              </div>

              <div className="home-question-item">
                <div className="home-question-meta">
                  <img
                    className="home-question-icon"
                    src="/images/question-icons/reklamfolie-hallbarhet-ikon-3.svg"
                    alt="Ikon för hållbar reklamfolie som tål väder"
                    loading="lazy"
                  />
                </div>
                <p>Behöver du hållbara <strong>reklamfolier</strong> som tål svåra väderförhållanden?</p>
              </div>

              <div className="home-question-item">
                <div className="home-question-meta">
                  <img
                    className="home-question-icon"
                    src="/images/question-icons/tryck-prisuppgift-ikon-4.svg"
                    alt="Ikon för exakta prisuppgifter på tryck från Novatryck"
                    loading="lazy"
                  />
                </div>
                <p>Vill du ha exakta prisuppgifter för <strong>tryck</strong> utan dolda kostnader?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hem-forandring" className="home-transition-section">
        <div className="scroll-dot scroll-dot-dark">↓</div>
        <div className="home-transition-container">
          <div className="section-eyebrow">VÅRT TRYCKERI HAR SKAPATS MED SÅDANA BEHOV I ÅTANKE</div>
          <h2 className="home-transition-title">
            Tack Vare Våra Utskrifter Och
            <br />
            Samarbetet Med Oss Kommer
            <br />
            Du Att Gå Vidare
          </h2>

          <div className="home-transition-graphic">
            <div className="home-transition-rings"></div>
            <div className="home-transition-left">
              <div className="home-transition-emoji">🤔</div>
              <div className="home-transition-side-title">Från</div>
              <p>
                Missnöjd med tryck,
                <br />
                folie och felaktigt
                <br />
                spenderade pengar
              </p>
            </div>

            <div className="home-transition-center-wrap">
              <div className="home-transition-line home-transition-line-left"></div>
              <div className="home-transition-center">Nova</div>
              <div className="home-transition-line home-transition-line-right"></div>
            </div>

            <div className="home-transition-right">
              <div className="home-transition-emoji">😀</div>
              <div className="home-transition-side-title">Till</div>
              <p>
                Full tillfredsställelse
                <br />
                med kvalitet, funktion
                <br />
                och ett bra pris.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="hem-vad-vi-menar" className="home-meaning-section">
        <div className="scroll-dot">↓</div>
        <div className="home-meaning-container">
          <div className="home-meaning-layout">
            <div className="home-meaning-left">
              <div className="eyebrow home-meaning-eyebrow">MER KONKRET?</div>
              <h2 className="home-meaning-title">Vad Menar Jag?</h2>

              <div className="home-meaning-list">
                <div className="home-meaning-item">
                  <span className="home-meaning-bullet">✓</span>
                  <p>Du sparar pengar – vi har marknadens bästa priser.</p>
                </div>
                <div className="home-meaning-item">
                  <span className="home-meaning-bullet">✓</span>
                  <p>Vi erbjuder support och rådgivning i varje steg av beställningen, utan dolda kostnader.</p>
                </div>
                <div className="home-meaning-item">
                  <span className="home-meaning-bullet">✓</span>
                  <p>Du behöver inte oroa dig för reklamfilmens hållbarhet.</p>
                </div>
                <div className="home-meaning-item">
                  <span className="home-meaning-bullet">✓</span>
                  <p>Du behöver inte designa – vi erbjuder gratis mallar.</p>
                </div>
                <div className="home-meaning-item">
                  <span className="home-meaning-bullet">✓</span>
                  <p>Du sparar tid tack vare snabb leverans av beställningar.</p>
                </div>
              </div>
            </div>

            <div className="home-meaning-right">
              <div className="home-meaning-note">
                <div className="home-meaning-note-title">VIKTIGT!</div>
                <h3>Vi utför beställningar i valfri mängd och storlek!</h3>
                <p>Snabbt, billigt, komplett.</p>
                <p>Det är dessa saker som gör vårt tryckeri unikt på marknaden.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hem-sammanfattning" className="home-summary-section">
        <div className="scroll-dot scroll-dot-dark">↓</div>
        <div className="home-summary-container">
          <div className="section-eyebrow">SAMMANFATTNING</div>
          <h2 className="home-summary-title">Förslaget Är Enkelt</h2>

          <div className="home-summary-grid">
            <div className="home-summary-item">
              <span className="home-summary-check">✓</span>
              <p>Vi har skapat ett TRYCKERI som till 100 % uppfyller dina behov.</p>
            </div>
            <div className="home-summary-item">
              <span className="home-summary-check">✓</span>
              <p>Du får ett produkt av högsta kvalitet till ett fantastiskt pris.</p>
            </div>
          </div>

          <div className="home-summary-actions">
            <button className="cta">FÅ OFFERT</button>
            <button className="cta">RING OSS</button>
          </div>
        </div>
      </section>

      <section id="hem-varfor-vart" className="home-value-section">
        <div className="scroll-dot">↓</div>
        <div className="home-value-container">
          <div className="home-value-layout">
            <div className="home-value-copy">
              <div className="section-eyebrow">VARFÖR DET ÄR VÄRT</div>
              <h2 className="home-value-title">
                Är Det Fortfarande
                <br />
                Rande Inte Något
                <br />
                För Dig?
              </h2>
              <p className="home-value-intro">
                Om du funderar på om vårt erbjudande
                <br />
                verkligen är något för dig, se vad du kan
                <br />
                förvänta dig.
              </p>

              <div className="home-value-actions">
                <button className="cta">FÅ OFFERT</button>
                <button className="cta">RING OSS</button>
              </div>
            </div>

            <div className="home-value-list">
              <div className="home-value-item">
                <span className="home-value-check">✓</span>
                <div>
                  <h3>Äntligen får du precis den utskrift du behöver.</h3>
                  <p>Slut på att leta efter tryckerier, erbjudanden, slöseri med tid och felaktigt spenderade pengar.</p>
                </div>
              </div>

              <div className="home-value-item">
                <span className="home-value-check">✓</span>
                <div>
                  <h3>Du får en utskrift, en banner i bästa möjliga kvalitet på marknaden.</h3>
                  <p>Slut med besvikelser på grund av felaktiga utskrifter och slösade budgetar.</p>
                </div>
              </div>

              <div className="home-value-item">
                <span className="home-value-check">✓</span>
                <div>
                  <h3>Dina annonser kommer att hålla även i svenskt väder.</h3>
                  <p>Utskrifterna skyddas med transparent folie, vilket gör dem motståndskraftiga mot skador och repor.</p>
                </div>
              </div>

              <div className="home-value-item">
                <span className="home-value-check">✓</span>
                <div>
                  <h3>Du letar efter en mångsidig produkt, men du vet också att det inte alltid är helt enkelt att hitta rätt.</h3>
                  <p>Vi väljer ut de bästa lösningarna till priser som passar alla plånböcker.</p>
                </div>
              </div>

              <div className="home-value-item">
                <span className="home-value-check">✓</span>
                <div>
                  <h3>Du får professionell hjälp med att utforma reklam.</h3>
                  <p>Du behöver inte oroa dig för brist på idéer eller tekniska fel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hem-bonusar" className="home-bonus-section">
        <div className="scroll-dot scroll-dot-dark">↓</div>
        <div className="home-bonus-section-container">
          <div className="section-eyebrow">DESSUTOM</div>
          <h2 className="home-bonus-title">
            Det Är Inte Allt!
            <br />
            Det Finns Bonusar
          </h2>
          <p className="home-bonus-intro">
            För att uppmuntra dig att testa våra utskrifter och spara pengar
            <br />
            har vi förberett följande:
          </p>

          <div className="home-bonus-grid">
            <div className="home-bonus-item">
              <div className="home-bonus-top">
                <span className="home-bonus-number">1</span>
                <span className="home-bonus-label">BONUS</span>
              </div>
              <h3>10% RABATT.</h3>
              <p>Få rabatt på din första beställning hos oss.</p>
            </div>

            <div className="home-bonus-item">
              <div className="home-bonus-top">
                <span className="home-bonus-number">2</span>
                <span className="home-bonus-label">BONUS</span>
              </div>
              <h3>GRATIS PROVER</h3>
              <p>Är du osäker på om det är det du letar efter? Hör av dig till oss så hjälper vi dig.</p>
            </div>
          </div>

          <div className="home-bonus-actions">
            <button className="cta">FÅ OFFERT</button>
            <button className="cta">RING OSS</button>
          </div>
        </div>
      </section>

      <section id="hem-varfor-billigt" className="home-cheap-section">
        <div className="scroll-dot scroll-dot-dark">↓</div>
        <div className="home-cheap-section-container">
          <div className="home-cheap-layout">
            <div className="home-cheap-copy">
              <div className="section-eyebrow">VARFÖR</div>
              <h2 className="home-cheap-title">
                Är Det Så
                <br />
                Billigt?
              </h2>

              <div className="home-cheap-actions">
                <button className="cta">FÅ OFFERT</button>
                <button className="cta">RING OSS</button>
              </div>

              <img
                className="home-cheap-arrow"
                src="/images/arrows/pil-billigt-offert-novatryck-stockholm.svg"
                alt="Pil mot offertknappar för Novatryck i Stockholm"
                loading="lazy"
              />
            </div>

            <div className="home-cheap-list">
              <div className="home-cheap-item">
                <span className="home-cheap-check">✓</span>
                <div>
                  <h3>Vi vill hjälpa dig.</h3>
                  <p>Vi vet att det kan vara frustrerande att leta efter ett tryckeri, därför levererar vi banderoller som passar perfekt till ditt behov.</p>
                </div>
              </div>

              <div className="home-cheap-item">
                <span className="home-cheap-check">✓</span>
                <div>
                  <h3>Vi vill presentera oss.</h3>
                  <p>Många företag erbjuder reklamtryck – vilket ska man välja? Med vårt erbjudande och vår service vill vi visa dig vår inställning och vilken kvalitet du kan förvänta dig. Du kommer att se att det är något helt annat än det du är van vid.</p>
                </div>
              </div>

              <div className="home-cheap-item">
                <span className="home-cheap-check">✓</span>
                <div>
                  <h3>För vi har uppdrag.</h3>
                  <p>Vårt mål är att spara tid åt dig genom att leverera högkvalitativa reklamtryck i Stockholm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hem-tillvaxt" className="home-growth-section">
        <div className="scroll-dot">↓</div>
        <div className="home-growth-container">
          <div className="home-growth-card home-growth-card-clean">
            <img
              className="home-growth-card-bg-image"
              src="/images/cards/tillvaxtkort-foretag-novatryck-stockholm.png"
              alt="Tillväxtkort för företag från Novatryck i Stockholm"
              loading="lazy"
            />
            <div className="home-growth-card-copy home-growth-card-copy-overlay">
              <div className="section-eyebrow">KOM IGÅNG</div>
              <h2 className="home-growth-card-title">
                Vi Hjälper Företag
                <br />
                Att Växa Snabbare
              </h2>
              <div className="home-growth-actions">
                <button className="cta">FÅ OFFERT</button>
                <button className="cta">RING OSS</button>
              </div>
            </div>
          </div>

          <div className="home-growth-bottom">
            <div className="home-growth-intro">
              <div className="section-eyebrow home-growth-eyebrow">KANSKE VET DU INTE</div>
              <h2 className="home-growth-title">
                Är Det Lönsamt
                <br />
                För Dig?
              </h2>
            </div>

            <div className="home-growth-facts">
              <h3>SE NÅGRA FAKTA</h3>

              <div className="home-growth-fact">
                <img
                  className="home-growth-fact-icon"
                  src="/images/facts/lagt-pris-ikon-novatryck.svg"
                  alt="Ikon för lågt pris på tryck från Novatryck"
                  loading="lazy"
                />
                <p>Den exceptionella tryckkvaliteten garanterar en långvarig reklameffekt till <strong>ett lågt pris.</strong></p>
              </div>

              <div className="home-growth-fact">
                <img
                  className="home-growth-fact-icon"
                  src="/images/facts/fortroende-ikon-novatryck.svg"
                  alt="Ikon för professionellt tryck som skapar förtroende"
                  loading="lazy"
                />
                <p>Professionella utskrifter <strong>skapar förtroende</strong> för ditt varumärke.</p>
              </div>

              <div className="home-growth-fact">
                <img
                  className="home-growth-fact-icon"
                  src="/images/facts/snabb-utskrift-ikon-novatryck.svg"
                  alt="Ikon för snabb utskrift från Novatryck"
                  loading="lazy"
                />
                <p>Snabb utskrift <strong>sparar</strong> tid och påskyndar dina projekt.</p>
              </div>
            </div>
          </div>

          <div className="home-growth-team">
            <div className="home-growth-team-header">
              <div className="section-eyebrow home-growth-eyebrow">KANSKE VET DU INTE</div>
              <h2 className="home-growth-team-title">
                Är Det Lönsamt
                <br />
                För Dig?
              </h2>
            </div>

            <div className="home-growth-team-grid">
              <div className="home-growth-person-card">
                <img
                  className="home-growth-person-photo"
                  src="/images/team/alexander-hansson-kundservice-novatryck.png"
                  alt="Alexander Hansson, kundservice på Novatryck i Stockholm"
                  loading="lazy"
                />
                <h3>Alexander Hansson</h3>
                <p>Kundservice</p>
              </div>

              <div className="home-growth-person-card">
                <img
                  className="home-growth-person-photo"
                  src="/images/team/lukas-stolarski-produktion-foliering-novatryck.png"
                  alt="Lukas Stolarski, produktion och foliering på Novatryck i Stockholm"
                  loading="lazy"
                />
                <h3>Lukas Stolarski</h3>
                <p>Produktion / Foliering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hem-vanliga-fragor" className="home-faq-section">
        <div className="scroll-dot scroll-dot-dark">↓</div>
        <div className="home-faq-container">
          <h2 className="home-faq-title">Har Du Frågor?</h2>
          <p className="home-faq-intro">
            Kolla listan med vanliga frågor. Kanske hittar du svaret där.
            <br />
            Om inte, skriv till <strong>kontakt@novatryck.se</strong>
          </p>

          <div className="home-faq-list">
            <div className="home-faq-item">
              <h3>Hur länge måste jag vänta på mitt paket?</h3>
              <p><span className="home-faq-dot">✚</span> Beroende på orderstorleken 1–3 arbetsdagar. Vi levererar</p>
            </div>

            <div className="home-faq-item">
              <h3>Kommer jag att få en faktura ?</h3>
              <p><span className="home-faq-dot">✚</span> Ja, du får det. Kom bara ihåg att ange dina uppgifter vid köpet.</p>
            </div>

            <div className="home-faq-item">
              <h3>Hur gör man en beställning?</h3>
              <p><span className="home-faq-dot">✚</span> Klicka här för en steg-för-steg-guide om hur du beställer trycksaker.</p>
            </div>

            <div className="home-faq-item">
              <h3>Är du osäker på om rollup-banderollerna kommer att stämma överens med designen?</h3>
              <p><span className="home-faq-dot">✚</span> Slut med besvikelser på grund av felaktiga utskrifter och slösade budgetar.</p>
            </div>

            <div className="home-faq-item">
              <h3>Hur snabb är banderollutskriften i Stockholm?</h3>
              <p><span className="home-faq-dot">✚</span> Vår tryckeri i Stockholm levererar beställningar inom 24 timmar, vilket</p>
            </div>

            <div className="home-faq-item">
              <h3>Kommer banderollernas finish att ge ett professionellt intryck?</h3>
              <p><span className="home-faq-dot">✚</span> Vi erbjuder precisa alternativ, såsom öljor och tunnlar, för ett elegant</p>
            </div>
          </div>
        </div>
      </section>

      <section id="hem-kontaktband" className="contact-band-section">
        
        <div className="contact-band-container">
          <div className="contact-band">
            <div className="contact-band-copy">
              <h2>
                Har du fler frågor
                <br />
                eller är nåt oklart?
              </h2>
              <button className="contact-band-btn">SKRIV</button>
            </div>
            <div className="contact-band-art contact-band-art-image-only">
              <img
                className="contact-band-main-image"
                src="/images/contact/kontaktkort-fragor-novatryck-stockholm.png"
                alt="Kontaktkort för frågor till Novatryck i Stockholm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Hem;
