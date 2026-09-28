interface PracticeCardProps {
  num: string;
  title: string;
  desc: string;
  href: string;
  label: string;
  delay?: number;
}

export default function PracticeCard({ num, title, desc, href, label, delay = 0 }: PracticeCardProps) {
  return (
    <article className={`practice-card reveal${delay ? " reveal--delayed" : ""}`} data-delay={delay || undefined}>
      <div className="practice-card__top">
        <span>{num}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 3v18M5 7h14M7 7l-3 6h6L7 7zm10 0-3 6h6l-3-6zM4 13c0 2 1.3 3.5 3 3.5S10 15 10 13m4 0c0 2 1.3 3.5 3 3.5s3-1.5 3-3.5" />
        </svg>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <a href={href} aria-label={label}>
        {label} <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
