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

export const metadata: Metadata = {
  title: "Captain Stavros | Fishing Tours in Skiathos, Greece",
  description:
    "Experience authentic fishing in Skiathos with Captain Stavros. Traditional fishing tours, freshly cooked seafood on board, and hidden bays. Book your unforgettable day at sea.",
  keywords:
    "Skiathos fishing, fishing tour Greece, Captain Stavros, boat trip Skiathos, Greek fishing experience, Aegean Sea tour",
  openGraph: {
    title: "Captain Stavros | Authentic Fishing Tours in Skiathos",
    description:
      "Join Captain Stavros for a day of traditional fishing, fresh seafood, and hidden bays in Skiathos.",
    type: "website",
    locale: "en_US",
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
