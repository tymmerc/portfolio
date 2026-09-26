import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import {
  projects,
  statusLabels,
  typeLabels,
  onlinePresence,
} from '../data/content';
import type { Project, ProjectStatus } from '../data/content';

const splitStack = (stack: string) =>
  stack.split('·').map((t) => t.trim()).filter(Boolean);

const statusDot: Record<ProjectStatus, string> = {
  done: '#34d399',
  wip: '#fbbf24',
  paused: '#71717a',
  active: '#60a5fa',
};

const tabs = ['Projets', 'Présence en ligne'] as const;

const allProjects = projects;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const techs = splitStack(project.stack);

  return (
    <article
      className="fade-up surface flex w-[320px] shrink-0 flex-col gap-2 p-4 transition-transform duration-300 hover:-translate-y-1 md:w-[360px]"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-display text-lg text-[color:var(--text-primary)]">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
              {typeLabels[project.type]}
            </span>
            {project.period && (
              <span className="text-[10px] text-[color:var(--text-muted)]">
                · {project.period}
              </span>
            )}
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 rounded-full border border-[color:var(--panel-border)] px-2.5 py-1">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: statusDot[project.status] }}
          />
          <span className="text-[10px] uppercase tracking-wider text-[color:var(--text-muted)]">
            {statusLabels[project.status]}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
        {project.description}
      </p>

      {/* Footer: stack + links + productions */}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap gap-1.5">
          {techs.map((tech) => (
            <span
              key={`${project.title}-${tech}`}
              className="rounded-full border border-[color:var(--panel-border)] px-2.5 py-0.5 text-[10px] text-[color:var(--text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {project.productions &&
            project.productions
              .filter((p) => p.url !== '#' && p.url !== project.github && p.url !== project.link)
              .map((prod) => (
                <a
                  key={prod.url}
                  href={prod.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] text-[color:var(--accent)] transition hover:underline"
                  title={prod.label}
                >
                  {prod.label}
                </a>
              ))}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[color:var(--text-muted)] transition hover:text-[color:var(--accent)]"
              aria-label={`Code source de ${project.title}`}
            >
              <FiGithub />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[color:var(--text-muted)] transition hover:text-[color:var(--accent)]"
              aria-label={`Voir ${project.title} en ligne`}
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export const Projects = () => {
  const [tab, setTab] = useState(0);
  const rowRef = useRef<HTMLDivElement | null>(null);

  // Capture wheel events on the projects row in CAPTURE phase, before the
  // parent useScrollSnap handler can swallow them. This guarantees the
  // horizontal scroll wins even if the parent listens on the container.
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return undefined;

    const onWheel = (event: WheelEvent) => {
      const absX = Math.abs(event.deltaX);
      const absY = Math.abs(event.deltaY);
      const intent = absY > absX ? event.deltaY : event.deltaX;
      if (intent === 0) return;
      const { scrollLeft, scrollWidth, clientWidth } = row;
      const canRight = scrollLeft + clientWidth < scrollWidth - 1;
      const canLeft = scrollLeft > 1;
      if (intent > 0 && canRight) {
        event.preventDefault();
        event.stopPropagation();
        row.scrollLeft += intent;
      } else if (intent < 0 && canLeft) {
        event.preventDefault();
        event.stopPropagation();
        row.scrollLeft += intent;
      }
    };

    row.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      row.removeEventListener('wheel', onWheel);
    };
  }, [tab]);

  return (
    <section
      data-snap-section
      data-section="projects"
      className="panel flex flex-col items-center justify-start gap-4 pt-20 md:pt-24"
    >
      <div className="space-y-2 text-center">
        <h2 className="font-display text-3xl text-[color:var(--text-primary)] md:text-4xl">
          Projets
        </h2>
        <p className="text-sm text-[color:var(--text-muted)]">
          Réalisations professionnelles, scolaires et personnelles
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 rounded-full border border-[color:var(--panel-border)] p-1">
        {tabs.map((label, i) => (
          <button
            key={label}
            onClick={() => setTab(i)}
            className={`rounded-full px-5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 ${
              tab === i
                ? 'bg-[color:var(--accent)] text-[color:var(--bg)] shadow-sm'
                : 'text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === 0 ? (
        <div className="w-full">
          <p className="mb-3 text-center text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
            Scroll vers la droite pour tout voir
          </p>
          <div
            ref={rowRef}
            data-scrollable-x
            className="flex w-full gap-4 overflow-x-auto overflow-y-hidden px-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overscrollBehaviorX: 'contain' }}
          >
            {allProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
            <div className="shrink-0 w-2" aria-hidden />
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <div className="grid gap-3 sm:grid-cols-2">
            {onlinePresence.map((item, i) => (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="fade-up surface flex flex-col gap-2 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span className="font-display text-sm text-[color:var(--text-primary)]">
                  {item.platform}
                </span>
                <p className="text-xs leading-relaxed text-[color:var(--text-muted)]">
                  {item.description}
                </p>
                <span className="mt-auto text-[10px] text-[color:var(--accent)] truncate">
                  {item.url.replace('https://', '')}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
