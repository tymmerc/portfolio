import { useEffect, useMemo, useState } from 'react';
import { NavBar } from './components/NavBar';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Roadmap } from './sections/Roadmap';
import { Skills } from './sections/Skills';
import { useScrollSnap } from './hooks/useScrollSnap';

const App = () => {
  const sectionIds = useMemo(() => ['hero', 'about', 'skills', 'projects', 'roadmap', 'contact'], []);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentSection, setCurrentSection] = useState('hero');
  const containerRef = useScrollSnap(sectionIds.length, (index) => {
    const next = sectionIds[index] ?? 'hero';
    setCurrentSection(next);
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleNavigate = (id: string) => {
    const target = document.querySelector<HTMLElement>(`[data-section="${id}"]`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCurrentSection(id);
    }
  };

  return (
    <div className="relative h-screen bg-[color:var(--bg)] text-[color:var(--text-primary)] overflow-hidden">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-1/3 h-[65vh] w-[65vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent)]/10 blur-[120px]" />
        <div className="absolute right-20 bottom-10 h-64 w-64 rounded-full bg-[color:var(--accent)]/15 blur-[80px]" />
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-[color:var(--accent)]/25" />
      </div>
      <NavBar
        sections={[
          { id: 'hero', label: 'Intro' },
          { id: 'about', label: 'Profil' },
          { id: 'skills', label: 'Skills' },
          { id: 'projects', label: 'Projets' },
          { id: 'roadmap', label: 'Roadmap' },
          { id: 'contact', label: 'Contact' },
        ]}
        currentSection={currentSection}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
      />
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory bg-[color:var(--bg)] pt-24"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Roadmap />
        <Contact />
      </div>
    </div>
  );
};

export default App;
