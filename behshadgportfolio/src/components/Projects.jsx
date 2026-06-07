import { useMemo, useState } from 'react';
import { FiArrowUpRight, FiCode } from 'react-icons/fi';

function Projects({ projects }) {
  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    [projects]
  );
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="section-shell mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="section-heading">
        <span className="eyebrow">Projects</span>
        <h2 className="font-display text-4xl text-white sm:text-5xl">
          Featured work with room to grow.
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
          The project section now runs from a single data file, so adding new
          work later is much easier than manually editing repeated layout code.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              className={isActive ? 'chip-active' : 'chip'}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <article key={project.title} className="project-card">
            <div
              className={`project-glow bg-gradient-to-br ${project.accent}`}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-100/75">
                    {project.category}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-lg leading-8 text-stone-100/90">
                {project.summary}
              </p>
              <p className="mt-4 text-base leading-7 text-stone-300">
                {project.details}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="stack-chip">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  Live Demo
                  <FiArrowUpRight />
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary"
                >
                  Source Code
                  <FiCode />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
