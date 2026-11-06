import { createFileRoute } from "@tanstack/react-router";
import { EmBreve } from "@/components/site/Layout";

export const Route = createFileRoute("/parceiros")({
  head: () => ({ meta: [
    { title: "Parceiros | Muthiana Voice – Voz da Mulher" },
    { name: "description", content: "Parcerias pela promoção e empoderamento da mulher e da rapariga em Moçambique." },
    { property: "og:title", content: "Parceiros | Muthiana Voice" },
    { property: "og:description", content: "Junte a sua organização à Muthiana Voice pela mulher e pela rapariga." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <EmBreve titulo="Parceiros" />,
});