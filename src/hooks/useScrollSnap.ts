import { useEffect, useRef } from 'react';

const MIN_LOCK_MS = 350;
const WHEEL_THRESHOLD = 20;
const QUIET_DELTA = 5;

export const useScrollSnap = (sectionCount: number, onSectionChange?: (index: number) => void) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef(0);
  const lockedRef = useRef(false);
  const minLockReachedRef = useRef(false);
  const lockTimeoutRef = useRef<number | null>(null);

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
      minLockReachedRef.current = false;
      if (lockTimeoutRef.current) window.clearTimeout(lockTimeoutRef.current);
      lockTimeoutRef.current = window.setTimeout(() => {
        minLockReachedRef.current = true;
      }, MIN_LOCK_MS);
      onSectionChange?.(index);
    };

    const handleWheel = (event: WheelEvent) => {
      const absX = Math.abs(event.deltaX);
      const absY = Math.abs(event.deltaY);
      const target = event.target as Element | null;

      // 1) Horizontal scroll passthrough inside Projets row.
      const innerX = target?.closest('[data-scrollable-x]') as HTMLElement | null;
      if (innerX) {
        const { scrollLeft, scrollWidth, clientWidth } = innerX;
        const intent = absY > absX ? event.deltaY : event.deltaX;
        const canRight = scrollLeft + clientWidth < scrollWidth - 1;
        const canLeft = scrollLeft > 1;
        if (intent > 0 && canRight) {
          event.preventDefault();
          innerX.scrollLeft += intent;
          return;
        }
        if (intent < 0 && canLeft) {
          event.preventDefault();
          innerX.scrollLeft += intent;
          return;
        }
      }

      const absDominant = Math.max(absX, absY);
      if (absDominant < 1) return;

      event.preventDefault();

      // 2) Lock: ignore residual trackpad inertia. Release once the minimum
      //    lock duration has elapsed AND we observe an event quiet enough
      //    to confirm the user has stopped scrolling.
      if (lockedRef.current) {
        if (minLockReachedRef.current && absDominant < QUIET_DELTA) {
          lockedRef.current = false;
        }
        return;
      }

      if (absDominant < WHEEL_THRESHOLD) return;

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
      if (lockTimeoutRef.current) window.clearTimeout(lockTimeoutRef.current);
    };
  }, [sectionCount]);

  return containerRef;
};
