import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://stavors-captain.vercel.app";

export const metadata: Metadata = {
  title: "Captain Stavros | Fishing Tours in Skiathos, Greece",
  description:
    "Join Captain Stavros for an authentic fishing experience in Skiathos. Sail the Aegean on a traditional boat, catch your own fish, swim in hidden bays, and feast on freshly cooked seafood. Small groups, real fishermen, unforgettable memories.",
  keywords:
    "Skiathos fishing tour, fishing tourism Greece, Captain Stavros, boat trip Skiathos, Greek fishing experience, Aegean Sea tour, Skiathos boat excursion, traditional fishing Greece, seafood tour Skiathos",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Captain Stavros — Be a Fisherman for a Day",
    description:
      "Authentic fishing tours in Skiathos. Traditional boat, fresh seafood on board, hidden bays & small groups. Book your unforgettable day at sea.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Captain Stavros Fishing Tourism",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aerial view of the stunning turquoise Skiathos bay — Captain Stavros Fishing Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Captain Stavros — Fishing Tours in Skiathos",
    description:
      "Sail the Aegean, catch your own fish, feast on fresh seafood. Authentic fishing tours with real local fishermen.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
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
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-dm-sans)]">
        {children}
      </body>
    </html>
  );
}
