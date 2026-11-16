import type { Metadata } from "next";

/** Dados globais do site — fonte única para metadata, robots, sitemap e JSON-LD. */
export const siteUrl = "https://www.nanoskinbiobrasil.com.br";
export const siteName = "NanoSkinBio";
export const ogImage = "/images/og/og-default.jpg";

export const homeTitle = "NanoSkinBio — Ativador de Colágeno Biomimético";
export const homeDescription =
  "Uma nova geração de tecnologia biomimética para a pele: nano-hidroxiapatita, ácido hialurônico multi-profundidade e peptídeos biomiméticos.";

/**
 * Metadata por página: canonical, Open Graph e Twitter apontando para a
 * própria rota (sem isso as páginas internas herdariam os da home).
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "pt_BR",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
