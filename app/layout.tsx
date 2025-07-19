import { TRPCReactProvider } from "@/trpc/client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "enlightii - Create apps and websites by chatting with AI",
  description:
    "Transform your ideas into reality with AI-powered development. Build beautiful, functional applications through natural conversation."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{variables:{
      // colorPrimary:"#C96342"
    }}}>
      <TRPCReactProvider>
        <html lang="en" className="scroll-smooth">
          <body className={inter.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange>
              {children}
            </ThemeProvider>
          </body>
        </html>
      </TRPCReactProvider>
    </ClerkProvider>
  );
}
