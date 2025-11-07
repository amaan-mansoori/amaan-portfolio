"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function ParallaxHero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });

  const layer1X = useTransform(sx, (v) => v * 0.02);
  const layer1Y = useTransform(sy, (v) => v * 0.02);
  const layer2X = useTransform(sx, (v) => v * -0.03);
  const layer2Y = useTransform(sy, (v) => v * -0.03);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 100;
      const y = (e.clientY / innerHeight - 0.5) * 100;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return (
    <>
      {/* base hero glow */}
      <div className="hero-glow" />

      {/* parallax gradient layers */}
      <motion.div
        style={{ x: layer1X, y: layer1Y }}
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl"
      >
        <div className="w-full h-full rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(0,160,255,0.35), transparent 65%)" }} />
      </motion.div>

      <motion.div
        style={{ x: layer2X, y: layer2Y }}
        className="pointer-events-none absolute top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl"
      >
        <div className="w-full h-full rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, rgba(0,240,255,0.25), transparent 65%)" }} />
      </motion.div>
    </>
  );
}
