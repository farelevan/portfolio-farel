import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farel Evan | Creative Developer & CS Student",
  description: "Portfolio of Farel Evan, a creative developer specializing in high-performance digital systems, reactive frontends, and technical architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', (event) => {
                if (event.filename && event.filename.includes('chrome-extension')) {
                  event.stopImmediatePropagation();
                }
              }, true);
              window.addEventListener('unhandledrejection', (event) => {
                if (event.reason && event.reason.stack && event.reason.stack.includes('chrome-extension')) {
                  event.stopImmediatePropagation();
                }
              }, true);
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
