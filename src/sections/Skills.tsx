import { SkillOrb } from '../components/SkillOrb';
import { skills, aiTools } from '../data/content';

export const Skills = () => (
  <section
    data-snap-section
    data-section="skills"
    className="panel flex flex-col items-center justify-center gap-5 text-center"
  >
    <h2 className="font-display text-3xl text-[color:var(--text-primary)] md:text-4xl">Stack technique</h2>
    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--text-muted)]">Technologies et niveaux de maîtrise</p>
    <div className="grid grid-cols-4 gap-4 md:grid-cols-6 max-w-3xl mx-auto">
      {skills.map((skill) => (
        <SkillOrb
          key={skill.name}
          name={skill.name}
          progress={skill.progress}
          accent={skill.accent}
          icon={<skill.icon />}
        />
      ))}
    </div>

    {/* AI & Tools */}
    <div className="w-full max-w-3xl space-y-3">
      <h3 className="font-display text-lg text-[color:var(--text-primary)]">IA & Automatisation</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {aiTools.map((tool) => (
          <span
            key={tool.name}
            className="surface rounded-full px-4 py-1.5 text-xs font-medium text-[color:var(--text-primary)]"
            title={tool.desc}
          >
            {tool.name}
          </span>
        ))}
      </div>
    </div>
  </section>
);
