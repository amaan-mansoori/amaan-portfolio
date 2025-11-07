"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.05,
        delay,
        ease: [0.22, 1, 0.36, 1], // PREMIUM spring-ease curve
      }}
    >
      {children}
    </motion.div>
  );
}
