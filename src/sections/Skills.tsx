import { SkillOrb } from '../components/SkillOrb';
import { skills } from '../data/content';

export const Skills = () => (
  <section
    data-snap-section
    data-section="skills"
    className="panel flex flex-col items-center justify-center gap-8 text-center"
  >
    <div className="space-y-3">
      <h2 className="font-display text-3xl text-[color:var(--text-primary)] md:text-4xl">Progression d’un étudiant orienté Data</h2>
    </div>
    <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--text-muted)]">Survole un skill pour voir mon niveau</p>
    <div className="grid gap-6 md:grid-cols-4 max-w-4xl mx-auto">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center gap-2">
          <SkillOrb
            name={skill.name}
            progress={skill.progress}
            accent={skill.accent}
            icon={<skill.icon />}
          />
          <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">{skill.status}</span>
        </div>
      ))}
    </div>
  </section>
);
