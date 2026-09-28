export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="section-heading reveal">
          <p className="section-label">About the advocate</p>
          <h2>Legal guidance shaped around your circumstances.</h2>
        </div>

        <div className="about__content reveal" data-delay="1">
          <p className="about__lead">
            Advocate adv uzair khalique provides legal services and represents clients before courts in criminal,
            civil, and family matters through uzair abdul khalique law assocaites & Co.
          </p>
          <p>
            The practice covers criminal, civil, and family cases, including court proceedings, with each matter
            approached according to its facts and legal requirements. Clients are given clear information about
            their options so they can make informed decisions at every stage.
          </p>

          <div className="about__values" aria-label="Professional principles">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3v18M5 7h14M7 7l-3 6h6L7 7zm10 0-3 6h6l-3-6zM4 13c0 2 1.3 3.5 3 3.5S10 15 10 13m4 0c0 2 1.3 3.5 3 3.5s3-1.5 3-3.5" />
                  </svg>
                ),
                title: "Clear advice",
                desc: "Straightforward explanations of complex legal issues.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
                title: "Court representation",
                desc: "Professional advocacy before courts with the client&rsquo;s interests in mind.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24">
                    <rect x="5" y="10" width="14" height="11" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
                  </svg>
                ),
                title: "Confidentiality",
                desc: "Client information and legal matters are handled with discretion.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3 4 6v6c0 5 3.4 8.2 8 9 4.6-.8 8-4 8-9V6l-8-3z" />
                    <path d="m8.5 12 2.2 2.2 4.8-5" />
                  </svg>
                ),
                title: "Honesty and ethics",
                desc: "Clients are advised honestly and professional duties are upheld.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="5" />
                    <path d="m8 12-2 9 6-3 6 3-2-9" />
                  </svg>
                ),
                title: "Professional conduct",
                desc: "Every matter is handled with respect, responsibility, and proper professional standards.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 9 6 6m0-6-6 6" />
                  </svg>
                ),
                title: "Refuse unlawful instructions",
                desc: "Unlawful or unethical instructions are not accepted.",
              },
            ].map((item, i) => (
              <div className="value" key={i}>
                <span aria-hidden="true">{item.icon}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a className="text-link" href="#contact">
            Discuss your legal matter
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


