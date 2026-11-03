import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import "@fontsource-variable/geist-pixel";
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

export const metadata: Metadata = {
  title: siteConfig.name,
  description: `Portfolio of ${siteConfig.name} — product designer working across interfaces, websites, 3D, and code.`,
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicons/favicon-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicons/favicon-48x48.svg", sizes: "48x48", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white font-sans text-text-primary">
        {children}
      </body>
    </html>
  );
}
