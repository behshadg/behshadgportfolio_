function About({ about }) {
  return (
    <section id="about" className="section-shell mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="section-heading">
        <span className="eyebrow">About</span>
        <h2 className="font-display text-4xl text-white sm:text-5xl">
          Built to look sharper and stay easier to maintain.
        </h2>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="info-panel space-y-6">
          <p className="text-xl leading-8 text-stone-100/95">{about.intro}</p>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-stone-300">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-4">
          {about.pillars.map((pillar) => (
            <article key={pillar.title} className="feature-card">
              <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/75">
                {pillar.title}
              </p>
              <p className="mt-3 text-base leading-7 text-stone-200">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
