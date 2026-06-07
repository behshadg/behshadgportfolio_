import { FiArrowUpRight, FiFileText } from 'react-icons/fi';

function Resume({ resume }) {
  return (
    <section id="resume" className="section-shell mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="section-heading">
        <span className="eyebrow">Resume</span>
        <h2 className="font-display text-4xl text-white sm:text-5xl">
          Quick access to the documents that support the work.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {resume.cards.map((card) => (
          <article key={card.title} className="feature-card">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
              <FiFileText size={22} />
            </div>
            <h3 className="mt-6 font-display text-3xl text-white">
              {card.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-stone-300">
              {card.description}
            </p>
            <a
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="button-secondary mt-8 inline-flex"
            >
              {card.actionLabel}
              <FiArrowUpRight />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Resume;
