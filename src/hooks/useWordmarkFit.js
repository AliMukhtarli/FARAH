import { useLayoutEffect } from 'react';

/**
 * Scales the inner wordmark so it always fits the outer viewport width.
 * Keeps the same layout (center + gap) — only uniform scale changes.
 */
export function useWordmarkFit(outerRef, innerRef) {
  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return undefined;

    const update = () => {
      inner.style.setProperty('--wordmark-scale', '1');
      const available = Math.min(
        outer.getBoundingClientRect().width,
        window.innerWidth
      );
      const needed = inner.scrollWidth;
      const scale = needed > 0 ? Math.min(1, (available - 4) / needed) : 1;
      inner.style.setProperty('--wordmark-scale', String(scale));
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(outer);
    ro.observe(inner);

    window.addEventListener('resize', update);
    document.fonts?.ready?.then(update);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [outerRef, innerRef]);
}
