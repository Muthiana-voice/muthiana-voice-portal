import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar, ChevronRight, Sprout } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { publicacoes, formatarData, type Publicacao } from "@/data/publicacoes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muthiana Voice – Voz da Mulher | Empoderamento da mulher e da rapariga" },
      { name: "description", content: "Associação moçambicana sem fins lucrativos dedicada ao desenvolvimento e empoderamento da mulher e da rapariga." },
      { property: "og:title", content: "Muthiana Voice – Voz da Mulher" },
      { property: "og:description", content: "Notícias, projectos e publicações da associação moçambicana Muthiana Voice." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const destaque = publicacoes.find((p) => p.destaque)!;
  const recentes = publicacoes.filter((p) => !p.destaque).slice(0, 10);
  return (
    <Layout>
      <div className="px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
        <Destaque p={destaque} />
        <section className="mt-14" aria-labelledby="ultimas">
          <div className="mb-6 flex items-end justify-between border-b pb-3">
            <h2 id="ultimas" className="relative text-2xl font-semibold text-primary sm:text-3xl after:absolute after:-bottom-[13px] after:left-0 after:h-[3px] after:w-16 after:bg-accent">Últimas Publicações</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {recentes.map((p) => <Cartao key={p.id} p={p} />)}
          </div>
          <Paginacao />
        </section>
        <QuemSomos />
      </div>
    </Layout>
  );
}

function Destaque({ p }: { p: Publicacao }) {
  return (
    <article className="relative overflow-hidden rounded-xl bg-primary shadow-lg">
      <img src={p.imagem} alt="" width={1600} height={912} className="h-[440px] w-full object-cover sm:h-[480px] lg:h-[520px]" />
      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
        <span className="inline-block rounded-sm bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-accent-foreground">{p.categoria}</span>
        <h1 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">{p.titulo}</h1>
        <p className="mt-3 line-clamp-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">{p.resumo}</p>
        <div className="mt-5 flex flex-wrap items-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-accent hover:text-accent-foreground">
            Ler mais <ArrowRight className="h-4 w-4" />
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-primary-foreground/80"><Calendar className="h-4 w-4" />{formatarData(p.data)}</span>
        </div>
      </div>
    </article>
  );
}

function Cartao({ p }: { p: Publicacao }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg">
      <div className="aspect-[3/2] overflow-hidden">
        <img src={p.imagem} alt="" loading="lazy" width={1024} height={688} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent">{p.categoria}</span>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-primary">{p.titulo}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{p.resumo}</p>
        <div className="mt-auto flex items-center justify-between pt-5 text-xs">
          <span className="text-muted-foreground">{formatarData(p.data)}</span>
          <a href="#" className="inline-flex items-center gap-1 font-semibold text-primary hover:text-accent">Ler mais <ChevronRight className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </article>
  );
}

function Paginacao() {
  return (
    <nav aria-label="Paginação" className="mt-10 flex flex-wrap items-center justify-center gap-2">
      {[1, 2, 3, 4, 5].map((n) => (
        <a key={n} href="#" aria-current={n === 1 ? "page" : undefined}
          className={`flex h-10 w-10 items-center justify-center rounded-md border text-sm font-semibold transition-colors ${n === 1 ? "border-primary bg-primary text-primary-foreground" : "text-foreground hover:border-accent hover:text-accent"}`}>{n}</a>
      ))}
      <a href="#" className="flex h-10 items-center gap-1 rounded-md border px-4 text-sm font-semibold text-primary hover:border-accent hover:text-accent">Seguinte <ChevronRight className="h-4 w-4" /></a>
    </nav>
  );
}

function QuemSomos() {
  return (
    <section className="mt-16 overflow-hidden rounded-xl bg-primary-soft" aria-labelledby="quem-somos">
      <div className="grid items-center gap-8 p-6 sm:p-10 md:grid-cols-[auto_1fr]">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-accent ring-8 ring-accent/20">
          <Sprout className="h-10 w-10" aria-hidden />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Quem Somos</p>
          <h2 id="quem-somos" className="mt-2 text-2xl font-semibold text-primary sm:text-3xl">Uma voz pela mulher e pela rapariga moçambicana</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-foreground/80">
            A Muthiana Voice – Voz da Mulher é uma associação moçambicana sem fins lucrativos, dedicada à promoção do desenvolvimento e empoderamento da mulher e da rapariga, através de iniciativas nas áreas da educação, direitos humanos, igualdade de género, saúde pública, saúde íntima e reprodutiva e desenvolvimento sustentável. A organização acredita no poder da informação, da participação comunitária e da educação como instrumentos para construir uma sociedade mais inclusiva e com melhores oportunidades para todos.
          </p>
          <a href="/sobre" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:text-accent">Conhecer a organização <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}
