import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Amaan Portfolio",
  description: "Premium Next.js Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white">
        <SmoothScrollProvider>
          <Navbar />
          <main className="smooth-page">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

