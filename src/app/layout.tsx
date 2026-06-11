import type { Metadata } from "next";
import { Kanit, Space_Mono } from "next/font/google";
import "./globals.css";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FUMU",
  description: "FUMU chili oil",
  icons: {
    icon: `${publicBasePath}/icon.png`,
    shortcut: `${publicBasePath}/icon.png`,
    apple: `${publicBasePath}/icon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
