import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DisclosureLine } from "@/components/DisclosureLine";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";
import "./globals.css";

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const SITE_TITLE = "BrewWorth — Honest picks for better home coffee";
const SITE_DESCRIPTION =
  "Editorial reviews and buying guides for espresso machines, grinders, kettles, scales, frothers, and home barista accessories.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s · BrewWorth`,
  },
  description: SITE_DESCRIPTION,
  verification: {
    google: "FN6qrZKJIgH6gtQS2rIEQe-jjDmKVIUoBq3DwQUX8yk",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "BrewWorth",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} min-h-screen antialiased`}
      >
        <Header />
        <main className="mx-auto min-h-[70vh] max-w-6xl px-4 py-10 sm:px-6">
          <DisclosureLine className="mb-4 mt-0" />
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
