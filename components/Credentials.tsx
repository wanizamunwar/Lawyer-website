export default function Credentials() {
  return (
    <section className="credentials" aria-label="Areas of legal practice">
      <div className="container credentials__grid">
        <div className="credential">
          <span>01</span>
          <strong>Criminal Law</strong>
        </div>
        <div className="credential">
          <span>02</span>
          <strong>Civil Law</strong>
        </div>
        <div className="credential">
          <span>03</span>
          <strong>Family Law</strong>
        </div>
        <div className="credential credential--quote">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M7 17h4V9H6v6h3m8-8h-4v8h5V9h-1" />
          </svg>
          <p>Court representation with clear, focused advocacy.</p>
        </div>
      </div>
    </section>
  );
}
