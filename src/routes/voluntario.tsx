import { createFileRoute } from "@tanstack/react-router";
import { EmBreve } from "@/components/site/Layout";

export const Route = createFileRoute("/voluntario")({
  head: () => ({
    meta: [
      { title: "Seja Voluntário | Muthiana Voice – Voz da Mulher" },
      { name: "description", content: "Seja Voluntário — Muthiana Voice, associação moçambicana pelo empoderamento da mulher e da rapariga." },
      { property: "og:title", content: "Seja Voluntário | Muthiana Voice" },
      { property: "og:description", content: "Seja Voluntário — Muthiana Voice – Voz da Mulher." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <EmBreve titulo="Seja Voluntário" />,
});
