import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import PageTransition from "@/components/page-transition";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cavite State University Bacoor City Campus",
  description: "Cavite State University Bacoor City Campus Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Script src="https://analytics.cvsu-bacoor.com/script.js" data-website-id="f020d8d3-fdad-4b21-ba68-d54f9b9d5baa"  />
    <html lang="en">
      <body className={inter.className}>
        <PageTransition>{children}</PageTransition>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
