"use client";
import { useEffect, useRef } from "react";

export default function CursorHalo() {
  const haloRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const halo = haloRef.current;
    if (!halo) return;

    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      halo.animate({ left: `${x}px`, top: `${y}px` }, { duration: 400, fill: "forwards" });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div ref={haloRef} className="cursor-halo"></div>;
}
