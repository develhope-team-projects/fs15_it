"use client";
import "@/../src/app/globals.css";
import { Inter } from "next/font/google";

import { LanguageProvider } from "../components/LanguageContext";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
