import type { Metadata } from "next";
import { Kanit, Space_Mono } from "next/font/google";
import "./globals.css";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fumu.co";
const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
const canonicalPath = publicBasePath ? `${publicBasePath}/` : "/";
const ogImagePath = `${publicBasePath}/assets/fumu_guy.png`;

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FUMU",
  alternateName: "FUMU Manchester",
  image: `${normalizedSiteUrl}${ogImagePath}`,
  url: `${normalizedSiteUrl}${canonicalPath}`,
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
  metadataBase: new URL(normalizedSiteUrl),
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
    canonical: canonicalPath,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: canonicalPath,
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
