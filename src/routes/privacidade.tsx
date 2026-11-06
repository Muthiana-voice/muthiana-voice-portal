import { createFileRoute } from "@tanstack/react-router";
import { EmBreve } from "@/components/site/Layout";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Muthiana Voice – Voz da Mulher" },
      { name: "description", content: "Política de Privacidade — Muthiana Voice, associação moçambicana pelo empoderamento da mulher e da rapariga." },
      { property: "og:title", content: "Política de Privacidade | Muthiana Voice" },
      { property: "og:description", content: "Política de Privacidade — Muthiana Voice – Voz da Mulher." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <EmBreve titulo="Política de Privacidade" />,
});
