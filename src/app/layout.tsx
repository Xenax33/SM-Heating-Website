import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SM Heating & Plumbing | Gas Safe Certified Boiler Installation & Repair Glasgow",
  description: "Expert Gas Safe registered boiler installation, repair, and servicing across Glasgow, Hamilton, Paisley, and surrounding areas. 24/7 emergency support available. Professional heating and plumbing solutions.",
  keywords: "boiler installation, boiler repair, heating services, plumbing, emergency repair, Glasgow, Gas Safe registered, central heating, plumbing services",
  authors: [{ name: "SM Heating & Plumbing" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://smheatingandplumbing.co.uk",
    title: "SM Heating & Plumbing | Gas Safe Certified Services in Glasgow",
    description: "Professional boiler installation, repair, and servicing. Gas Safe registered engineers. Available 24/7 for emergencies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
