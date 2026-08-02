import type { Metadata } from "next";
import { Inter, Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RhaVans Orbital Systems",
  description:
    "Independent software engineering laboratory focused on permanent architecture and generational technology impact.",
  keywords: ["software engineering", "portfolio", "space tech", "RhaVans", "orbital systems"],
  authors: [{ name: "RhaVans" }],
  openGraph: {
    title: "RhaVans Orbital Systems",
    description:
      "Independent software engineering laboratory focused on permanent architecture and generational technology impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${rajdhani.variable} ${jetbrains.variable} bg-void text-stardust antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
