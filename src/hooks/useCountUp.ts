"use client";

import { useEffect, useState } from "react";

export function useCountUp(
  end: number,
  isActive: boolean,
  duration: number = 2000,
  decimals: number = 0
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const start = 0;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeOut;

      setCount(Number(current.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [end, isActive, duration, decimals]);

  return count;
}
