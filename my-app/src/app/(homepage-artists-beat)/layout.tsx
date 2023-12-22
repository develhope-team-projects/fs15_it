"use client";
import "@/../src/app/globals.css";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageContext";
import { CardProvider } from "../components/CardContext";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <CardProvider>
            {children}
            <Footer />
          </CardProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
