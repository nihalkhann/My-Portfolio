// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nihal Khan Ghouri",
  description: "Discover the portfolio of Nihal Khan Ghouri, a passionate developer specializing in Cloud Applied Generative AI Engineering. Explore projects, skills, and professional journey.",
  keywords: [
    "Nihal Khan Ghouri",
    "Portfolio",
    "Programmer",
    "Web Developer", 
    "Full Stack Developer", 
    "Software Engineer",
    "Cloud Applied Generative AI Engineer"
  ],
  openGraph: {
    title: "Nihal Khan Ghouri - Portfolio",
    description: "Portfolio of Nihal Khan Ghouri - Passionate Developer and Cloud AI Engineer",
    images: [{ url: "/nihal.jpg" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nihal Khan Ghouri - Portfolio",
    description: "Portfolio of Nihal Khan Ghouri - Passionate Developer and Cloud AI Engineer",
    images: ["/nihal.jpg"]
  },
  alternates: {
    canonical: "https://www.nihal-khan.vercel.app" 
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#111] text-white`}>

          <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
