export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__glow hero__glow--one" aria-hidden="true"></div>
      <div className="hero__glow hero__glow--two" aria-hidden="true"></div>
      <div className="hero__pattern" aria-hidden="true"></div>

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow reveal"><span aria-hidden="true"></span> Professional court representation</p>
          <h1 className="hero__title reveal" data-delay="1">
            Adv.<em>uzair khalique</em>
          </h1>
          <p className="hero__intro reveal" data-delay="2">
            Clear counsel and dedicated representation before the courts for criminal, civil, and family matters.
          </p>
          <p className="hero__description reveal" data-delay="3">
            uzair abdul khalique law assocaites & Co focuses on understanding each client&rsquo;s situation, explaining the
            available options, and representing clients before courts through every stage of a legal matter.
          </p>

          <div className="hero__actions reveal" data-delay="4">
            <a className="button button--primary" href="tel:+923133295901">
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92z" />
              </svg>
              Call now
            </a>
            <a className="button button--secondary" href="#practice">
              Explore practice areas
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <div className="hero__availability reveal" data-delay="5">
            <span className="availability-dot" aria-hidden="true"></span>
            <span>Contact for a legal consultation</span>
          </div>
        </div>

        <div className="hero__visual reveal" data-delay="2" aria-label="Advocate adv uzair khalique">
          <div className="justice-card">
            <div className="justice-card__line"></div>
            <div className="justice-card__seal" aria-hidden="true">
              <svg viewBox="0 0 240 240">
                <circle cx="120" cy="120" r="112" fill="none" stroke="currentColor" strokeWidth="1" opacity=".25" />
                <circle cx="120" cy="120" r="94" fill="none" stroke="currentColor" strokeWidth="1" opacity=".14" />
                <path d="M120 48v126M77 174h86M61 76h118M74 76l-27 55h54L74 76zm92 0-27 55h54l-27-55zM47 131c0 15 12 27 27 27s27-12 27-27m28 0c0 15 12 27 27 27s27-12 27-27" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M106 48h28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <p className="justice-card__kicker">uzair abdul khalique law assocaites & Co</p>
            <h2>Justice with<br />clarity and purpose.</h2>
            <div className="justice-card__footer">
              <span>Advocacy</span>
              <span>Integrity</span>
              <span>Resolution</span>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-card__monogram" aria-hidden="true">UP</div>
            <div>
              <strong>uzair abdul khalique law</strong>
              <span>Advocate</span>
            </div>
          </div>

          <div className="hero-stat-card">
            <strong>200<span>+</span></strong>
            <span>Cases handled</span>
          </div>
        </div>
      </div>

      <div className="container hero__foot reveal" data-delay="5">
        <p>Scroll to learn more</p>
        <span aria-hidden="true"></span>
        <p>Available across criminal, civil, and family matters</p>
      </div>
    </section>
  );
}

