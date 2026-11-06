import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { publicacoes } from "@/data/publicacoes";

const projects = publicacoes.slice(0, 4);

export function ProjectCarousel() {
  const [reduced, setReduced] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [ref, api] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [AutoScroll({ speed: 0.7, playOnInit: false, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true })]);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    const auto = api?.plugins().autoScroll;
    if (!auto) return;
    if (reduced) auto.stop(); else auto.play();
    setPlaying(!reduced);
  }, [api, reduced]);
  const toggle = () => {
    const auto = api?.plugins().autoScroll;
    if (!auto) return;
    if (playing) auto.stop(); else auto.play();
    setPlaying(!playing);
  };
  return (
    <section className="border-y bg-secondary py-12 sm:py-16" aria-labelledby="projectos-titulo">
      <div className="site-container mb-7 flex items-end justify-between gap-4">
        <div><p className="section-eyebrow">Em comunidade</p><h2 id="projectos-titulo" className="section-title">Projectos que dão voz</h2></div>
        <div className="flex shrink-0 gap-2">
          <Button size="icon" variant="outline" aria-label="Projecto anterior" title="Projecto anterior" onClick={() => api?.scrollPrev()}><ArrowLeft /></Button>
          <Button size="icon" variant="outline" aria-label={playing ? "Pausar projectos" : "Reproduzir projectos"} title={playing ? "Pausar" : "Reproduzir"} onClick={toggle}>{playing ? <Pause /> : <Play />}</Button>
          <Button size="icon" variant="outline" aria-label="Projecto seguinte" title="Projecto seguinte" onClick={() => api?.scrollNext()}><ArrowRight /></Button>
        </div>
      </div>
      <div ref={ref} className="cursor-grab overflow-hidden active:cursor-grabbing" aria-label="Galeria de projectos">
        <div className="flex touch-pan-y">
          {[...projects, ...projects].map((p, i) => (
            <article key={`${p.id}-${i}`} className="min-w-0 flex-[0_0_85%] pl-5 sm:flex-[0_0_46%] lg:flex-[0_0_32%]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                <img src={p.imagem} alt={p.titulo} loading="lazy" draggable={false} className="h-full w-full object-cover" />
                <div className="hero-overlay absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground"><p className="mb-2 text-xs font-bold uppercase">{p.categoria}</p><h3 className="text-xl font-semibold leading-snug">{p.titulo}</h3></div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="site-container mt-6"><Button asChild variant="link" className="px-0"><Link to="/projectos">Todos os projectos <ArrowRight /></Link></Button></div>
    </section>
  );
}