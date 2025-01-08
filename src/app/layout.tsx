import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/_layout/Header";
import { Suspense } from "react";
import Loading from "@/components/_common/Loading";
import Footer from "@/components/_layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Dealer",
  description: "DevelopsToday - Car Dealer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
          <header>
            <Header />
            {children}
          </header>
          <footer>
            <Footer/>
          </footer>
        </Suspense>
      </body>
    </html>
  );
}
