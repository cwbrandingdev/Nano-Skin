import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Technology } from "@/components/sections/Technology";
import { Results } from "@/components/sections/Results";
import { Numbers } from "@/components/sections/Numbers";
import { About } from "@/components/sections/About";
import { Recognition } from "@/components/sections/Recognition";
import { Protocols } from "@/components/sections/Protocols";
import { Business } from "@/components/sections/Business";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";
import { faq } from "@/lib/content";
import { officialImages } from "@/lib/images";
import { homeDescription, homeTitle, pageMetadata, siteUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "/",
});

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "NanoSkinBio MED",
      description:
        "Ativador de colágeno biomimético de uso tópico e profissional, com nano-hidroxiapatita, ácido hialurônico multi-profundidade e peptídeos biomiméticos.",
      image: `${siteUrl}${officialImages.productBox.src}`,
      brand: { "@type": "Brand", name: "NanoSkinBio" },
      manufacturer: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Technology />
        <Results />
        <Numbers />
        <About />
        <Recognition />
        <Protocols />
        <Business />
        <Contact />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
