import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "../styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "METTĀ | Discover Women's Fashion – Clothing, Jewellery & Accessories",
  description:
    "Explore curated women's fashion at METTĀ — shop dresses, tops, jewellery, and accessories with refined filters and free worldwide shipping on orders over $100.",
  keywords:
    "women's fashion, clothing, jewellery, accessories, dresses, tops, curated fashion, METTĀ",
  authors: [{ name: "METTĀ Fashion" }],
  openGraph: {
    title: "METTĀ | Discover Women's Fashion",
    description:
      "Curated women's fashion — clothing, jewellery, and accessories with worldwide delivery.",
    type: "website",
    locale: "en_US",
    siteName: "METTĀ",
  },
  twitter: {
    card: "summary_large_image",
    title: "METTĀ | Discover Women's Fashion",
    description:
      "Curated women's fashion — clothing, jewellery, and accessories.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.className} ${jost.className}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://appscrip-plp.netlify.app/" />
      </head>
      <body>{children}</body>
    </html>
  );
}
