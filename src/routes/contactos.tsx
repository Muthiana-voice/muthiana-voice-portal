import { createFileRoute } from "@tanstack/react-router";
import { EmBreve } from "@/components/site/Layout";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos | Muthiana Voice – Voz da Mulher" },
      { name: "description", content: "Contactos — Muthiana Voice, associação moçambicana pelo empoderamento da mulher e da rapariga." },
      { property: "og:title", content: "Contactos | Muthiana Voice" },
      { property: "og:description", content: "Contactos — Muthiana Voice – Voz da Mulher." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <EmBreve titulo="Contactos" />,
});
