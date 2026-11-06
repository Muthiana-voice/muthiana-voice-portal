import { createFileRoute } from "@tanstack/react-router";
import { EmBreve } from "@/components/site/Layout";

export const Route = createFileRoute("/projectos")({
  head: () => ({
    meta: [
      { title: "Projectos | Muthiana Voice – Voz da Mulher" },
      { name: "description", content: "Projectos — Muthiana Voice, associação moçambicana pelo empoderamento da mulher e da rapariga." },
      { property: "og:title", content: "Projectos | Muthiana Voice" },
      { property: "og:description", content: "Projectos — Muthiana Voice – Voz da Mulher." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <EmBreve titulo="Projectos" />,
});
