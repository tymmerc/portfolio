import { aboutText } from '../data/content';

export const About = () => (
  <section
    data-snap-section
    data-section="about"
    className="panel flex flex-col items-center justify-center gap-6 text-center"
  >
    <h2 className="font-display text-3xl text-[color:var(--text-primary)] md:text-4xl">Qui suis-je ?</h2>
    <p className="max-w-3xl text-lg text-[color:var(--text-muted)]">{aboutText}</p>
  </section>
);
