import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import useSmoothScroll from "./hooks/useSmoothScroll";

export const metadata: Metadata = {
  title: "Amaan Portfolio",
  description: "Premium Next.js Portfolio",
};

/* ✅ Smooth scroll wrapper using the hook */
function SmoothScroll({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  return <>{children}</>;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
