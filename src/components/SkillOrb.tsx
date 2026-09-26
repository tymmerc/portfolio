import type { FC, ReactNode } from 'react';

type SkillOrbProps = {
  name: string;
  progress: number;
  icon: ReactNode;
  accent: string;
};

const RADIUS = 24;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const SkillOrb: FC<SkillOrbProps> = ({ name, progress, icon, accent }) => {
  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <div className="group flex flex-col items-center gap-1.5 text-center">
      <div className="relative flex h-16 w-16 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
        {/* SVG progress ring */}
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r={RADIUS}
            fill="none"
            stroke="var(--panel-border)"
            strokeWidth="3"
          />
          <circle
            cx="28"
            cy="28"
            r={RADIUS}
            fill="none"
            stroke={accent}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            className="transition-[stroke-dashoffset] duration-700"
          />
        </svg>
        {/* Icon center */}
        <div className="text-xl" style={{ color: accent }}>
          {icon}
        </div>
      </div>
      <p className="text-xs font-semibold text-[color:var(--text-primary)]">{name}</p>
      <span className="text-[10px] tabular-nums text-[color:var(--text-muted)]">{progress}%</span>
    </div>
  );
};
