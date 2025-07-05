import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../lib/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Djakam - Full Stack Developer",
  description: "Full Stack Developer passionate about creating beautiful, modern web applications with cutting-edge technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Daniel Djakam" }],
  creator: "Daniel Djakam",
  openGraph: {
    title: "Daniel Djakam - Full Stack Developer",
    description: "Full Stack Developer passionate about creating beautiful, modern web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
