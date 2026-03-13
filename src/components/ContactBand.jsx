import React from 'react';

function ContactBand({
  id,
  title,
  buttonLabel = 'SKRIV',
  imageSrc,
  imageAlt,
  sectionClassName = 'contact-band-section',
}) {
  return (
    <section id={id} className={sectionClassName}>
      <div className="contact-band-container">
        <div className="contact-band">
          <div className="contact-band-copy">
            <h2>{title}</h2>
            <button className="contact-band-btn">{buttonLabel}</button>
          </div>
          <div className="contact-band-art contact-band-art-image-only">
            <img className="contact-band-main-image" src={imageSrc} alt={imageAlt} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactBand;
