import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Inter, Dancing_Script, Parisienne } from "next/font/google";
import "./globals.css";
import LargeNav from "@/components/Navigation/LargeNav";
import LargeFooter from "@/components/Footer/LargeFooter";
import MobileNav from "@/components/Navigation/MobileNav";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets:["latin"],
});

const dancing = Dancing_Script({ 
  variable: "--font-dancing-script",
  subsets: ["latin"],  
});

const parisienne = Parisienne({ 
  variable: "--font-parisienne",
  subsets:["latin"],
  weight:"400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Star Nights Magadi | Sleep beneath the stars",
  description: "An open-air star bed stay, guided night skies, and quiet savannah experiences in Magadi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
                className={`${geistSans.variable} ${parisienne.variable}  ${geistMono.variable} ${raleway.variable} ${inter.variable} ${dancing.variable} antialiased`}
      >
        <div className="hidden md:inline sticky top-0 right-0 left-0 z-[100]">
        <LargeNav />
      </div>
       <div className="sticky top-0 right-0 left-0 md:hidden z-[100]">
        <MobileNav />
      </div>
       <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {children}
        
      </div>

      <LargeFooter />
    </div>


         
      </body>
    </html>
  );
}
