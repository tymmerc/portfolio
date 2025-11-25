import { useEffect, useRef } from 'react';

export const useScrollSnap = (sectionCount: number, onSectionChange?: (index: number) => void) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef(0);
  const lockedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const panels = () => container.querySelectorAll<HTMLElement>('[data-snap-section]');

    const scrollToIndex = (index: number) => {
      const targets = panels();
      const target = targets[index];
      if (!target) return;
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      lockedRef.current = true;
      window.setTimeout(() => {
        lockedRef.current = false;
      }, 750);
      onSectionChange?.(index);
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (lockedRef.current) return;
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = Math.min(Math.max(indexRef.current + direction, 0), sectionCount - 1);
      if (nextIndex === indexRef.current) return;
      indexRef.current = nextIndex;
      scrollToIndex(nextIndex);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    const handleResize = () => {
      scrollToIndex(indexRef.current);
    };
    window.addEventListener('resize', handleResize);

    scrollToIndex(indexRef.current);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
    };
  }, [sectionCount]);

  return containerRef;
};
