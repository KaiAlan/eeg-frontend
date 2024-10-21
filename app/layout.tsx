import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import "./globals.css";
import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EEG",
  description:
    "Environmental Exchange Group Home page, We Connect Quality Products with the Right Deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-background antialiased`}
      >
        <Providers>
          <div className="w-full relative">
            <Navbar />
          </div>
          <main className="max-w-[1512px] w-full mx-auto px-8 py-20 pt-40 out:px-0">
            {children}
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
