export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <a className="brand brand--footer" href="#home">
          <span className="brand__mark" aria-hidden="true">
            <img src="/logo-mark.svg" alt="" />
          </span>
          <span className="brand__text">
            <strong>uzair abdul khalique law</strong>
            <small>& Co</small>
          </span>
        </a>
        <p>Clear counsel. Professional court representation.</p>
        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#practice">Practice Areas</a>
          <a href="#record">Record</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>
          &copy; <span id="year">2026</span> uzair abdul khalique law assocaites & Co. All rights reserved.
        </p>
        <p>General information only. This website does not constitute legal advice.</p>
      </div>
    </footer>
  );
}



