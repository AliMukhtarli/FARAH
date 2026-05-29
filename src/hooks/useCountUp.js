import { useEffect, useState } from 'react';

/**
 * Animates a number from 0 → target when `isActive` is true.
 */
export function useCountUp(target, isActive, duration = 2200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setValue(0);
      return undefined;
    }

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(target * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, isActive, duration]);

  return value;
}
