import type { Metadata } from "next";
import { Geist_Mono, Lora, Manrope } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/lib/site";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// Stand-in for Figma's "Geist Pixel" (not a publicly distributed font) —
// swap in the real font files under public/fonts if you have them.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: `Portfolio of ${siteConfig.name} — product designer working across interfaces, websites, 3D, and code.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-text-primary">
        {children}
      </body>
    </html>
  );
}
