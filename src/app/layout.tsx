import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  title: "Shreyash Nivagune — Data Scientist",
  description:
    "Data Scientist at a Deeptech Startup. MSc Data Science & Analytics, Brunel University London. Specialising in ML, statistics, and domain-driven decisions.",
  keywords: ["Data Scientist", "Machine Learning", "Deep Learning", "Statistics", "Python", "Shreyash Nivagune"],
  authors: [{ name: "Shreyash Nivagune" }],
  openGraph: {
    title: "Shreyash Nivagune — Data Scientist",
    description: "ML · Statistics · Domain-driven decisions",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
