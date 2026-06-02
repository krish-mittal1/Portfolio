import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"]
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"]
});

export const metadata = {
  title: "Krish Mittal | Portfolio",
  description:
    "Portfolio of Krish Mittal, B.Tech student at Delhi Technological University building products like CodeArena and Aether."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
