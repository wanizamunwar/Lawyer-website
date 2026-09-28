export default function Record() {
  return (
    <section className="section record" id="record">
      <div className="container">
        <div className="record__header reveal">
          <div>
            <p className="section-label">Reported experience</p>
            <h2>
              A record built on<br />dedicated court advocacy.
            </h2>
          </div>
          <p>
            uzair abdul khalique law assocaites & Co has handled more than 200 legal matters, with a reported 90% success rate
            across represented cases.
          </p>
        </div>

        <div className="record__stats">
          <div className="record-stat reveal">
            <strong>
              <span className="counter" data-target="200">200</span>
              <b>+</b>
            </strong>
            <p>Cases handled</p>
          </div>
          <div className="record-stat reveal" data-delay="1">
            <strong>
              <span className="counter" data-target="90">90</span>
              <b>%</b>
            </strong>
            <p>Reported success rate</p>
          </div>
          <div className="record-stat record-stat--wide reveal" data-delay="2">
            <div className="areas-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 3v18M5 7h14M7 7l-3 6h6L7 7zm10 0-3 6h6l-3-6zM4 13c0 2 1.3 3.5 3 3.5S10 15 10 13m4 0c0 2 1.3 3.5 3 3.5s3-1.5 3-3.5" />
              </svg>
            </div>
            <div>
              <strong>3 core practice areas</strong>
              <p>Criminal, civil, and family law</p>
            </div>
          </div>
        </div>

        <p className="record__note">
          *Figures reflect the firm&rsquo;s reported case record. Past outcomes do not guarantee a similar result in
          any future matter.
        </p>
      </div>
    </section>
  );
}

