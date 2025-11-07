"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,          // lower = stronger smoothing
      duration: 1.35,      // extend motion for glide
      wheelMultiplier: 0.9, // softens Windows touchpad input
      touchMultiplier: 1.3, // smooth touch gestures
      gestureDirection: "vertical",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // @ts-ignore
      if (lenis && typeof lenis.destroy === "function") lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
