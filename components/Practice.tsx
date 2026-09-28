import PracticeCard from "./PracticeCard";

export default function Practice() {
  return (
    <section className="section practice" id="practice">
      <div className="container">
        <div className="practice__header">
          <div className="section-heading section-heading--light reveal">
            <p className="section-label">Practice areas</p>
            <h2>Court representation across three core areas of law.</h2>
          </div>
          <p className="practice__intro reveal" data-delay="1">
            Advocate adv uzair khalique represents clients before courts in criminal, civil, and family matters,
            with each case approached according to its facts and legal requirements.
          </p>
        </div>

        <div className="practice__grid">
          <PracticeCard
            num="01 / Criminal"
            title="Criminal Law"
            desc="Court representation for clients facing criminal allegations, proceedings, or related legal disputes."
            href="#contact"
            label="Discuss a criminal matter"
          />
          <PracticeCard
            num="02 / Civil"
            title="Civil Law"
            desc="Court representation and advocacy for civil claims, contractual matters, disputes, and other legal proceedings."
            href="#contact"
            label="Discuss a civil matter"
            delay={1}
          />
          <PracticeCard
            num="03 / Family"
            title="Family Law"
            desc="Sensitive court representation for family-related concerns, disputes, separation matters, and related proceedings."
            href="#contact"
            label="Discuss a family matter"
            delay={2}
          />
        </div>
      </div>
    </section>
  );
}

