"use client";
import useSmoothScroll from "@/app/hooks/useSmoothScroll";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  return <>{children}</>;
}
