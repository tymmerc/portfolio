import { useState } from 'react';
import { FiExternalLink, FiAward, FiRss } from 'react-icons/fi';
import { veille, certifications } from '../data/content';

const tabs = ['Veille technologique', 'Certifications'] as const;

export const VeilleCerts = () => {
  const [tab, setTab] = useState(0);

  return (
    <section
      data-snap-section
      data-section="veille"
      className="panel flex flex-col items-center justify-start gap-8 pt-20 md:pt-24"
    >
      <div className="space-y-2 text-center">
        <h2 className="font-display text-3xl text-[color:var(--text-primary)] md:text-4xl">
          Veille & Certifications
        </h2>
        <p className="text-sm text-[color:var(--text-muted)]">
          Stratégie de veille et certifications obtenues
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
      <div className="w-full max-w-4xl">
        {tab === 0 ? <VeilleTab /> : <CertsTab />}
      </div>
    </section>
  );
};

function VeilleTab() {
  return (
    <div className="space-y-6">
      {/* Strategy card */}
      <div className="fade-up surface p-6 space-y-4">
        <div className="flex items-center gap-3">
          <FiRss className="text-xl text-[color:var(--accent)]" />
          <h3 className="font-display text-lg text-[color:var(--text-primary)]">
            {veille.theme}
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-[color:var(--text-muted)]">
          {veille.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {veille.stack.split('·').map((tech) => (
            <span
              key={tech.trim()}
              className="rounded-full border border-[color:var(--panel-border)] px-2.5 py-0.5 text-[10px] text-[color:var(--text-muted)]"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
        <a
          href={veille.appUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--accent)] transition hover:underline"
        >
          Voir l&apos;application <FiExternalLink className="text-xs" />
        </a>
      </div>

      {/* Sources grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {veille.sources.map((source, i) => (
          <article
            key={source.name}
            className="fade-up surface p-4 space-y-1"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[color:var(--text-primary)]">
                {source.name}
              </span>
              <span className="rounded-full border border-[color:var(--panel-border)] px-2 py-0.5 text-[9px] uppercase tracking-wider text-[color:var(--text-muted)]">
                {source.type}
              </span>
            </div>
            <p className="text-xs text-[color:var(--text-muted)]">{source.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function CertsTab() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {certifications.map((cert, i) => (
        <article
          key={cert.name}
          className="fade-up surface flex items-center gap-4 p-5"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent)]/10">
            <FiAward className="text-lg text-[color:var(--accent)]" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[color:var(--text-primary)]">
              {cert.name}
            </h4>
            <p className="text-xs text-[color:var(--text-muted)]">{cert.issuer}</p>
          </div>
          <span className="ml-auto rounded-full border border-[color:var(--panel-border)] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[color:var(--text-muted)]">
            {cert.status === 'obtained' ? 'Obtenue' : 'En cours'}
          </span>
        </article>
      ))}
    </div>
  );
}
