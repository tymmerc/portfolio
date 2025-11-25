import type { FC } from 'react';

type NavBarProps = {
  sections: { id: string; label: string }[];
  currentSection: string;
  onNavigate: (id: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export const NavBar: FC<NavBarProps> = ({ sections, currentSection, onNavigate, theme, onToggleTheme }) => (
  <header className="fixed left-0 right-0 top-0 z-20 flex items-center justify-between bg-[color:var(--bg)] px-10 py-5 shadow-[0_15px_60px_rgba(0,0,0,0.08)]">
    <button type="button" className="text-base font-semibold uppercase tracking-[0.4em] text-[color:var(--text-primary)]" onClick={() => onNavigate('hero')}>
      Tyméo MERCIER
    </button>
    <nav className="hidden gap-6 md:flex">
      {sections.map((section) => (
        <button
          type="button"
          key={section.id}
          onClick={() => onNavigate(section.id)}
          className={`text-xs font-semibold uppercase tracking-[0.4em] transition ${currentSection === section.id ? 'text-[color:var(--accent)]' : 'text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)]'}`}
        >
          {section.label}
        </button>
      ))}
    </nav>
    <button
      type="button"
      onClick={onToggleTheme}
      className="rounded-full border border-[color:var(--panel-border)] px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--text-muted)] transition hover:text-[color:var(--text-primary)]"
    >
      {theme === 'light' ? 'Sombre' : 'Clair'}
    </button>
  </header>
);
