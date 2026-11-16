import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contato | NanoSkinBio",
  description:
    "Fale com a NanoSkinBio: preencha seus dados ou utilize nossos canais diretos de atendimento.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main>
        <Contact standalone />
      </main>
      <Footer />
    </>
  );
}
