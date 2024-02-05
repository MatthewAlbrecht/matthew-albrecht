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
  title: "Matt Albredcht – Breathing Enthusiast",
  description: "The fastest way to learn about Matt Albrecht.",
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
          <div className="absolute left-0 top-0 -z-10 h-screen w-[calc(57.4%-168px)] bg-background-gray" />
          <div className="absolute left-[calc(57.4%-168px)] right-0 top-0 -z-10 h-screen bg-background-tan" />
          <main>{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
