import { Inter as FontSans } from "next/font/google";

import "./globals.css";
import Link from "next/link";
import { Toaster } from "~/components/ui/sonner";
import { Providers } from "~/components/providers";

export const fontSans = FontSans({
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
    <html lang="en" className={fontSans.className}>
      <body className="bg-background text-foreground ">
        <Providers>
          <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
            <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
              <Link href={"/haiku"}>Haikus</Link>
              <Link href={"/work"}>Work</Link>
              <Link href={"/resume"}>Resume</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/now"}>Now</Link>
              <Link href={"/weeks"}>Weeks</Link>
            </div>
          </nav>
          <main className="flex min-h-screen flex-col items-center">
            {children}
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
