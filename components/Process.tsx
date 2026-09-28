export default function Process() {
  return (
    <section className="section process">
      <div className="container process__grid">
        <div className="process__visual reveal">
          <div className="process__monogram" aria-hidden="true">
            <span>UP</span>
          </div>
          <div className="process__quote">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M7 17h4V9H6v6h3m8-8h-4v8h5V9h-1" />
            </svg>
            <blockquote>
              Every legal matter deserves careful attention, honest advice, and focused representation before court.
            </blockquote>
          </div>
        </div>

        <div className="process__content">
          <div className="section-heading reveal">
            <p className="section-label">A considered approach</p>
            <h2>How the firm supports a client.</h2>
          </div>

          <ol className="process-list">
            {[
              {
                num: "01",
                title: "Understand the matter",
                desc: "Review the facts, concerns, documents, and desired outcome before determining the legal approach.",
              },
              {
                num: "02",
                title: "Explain the options",
                desc: "Present the relevant legal choices in clear language so the client can make an informed decision.",
              },
              {
                num: "03",
                title: "Represent in court",
                desc: "Prepare carefully, appear before the court, and present the client&rsquo;s position with professional focus.",
              },
            ].map((item, i) => (
              <li className="reveal" key={i} data-delay={i}>
                <span>{item.num}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
