import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.angolaosc.org/"),
  title: {
    default: "Angola Open-source Community",
    template: "",
  },
  description:
    "Criando um impacto significativo na inovação tecnológica do país",
  openGraph: {
    title: "Angola Open-source Community",
    description:
      "Criando um impacto significativo na inovação tecnológica do país.",
    url: "https://www.angolaosc.org/",
    siteName: "Angola Open-source Community",
    locale: "pt_AO",
    type: "website",
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
  twitter: {
    title: "Angola Open-source Community",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-ao">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
