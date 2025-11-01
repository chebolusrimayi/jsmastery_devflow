import React from 'react';
import type { Metadata } from "next";
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from '@/components/ui/toaster';


const inter = localFont({
  src: './fonts/Inter/Inter-VariableFont_opsz,wght.ttf',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A community-driven platform for developers to ask questions and share knowledge",
};

const RootLayout = async ({children} : { children: ReactNode }) => {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <SessionProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
export default RootLayout;