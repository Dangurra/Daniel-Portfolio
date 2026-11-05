import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource-variable/geist-pixel";
import "./globals.css";

import { ThemeScript } from "@/components/ThemeScript";
import { siteConfig, SITE_URL } from "@/lib/site";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const DESCRIPTION = `Portfolio of ${siteConfig.name} — product designer working across interfaces, websites, 3D, and code.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Daniel Gur",
    "product designer",
    "UX/UI designer",
    "web design",
    "design systems",
    "3D modeling",
    "front-end development",
  ],
  verification: GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : undefined,
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicons/favicon-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/favicons/favicon-48x48.svg", sizes: "48x48", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col font-sans text-text-primary" style={{ background: "var(--background)" }}>
        {children}
      </body>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      <Analytics />
    </html>
  );
}
