import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

// Display font for headings
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Sans font for body copy
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shubham Mishra | Frontend Developer & UI Developer",
  description: "Portfolio of Shubham Mishra, a creative Frontend Developer & UI Developer with 3+ years of experience building pixel-perfect, responsive web applications.",
  keywords: ["Shubham Mishra", "Frontend Developer", "UI Developer", "React Developer", "Next.js Developer", "Figma to HTML", "Portfolio"],
  authors: [{ name: "Shubham Mishra" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#05070f] text-slate-100 font-sans selection:bg-teal-500/20 selection:text-teal-400">
        {/* Analog Noise Texture Layer */}
        <div className="noise-overlay" />
        
        {/* Custom pointer trailing ring */}
        <CustomCursor />
        
        {/* Main pages wrapper */}
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
