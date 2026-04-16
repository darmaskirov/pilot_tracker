import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/content";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Track design partners and pilot risk`,
  description: siteConfig.description,
  keywords: [
    "pilot tracker",
    "design partner tracking",
    "paid pilot management",
    "founder-led b2b",
    "renewal risk",
  ],
  openGraph: {
    title: `${siteConfig.name} | Track design partners and pilot risk`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Track design partners and pilot risk`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-[var(--font-sans)]">{children}</body>
    </html>
  );
}
