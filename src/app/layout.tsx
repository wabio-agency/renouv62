import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renouv62 - Renovation & Facades dans le Pas-de-Calais",
  description:
    "Renouv62, votre expert en renovation, ravalement de facade, extension, demolition, isolation, rejointement et sablage dans le Pas-de-Calais (62). Devis gratuit au 06 33 92 93 76.",
  keywords:
    "renovation, facade, ravalement, extension, demolition, isolation, rejointement, sablage, Pas-de-Calais, 62, BTP, artisan",
  openGraph: {
    title: "Renouv62 - Renovation & Facades dans le Pas-de-Calais",
    description:
      "Expert en renovation, ravalement de facade et travaux du batiment. Devis gratuit au 06 33 92 93 76.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
