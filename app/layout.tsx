'use client'

// import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar";
import "./globals.css";
import Providers from "./providers";
import ChatBubble from "@/components/chat-bubble";
import ChatPanel from "@/components/chat-panel";

import {
  // dehydrate,
  // HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from "react";

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

// const metadata: Metadata = {
//   title: "EEG",
//   description:
//     "Environmental Exchange Group Home page, We Connect Quality Products with the Right Deals.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const queryClient = new QueryClient()
  const [queryClient] = useState(() => new QueryClient());

  // await queryClient.prefetchQuery({
  //   queryKey: ["useGetSearchResults"],
  //   queryFn: useChatAi,
  // })
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col justify-center items-center bg-background antialiased`}
      >
        {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
        <QueryClientProvider client={queryClient}>
        <ChatPanel>
          <ChatBubble>
            <Providers>
              <div className="w-full relative">
                <Navbar />
              </div>
              <main className="max-w-[1512px] w-full mx-auto px-8 py-20">
                {children}
              </main>
              <Toaster />
            </Providers>
          </ChatBubble>
        </ChatPanel>
        </QueryClientProvider>
        {/* </HydrationBoundary> */}
      </body>
    </html>
  );
}
