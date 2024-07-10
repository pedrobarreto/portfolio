import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Roboto } from "next/font/google";
import { RESUME_DATA } from "@/data/resume-data";
import { Providers } from "@/providers";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://pedrobarreto.me',
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
    images: [
      {
        url: 'https://raw.githubusercontent.com/pedrobarreto/portfolio/main/public/opengraph.jpg',
        width: 1200,  
        height: 675,
        alt: 'Banner do Portfolio',
      },
    ],
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "700"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <Providers>
        {children}
      </Providers>
      <Analytics />
    </html>
  );
}
