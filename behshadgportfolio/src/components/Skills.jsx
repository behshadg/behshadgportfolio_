function Skills({ skillGroups }) {
  return (
    <section id="skills" className="section-shell mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="section-heading">
        <span className="eyebrow">Skills</span>
        <h2 className="font-display text-4xl text-white sm:text-5xl">
          Tools I like building with.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="feature-card">
            <h3 className="font-display text-2xl text-white">{group.title}</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="stack-chip">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
