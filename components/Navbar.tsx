"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Fade Out & Move Up when scrolling DOWN
      if (currentScroll > lastScroll && currentScroll > 80) {
        setHidden(true);
      } 
      // Fade Back In when scrolling UP
      else {
        setHidden(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const sections = ["home", "about", "skills", "projects", "certifications", "contact"];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-6 py-3 rounded-2xl backdrop-blur-xl border border-white/15 bg-white/5
      transition-all duration-500 
      ${hidden ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}
      `}
    >
      <ul className="flex items-center gap-6 text-[15px] font-medium">
        {sections.map((sec) => (
          <li key={sec}>
            <Link
              href={`#${sec}`}
              onClick={() => setActive(sec)}
              className={`capitalize transition relative hover:text-cyan-300 ${
                active === sec ? "text-cyan-300" : "text-white/75"
              }`}
            >
              {sec}

              {/* Underline Indicator */}
              <span
                className={`absolute left-0 bottom-[-3px] h-[2px] w-full rounded-full bg-cyan-300 transition-all duration-300
                ${active === sec ? "opacity-100" : "opacity-0"}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
