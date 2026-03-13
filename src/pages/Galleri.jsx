import React, { useEffect, useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import ContactBand from '../components/ContactBand.jsx';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1605721911519-3d28c370184a?w=1200', alt: 'Projektbild 1' },
  { src: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=1200', alt: 'Projektbild 2' },
  { src: 'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=1200', alt: 'Projektbild 3' },
  { src: 'https://images.unsplash.com/photo-1542038784456-1ea8e9351505?w=1200', alt: 'Projektbild 4' },
];

function Galleri() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveImage(null);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <main className="page">
      <div className="container">
        <PageHero
          id="galleri-hero"
          pageName="GALLERI"
          title={(
            <>
              Tryckning, Dekaler,
              <br />
              Fönsterdekor, Bildekaler,
              <br />
              Banderoller, Roll-Up,
              <br />
              Bilfoliering
            </>
          )}
          note="MÖJLIGHET ATT KÖPA REDAN FRÅN 1 STYCK!"
        />
      </div>

      <section id="galleri-projekt" className="gallery-projects-section">
        <div className="scroll-dot">↓</div>
        <div className="gallery-projects-container">
          <div className="section-eyebrow">VÅRA</div>
          <h2 className="gallery-projects-title">
            Tidigare Utförda Projekt
            <br />
            Storformatsutskrift Och Visuell Reklam
          </h2>
          <p className="gallery-projects-intro">
            Vi har genomfört hundratals projekt åt företag över hela Sverige. Vi specialiserar oss på
            <br />
            <strong>fordonsdekor, reklamtryck, vinylfolie, helfoliering av bilar</strong> och komplett utomhus
            <br />
            - och inomhusreklam – från design till montering.
          </p>

          <div className="gallery-projects-grid">
            <div className="gallery-project-item">
              <div className="gallery-project-heading">
                <span className="gallery-project-check">✚</span>
                <h3>Bildekorationer – helfoliering av bilar</h3>
              </div>
              <p>Car wrapping / fordonsfoliering), partiell foliering, foliering av skåpbilar och flottor</p>
            </div>

            <div className="gallery-project-item">
              <div className="gallery-project-heading">
                <span className="gallery-project-check">✚</span>
                <h3>Fordonsdekor</h3>
              </div>
              <p>perforerad folie (one way vision), dekaler på rutor, magnetiska bilreklambanor</p>
            </div>

            <div className="gallery-project-item">
              <div className="gallery-project-heading">
                <span className="gallery-project-check">✚</span>
                <h3>Banderoller – PVC-bandroller, mesh-bandroller, blockout-bandroller</h3>
              </div>
              <p>stora fasadbanderoller, byggnadsställningsbanderoller</p>
            </div>

            <div className="gallery-project-item">
              <div className="gallery-project-heading">
                <span className="gallery-project-check">✚</span>
                <h3>Dekaler och fönsterfolier</h3>
              </div>
              <p>UV-dekaler, matt folie, spegelfolie (mirrored window film), one way vision-folie, butiksfönsterdekor</p>
            </div>
          </div>
        </div>
      </section>

      <section id="galleri-cta" className="gallery-cta-section">
        <div className="scroll-dot">↓</div>
        <div className="gallery-cta-container">
          <p className="gallery-cta-copy">
            Varje projekt gör vi individuellt – vi väljer de bästa materialen
            <br />
            <strong>(Avery Dennison, 3M, Orafol, Oracal, Arlon</strong> m.fl.), anpassar grafiken och ger råd
            <br />
            om lösningar som verkligen syns och lockar uppmärksamhet.
          </p>

          <p className="gallery-cta-copy gallery-cta-copy-secondary">
            Har du en idé till <strong>reklamtryck, fordonsdekor, banderoll</strong> eller <strong>butiksskyltning</strong>?
            <br />
            Vill du se hur ditt projekt skulle kunna se ut?
          </p>

          <div className="gallery-cta-actions">
            <button className="cta">FÅ OFFERT</button>
            <button className="cta">RING OSS</button>
          </div>
        </div>
      </section>

      <section id="galleri-bildvisning" className="gallery-showcase-section">
        <div className="scroll-dot">↓</div>
        <div className="gallery-showcase-container">
          <div className="gallery-showcase-header">
            <h2>Mina projekt</h2>
            <p>Klicka på en bild för att förstora den</p>
          </div>

          <div className="gallery-showcase-grid">
            {galleryImages.map((image) => (
              <button
                key={image.src}
                type="button"
                className="gallery-showcase-item"
                onClick={() => setActiveImage(image)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="galleri-kontaktband" className="contact-band-section reklam-contact-section">
        
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

      {activeImage && (
        <div className="gallery-lightbox active" onClick={() => setActiveImage(null)}>
          <button
            type="button"
            className="gallery-lightbox-close"
            aria-label="Stäng"
            onClick={() => setActiveImage(null)}
          >
            ×
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="gallery-lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

export default Galleri;
