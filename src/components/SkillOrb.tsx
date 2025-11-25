import type { FC, ReactNode } from 'react';

type SkillOrbProps = {
  name: string;
  progress: number;
  icon: ReactNode;
  accent: string;
};

export const SkillOrb: FC<SkillOrbProps> = ({ name, progress, icon, accent }) => (
  <div className="group flex flex-col items-center gap-3 text-center">
    <div
      className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-[color:var(--panel-border)] bg-white/80 shadow-panel transition-transform duration-300 group-hover:-translate-y-1 dark:bg-[color:var(--panel)]/80"
      style={{ boxShadow: `0 15px 35px ${accent}1A` }}
    >
      <div className="text-4xl" style={{ color: accent }}>
        {icon}
      </div>
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[color:var(--text-primary)]/90 text-lg font-semibold text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {progress}%
      </div>
    </div>
    <p className="text-sm font-semibold text-[color:var(--text-primary)]">{name}</p>
  </div>
);
