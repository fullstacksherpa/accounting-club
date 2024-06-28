import {ClerkProvider} from '@clerk/nextjs';
import type {Metadata} from "next";
import {Fira_Code} from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar/Navbar';
import Footer from "@/components/Footer";
import {siteConfig} from '@/site-config';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Analytics} from '@vercel/analytics/react';

const firaCode = Fira_Code({subsets: ["latin"]});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [
    {
      name: "Ongchen Sherpa",
      url: "https://github.com/fullstacksherpa",
    },
  ],
  keywords: [
    "accounting club",
    "acsenda school of management",
    "Best club in Vancouver",
    "Best accounting club",
    "cpa study group",
    "career mentor",
    "accounting help"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="icon" href="/fevicon.png" sizes="any" />
        <body className={`${firaCode.className} bg-paper`}>
          <Navbar />
          {/* <main className="flex-1"> */}
          <main>
            {children}
          </main>
          <Footer />
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
