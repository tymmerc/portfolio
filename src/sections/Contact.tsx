import { contact } from '../data/content';

export const Contact = () => (
  <section
    data-snap-section
    data-section="contact"
    className="panel flex flex-col items-center justify-center gap-6 text-center"
  >
    <h2 className="font-display text-3xl text-[color:var(--text-primary)] md:text-4xl">On construit ensemble ?</h2>
    <p className="max-w-2xl text-[color:var(--text-muted)]">
      Toujours partant pour parler d’automatisation, de data ou d'IA.
    </p>
    <a
      href={`mailto:${contact.email}`}
      className="inline-flex w-fit items-center rounded-full border border-[color:var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--text-primary)] transition hover:bg-[color:var(--accent)]/10"
    >
      {contact.email}
    </a>
  </section>
);
