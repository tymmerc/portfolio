import { roadmap } from '../data/content';

export const Roadmap = () => (
  <section
    data-snap-section
    data-section="roadmap"
    className="panel flex flex-col items-center justify-center gap-10 text-center"
  >
    <div className="space-y-3">
      <h2 className="font-display text-3xl text-[color:var(--text-primary)] md:text-4xl">Plan pour l'avenir</h2>
    </div>
    <div className="space-y-6 w-full max-w-4xl mx-auto">
      {roadmap.map((step, index) => (
        <div key={step.label} className="flex flex-col items-center gap-4">
          <div
            className={`surface w-full p-6 ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">Étape {index + 1}</p>
            <h3 className="mt-2 font-display text-2xl text-[color:var(--text-primary)]">{step.label}</h3>
            <p className="mt-3 text-[color:var(--text-muted)]">{step.detail}</p>
          </div>
          {index < roadmap.length - 1 && (
            <div className="flex flex-col items-center text-[color:var(--accent)]">
              <span className="text-xs uppercase tracking-[0.4em] text-[color:var(--text-muted)]">ensuite</span>
              <svg className="mt-1 h-10 w-10 text-[color:var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v14m0 0-5-5m5 5 5-5" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);
