import { FiArrowDownRight, FiDownload } from 'react-icons/fi';

function Home({ hero, stats }) {
  return (
    <section
      id="home"
      className="section-shell mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-24 lg:pt-24"
    >
      <div className="animate-rise space-y-8">
        <div className="space-y-5">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            {hero.name}
          </h1>
          <p className="max-w-2xl text-xl font-medium text-stone-100/90 sm:text-2xl">
            {hero.title}
          </p>
          <p className="max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
            {hero.summary}
          </p>
          <p className="max-w-2xl text-sm uppercase tracking-[0.22em] text-cyan-200/75">
            {hero.focus}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a href={hero.primaryCta.href} className="button-primary">
            {hero.primaryCta.label}
            <FiArrowDownRight />
          </a>
          <a
            href={hero.secondaryCta.href}
            target="_blank"
            rel="noreferrer"
            className="button-secondary"
          >
            {hero.secondaryCta.label}
            <FiDownload />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="info-panel">
              <p className="font-display text-3xl text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-stone-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-float">
        <div className="hero-card">
          <p className="text-sm uppercase tracking-[0.26em] text-cyan-200/80">
            {hero.panelTitle}
          </p>
          <ul className="mt-6 space-y-4">
            {hero.panelItems.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 border-b border-white/10 pb-4 text-stone-200 last:border-b-0 last:pb-0"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-300 to-sky-500" />
                <span className="leading-7">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
