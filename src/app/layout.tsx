import type { Metadata } from "next";
import { Kanit, Space_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./site-config";

const ogImagePath = `${siteConfig.basePath}/assets/fumu_guy.png`;

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FUMU",
  alternateName: "FUMU Manchester",
  image: `${siteConfig.siteOrigin}${ogImagePath}`,
  url: siteConfig.homeUrl,
  description:
    "FUMU chilli oil is handmade in Manchester, UK. Small-batch Asian condiments built for bold flavour and everyday cooking.",
  areaServed: ["Manchester", "United Kingdom"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manchester",
    addressCountry: "GB",
  },
  sameAs: ["https://www.instagram.com/fumu.chilli/"],
};

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
  metadataBase: new URL(siteConfig.siteOrigin),
  title: {
    default: "FUMU Manchester | Small-batch Chilli Oil UK",
    template: "%s | FUMU",
  },
  description:
    "FUMU chilli oil is handmade in Manchester, UK. Discover small-batch Asian condiments built for bold flavour, layered umami, and everyday cooking.",
  keywords: [
    "FUMU chilli oil",
    "handmade chilli oil Manchester",
    "small-batch chilli oil UK",
    "artisan chilli oil Manchester",
    "Asian condiments Manchester",
    "FUMU Manchester",
  ],
  alternates: {
    canonical: siteConfig.canonicalPath,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.canonicalPath,
    siteName: "FUMU",
    title: "FUMU Manchester | Small-batch Chilli Oil UK",
    description:
      "FUMU chilli oil is handmade in Manchester, UK. Discover small-batch Asian condiments built for bold flavour, layered umami, and everyday cooking.",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 1200,
        alt: "FUMU chilli oil brand mascot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUMU Manchester | Small-batch Chilli Oil UK",
    description:
      "FUMU chilli oil is handmade in Manchester, UK. Discover small-batch Asian condiments built for bold flavour and everyday cooking.",
    images: [ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: `${siteConfig.basePath}/icon.png`,
    shortcut: `${siteConfig.basePath}/icon.png`,
    apple: `${siteConfig.basePath}/icon.png`,
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
