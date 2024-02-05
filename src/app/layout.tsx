import { DM_Sans } from "next/font/google";

import "./globals.css";
import { Toaster } from "~/components/ui/sonner";
import { Providers } from "~/components/providers";
import Header from "~/components/Header";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.className}>
      <body className="relative min-h-screen bg-background text-foreground">
        <Providers>
          <Header />
          <div className="bg-background-gray absolute left-0 top-0 -z-10 h-screen w-[46.1%]" />
          <div className="bg-background-tan absolute right-0 top-0 -z-10 h-screen w-[53.9%]" />
          <main>{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
