import {ClerkProvider} from '@clerk/nextjs';
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar/Navbar';
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Accounting Club of Acsenda",
  description: "Join the Accounting Club of Acsenda for networking, professional development, and hands-on experience in accounting. Enhance your skills, connect with industry professionals, and take your career to the next level.",
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
        <body className="bg-paper `${inter.className}`">
          <Navbar />
          {/* <main className="flex-1"> */}
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
