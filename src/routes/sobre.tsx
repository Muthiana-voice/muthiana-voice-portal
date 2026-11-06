import { createFileRoute } from "@tanstack/react-router";
import { EmBreve } from "@/components/site/Layout";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós | Muthiana Voice – Voz da Mulher" },
      { name: "description", content: "Sobre Nós — Muthiana Voice, associação moçambicana pelo empoderamento da mulher e da rapariga." },
      { property: "og:title", content: "Sobre Nós | Muthiana Voice" },
      { property: "og:description", content: "Sobre Nós — Muthiana Voice – Voz da Mulher." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <EmBreve titulo="Sobre Nós" />,
});
