import type { Metadata } from "next";
import "./globals.css";

import { Archivo } from 'next/font/google'
import { Maven_Pro } from 'next/font/google'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

const mavenPro = Maven_Pro({ subsets: ['latin'] })

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
    <body className={`${archivo.variable} ${mavenPro.className} bg-gray-900`}>
      <link rel="icon" href="/favicon-12.png" sizes="any"/>
      {children}
      <footer className="h-40 flex justify-center items-center bg-gray-900 w-full mt-40 text-gray-200">
        <p>Built by <a href="https://github.com/Robspin" target="_blank" className="underline">Robspin</a></p>
      </footer>
    </body>
    </html>
  );
}
