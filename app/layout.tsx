import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./hooks/useSmoothScroll";

export const metadata = {
  title: "Amaan | Portfolio",
  description: "Premium developer portfolio of Amaan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          <main className="smooth-page">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
