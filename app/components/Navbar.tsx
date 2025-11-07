"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const navRef = useRef<HTMLUListElement>(null);

  // ✅ Section-Based Active Link Detection (Fixed for Contact)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const match = navLinks.find((l) => l.href === `#${id}`);
            if (match) setActive(match.label);
          }
        });
      },
      { threshold: 0.35 } // works for all sections including last one
    );

    document.querySelectorAll("section[id]").forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // ✅ Magnetic Hover Effect
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const items = nav.querySelectorAll("li");

    items.forEach((item) => {
      item.addEventListener("mousemove", (e: any) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        item.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
      });

      item.addEventListener("mouseleave", () => {
        item.style.transform = `translate(0,0)`;
      });
    });
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <ul
        ref={navRef}
        className="backdrop-blur-xl border border-white/10 bg-white/5 px-10 py-3 rounded-full shadow-lg flex gap-8 text-[14px] font-medium tracking-wide text-white/75 relative"
      >
        {navLinks.map((link) => (
          <li key={link.label} className="relative transition-transform duration-200 ease-out group">
            <Link href={link.href} className={`${active === link.label ? "text-cyan-300" : "hover:text-white"}`}>
              {link.label}
            </Link>

            {/* Underline */}
            <span
              className={`absolute left-0 right-0 mx-auto -bottom-[6px] h-[2.5px] rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)] ${
                active === link.label ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
