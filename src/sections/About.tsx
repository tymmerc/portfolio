import { aboutText } from '../data/content';

export const About = () => (
  <section
    data-snap-section
    data-section="about"
    className="panel flex flex-col items-center justify-center gap-6 text-center"
  >
    <img
      src="/cat.jpg"
      alt="Tyméo MERCIER"
      className="h-32 w-32 rounded-full object-cover shadow-panel ring-1 ring-[color:var(--panel-border)] md:h-40 md:w-40"
    />
    <h2 className="font-display text-3xl text-[color:var(--text-primary)] md:text-4xl">Qui suis-je ?</h2>
    <p className="max-w-3xl text-lg text-[color:var(--text-muted)]">{aboutText}</p>
  </section>
);
