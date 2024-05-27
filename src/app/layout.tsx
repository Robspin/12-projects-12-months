import type { Metadata } from "next";
import "./globals.css";

import { Archivo } from 'next/font/google'
import { Rethink_Sans } from 'next/font/google'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

const rethink_sans = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rethink_sans',
})

export const metadata: Metadata = {
  title: "12 Projects in 12 Months",
  description: "My personal challenge to do 12 side projects next to my full time job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${rethink_sans.variable}`}>{children}</body>
    </html>
  );
}
