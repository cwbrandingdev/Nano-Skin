import type { MetadataRoute } from "next";
import { siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NanoSkinBio — Ativador de Colágeno Biomimético",
    short_name: siteName,
    description:
      "Tecnologia biomimética para a pele: nano-hidroxiapatita, ácido hialurônico multi-profundidade e peptídeos biomiméticos.",
    start_url: "/",
    display: "standalone",
    background_color: "#050f30",
    theme_color: "#050f30",
    lang: "pt-BR",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
