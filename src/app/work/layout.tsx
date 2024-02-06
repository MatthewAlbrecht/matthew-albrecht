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
    <>
      <main>{children}</main>
      <style>{css}</style>
    </>
  );
}

const css = `
    :root {
        --background: 26, 14%, 96%;
        --card: 34, 21%, 85%;
        --card-foreground: 3, 13, 22%;
        --primary-foreground: 6, 9%, 48%;
    }
`;
