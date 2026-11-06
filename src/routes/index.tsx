import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { ProjectCarousel } from "@/components/site/ProjectCarousel";
import { Partners, VolunteerForm } from "@/components/site/Community";
import { Button } from "@/components/ui/button";
import { publicacoes, formatarData, type Publicacao } from "@/data/publicacoes";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Muthiana Voice – Voz da Mulher | Empoderamento da mulher e da rapariga" },
    { name: "description", content: "Associação moçambicana sem fins lucrativos dedicada ao desenvolvimento e empoderamento da mulher e da rapariga." },
    { property: "og:title", content: "Muthiana Voice – Voz da Mulher" },
    { property: "og:description", content: "Notícias, projectos e publicações da associação moçambicana Muthiana Voice." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});
function Index() {
  const destaque = publicacoes.find(p => p.destaque);
  const recentes = publicacoes.filter(p => !p.destaque).slice(0, 10);
  return <Layout>
    <div className="site-container py-7 sm:py-10"><div className="mb-6 flex items-center justify-between border-b pb-4"><p className="section-eyebrow">Muthiana Voice · Voz da Mulher</p><span className="text-xs text-muted-foreground">Em destaque</span></div>{destaque && <Destaque p={destaque} />}</div>
    <ProjectCarousel />
    <section className="site-container py-12 sm:py-16" aria-labelledby="ultimas"><div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b pb-5"><div><p className="section-eyebrow">Notícias & histórias</p><h2 id="ultimas" className="section-title">Últimas Publicações</h2></div><Button variant="link" asChild className="px-0"><Link to="/publicacoes">Todas as publicações <ArrowRight /></Link></Button></div><div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{recentes.map(p => <Cartao key={p.id} p={p} />)}</div></section>
    <QuemSomos /><Partners /><VolunteerForm />
  </Layout>;
}
function Destaque({ p }: { p: Publicacao }) {
  return <article className="relative overflow-hidden bg-primary">
    <img src={p.imagem} alt="Mulheres reunidas numa conversa comunitária" width={1600} height={912} className="h-[530px] w-full object-cover sm:h-[510px] lg:h-[550px]" />
    <div className="hero-overlay absolute inset-0" />
    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12"><span className="inline-flex items-center gap-2 text-xs font-bold uppercase text-primary-foreground"><span className="h-2 w-2 bg-accent" />{p.categoria}</span><h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">{p.titulo}</h1><p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">{p.resumo}</p><div className="mt-6 flex flex-wrap items-center gap-5"><Button asChild variant="secondary" className="h-11"><Link to="/publicacoes">Ler mais <ArrowUpRight /></Link></Button><span className="inline-flex items-center gap-2 text-xs text-primary-foreground/80"><Calendar className="size-4" />{formatarData(p.data)}</span></div></div>
  </article>;
}
function Cartao({ p }: { p: Publicacao }) {
  return <article className="group flex min-w-0 flex-col"><Link to="/publicacoes" className="block aspect-[3/2] overflow-hidden rounded-md" aria-label={p.titulo}><img src={p.imagem} alt="" loading="lazy" width={1024} height={688} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></Link><div className="flex flex-1 flex-col pt-5"><span className="section-eyebrow">{p.categoria}</span><h3 className="mt-2 text-xl font-semibold leading-snug text-primary"><Link to="/publicacoes">{p.titulo}</Link></h3><p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{p.resumo}</p><div className="mt-auto flex items-center justify-between gap-3 border-b pt-5 pb-4 text-xs"><span className="text-muted-foreground">{formatarData(p.data)}</span><Button asChild variant="link" size="icon" className="h-8 w-8"><Link to="/publicacoes" aria-label={`Ler mais: ${p.titulo}`}><ArrowUpRight /></Link></Button></div></div></article>;
}
function QuemSomos() {
  return <section className="border-y bg-secondary py-12 sm:py-16" aria-labelledby="quem-somos"><div className="site-container grid gap-6 md:grid-cols-[0.75fr_1.25fr]"><div><p className="section-eyebrow">Quem Somos</p><h2 id="quem-somos" className="section-title max-w-md">Uma voz pela mulher e pela rapariga moçambicana</h2></div><div><p className="text-sm leading-loose text-foreground/80">A Muthiana Voice – Voz da Mulher é uma associação moçambicana sem fins lucrativos, dedicada à promoção do desenvolvimento e empoderamento da mulher e da rapariga, através de iniciativas nas áreas da educação, direitos humanos, igualdade de género, saúde pública, saúde íntima e reprodutiva e desenvolvimento sustentável. A organização acredita no poder da informação, da participação comunitária e da educação como instrumentos para construir uma sociedade mais inclusiva e com melhores oportunidades para todos.</p><Button asChild variant="link" className="mt-4 px-0"><Link to="/sobre">Conhecer a organização <ArrowRight /></Link></Button></div></div></section>;
}
