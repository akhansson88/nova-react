import React from 'react';

function PageHero({
  id,
  pageName,
  eyebrow,
  title,
  middleContent = null,
  primaryAction = 'FÅ OFFERT',
  secondaryAction = 'RING OSS',
  note,
  imageSrc,
  imageAlt,
}) {
  const eyebrowText = eyebrow ?? pageName;

  return (
    <section id={id} className="hero hero-home-with-image">
      <div className="scroll-dot">↓</div>
      <div>
        <div className="eyebrow">{eyebrowText}</div>
        <h1 className="headline">{title}</h1>

        {middleContent}

        <div className="cta-row">
          <button className="cta">{primaryAction}</button>
          <button className="cta">{secondaryAction}</button>
        </div>

        {note ? <div className="note">{note}</div> : null}
      </div>

      <div className="hero-home-image-wrap">
        <img className="hero-home-image" src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  );
}

export default PageHero;
