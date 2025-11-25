import { FiGithub } from 'react-icons/fi';
import { projects } from '../data/content';

export const Projects = () => (
  <section
    data-snap-section
    data-section="projects"
    className="panel flex flex-col items-center justify-center gap-8 text-center"
  >
    <div className="space-y-3">
      <h2 className="font-display text-3xl text-[color:var(--text-primary)] md:text-4xl">Projets étudiants & pro</h2>
      <p className="text-sm text-[color:var(--text-muted)]">Certains projets sont encore en phase de finalisation.</p>
    </div>
    <div className="grid gap-5 md:grid-cols-2 max-w-5xl mx-auto">
      {projects.map((project, index) => (
        <article
          key={project.title}
          className="fade-up surface p-5"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">{project.stack}</p>
          <h3 className="mt-3 font-display text-2xl text-[color:var(--text-primary)]">{project.title}</h3>
          <p className="mt-3 text-[color:var(--text-muted)]">{project.description}</p>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-[color:var(--text-muted)]">
            {project.status && <span className="rounded-full border border-[color:var(--panel-border)] px-3 py-1 uppercase tracking-[0.2em] text-xs">{project.status}</span>}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--panel-border)] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)] transition hover:text-[color:var(--text-primary)]"
              >
                <FiGithub /> Code
              </a>
            ) : (
              <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">Privé</span>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);
