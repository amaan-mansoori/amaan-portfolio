import { ReactNode } from "react";

export default function Section({ id, children, title, subtitle }: { id: string; children: ReactNode; title: string; subtitle?: string; }) {
  return (
    <section id={id} className="relative scroll-mt-28 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-white/70">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
