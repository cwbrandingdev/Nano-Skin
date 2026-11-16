import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import localFont from "next/font/local";
import { homeDescription, homeTitle, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cordiaNew = localFont({
  src: "../../public/images/fonts/cordia-new-4.ttf",
  variable: "--font-logo",
  display: "swap",
});

// Canonical e Open Graph ficam em cada página (via `pageMetadata`), para que
// as rotas internas não herdem os da home.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "NanoSkinBio",
    "ativador de colágeno",
    "nano-hidroxiapatita",
    "ácido hialurônico multi-profundidade",
    "peptídeos biomiméticos",
    "tecnologia biomimética para a pele",
    "microagulhamento",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: `${siteUrl}/`,
      logo: `${siteUrl}/images/brand/logo-shield.png`,
      email: "contato@nanoskinbiobrasil.com.br",
      sameAs: ["https://www.instagram.com/nanoskinbiobrasil/"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+55-41-3206-8654",
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
        {
          "@type": "ContactPoint",
          telephone: "+55-11-92567-5536",
          contactType: "sales",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: `${siteUrl}/`,
      inLanguage: "pt-BR",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fraunces.variable} ${inter.variable} ${cordiaNew.variable} bg-azure-950 font-sans text-ink-900 antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
