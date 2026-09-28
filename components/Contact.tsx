export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__pattern" aria-hidden="true"></div>
      <div className="container contact__grid">
        <div className="contact__intro reveal">
          <p className="section-label">Start a conversation</p>
          <h2>Need legal guidance?</h2>
          <p>
            Contact uzair abdul khalique law assocaites & Co to discuss your matter and arrange a consultation with Advocate
            adv uzair khalique.
          </p>

          <div className="contact__links">
            <a href="tel:+923133295901">
              <span className="contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>
                <small>Call or WhatsApp</small>
                <strong>0313 3295 901</strong>
              </span>
              <svg className="contact__arrow" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <a href="mailto:advcoateuzairkhalique@gmail.com">
              <span className="contact__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </span>
              <span>
                <small>Email</small>
                <strong>advcoateuzairkhalique@gmail.com</strong>
              </span>
              <svg className="contact__arrow" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="contact__card reveal" data-delay="1">
          <div className="contact__card-top">
            <span>Confidential consultation</span>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <h3>Speak with Advocate adv uzair khalique.</h3>
          <p>
            Use the phone number or email address above to discuss your legal matter directly.
          </p>
          <a className="button button--gold" href="https://wa.me/923133295901" target="_blank" rel="noopener noreferrer">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}


