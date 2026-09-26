import { heroSentences } from '../data/content';
import { useTypewriterCycle } from '../hooks/useTypewriterCycle';

const scrollToSection = (id: string) => {
  const target = document.querySelector(`[data-section="${id}"]`);
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const Hero = () => {
  const text = useTypewriterCycle(heroSentences);

  return (
    <section
      data-snap-section
      data-section="hero"
      className="panel flex flex-col items-center justify-center gap-10 text-center px-4"
    >
      <div className="relative flex w-full max-w-4xl justify-center rounded-[32px] border border-[color:var(--panel-border)] bg-[color:var(--panel)] py-14 shadow-panel">
        <div className="relative flex flex-col items-center gap-4">
          <img
            src="/cat.jpg"
            alt="Tyméo MERCIER"
            className="h-24 w-24 rounded-full object-cover shadow-panel ring-1 ring-[color:var(--panel-border)]"
          />
          <p className="text-xs uppercase tracking-[0.6em] text-[color:var(--text-muted)]">Développeur freelance · En formation</p>
          <h1 className="font-display text-4xl leading-tight text-[color:var(--text-primary)] md:text-6xl">
            Hi, I’m Tyméo MERCIER
          </h1>
          <p className="font-mono text-[color:var(--accent)] text-lg md:text-2xl">{text || '\u00A0'}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollToSection('projects')}
          className="rounded-full border border-[color:var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--text-primary)] transition hover:bg-[color:var(--accent)]/10"
        >
          Voir les projets
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('contact')}
          className="rounded-full border border-[color:var(--panel-border)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--text-muted)] transition hover:text-[color:var(--text-primary)]"
        >
          Contact
        </button>
      </div>
    </section>
  );
};
