import type { Metadata } from "next";
import { Barlow_Condensed, Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-montserrat", // keeps existing font-montserrat class working
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DCSI Inc. – Security & Sound | Tampa, FL",
  description:
    "Residential & commercial security systems, cameras, sound, and smart systems serving Hillsborough County, FL and surrounding areas.",
  keywords:
    "security systems Tampa, CCTV cameras Tampa, home security Lutz FL, commercial security Hillsborough County",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${barlowCondensed.variable} ${bebasNeue.variable} ${outfit.variable} antialiased bg-bg-primary text-text-primary font-inter`}
      >
        {/* Fixed particle canvas — sits behind every page */}
        <GlobalBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
