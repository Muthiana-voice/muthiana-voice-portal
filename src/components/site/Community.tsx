import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, HandHeart, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Partners() {
  return (
    <section className="site-container py-12 sm:py-16" aria-labelledby="parceiros-titulo">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="section-eyebrow">Juntos, vamos mais longe</p><h2 id="parceiros-titulo" className="section-title">Parceiros</h2></div><Button asChild variant="link" className="px-0"><Link to="/parceiros">Seja nosso parceiro <ArrowRight /></Link></Button></div>
      <div className="mt-8 grid grid-cols-2 border-y sm:grid-cols-4">
        {[1, 2, 3, 4].map(n => <div key={n} className="flex min-h-28 items-center justify-center gap-3 border-r border-dashed px-4 text-muted-foreground last:border-r-0" aria-label="Espaço reservado para logótipo de parceiro"><ImageIcon className="h-6 w-6 shrink-0" /><span className="text-xs">Logótipo de parceiro</span></div>)}
      </div>
    </section>
  );
}

export function VolunteerForm() {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("As inscrições ainda não estão disponíveis. Os seus dados não foram enviados nem guardados.");
  }
  return (
    <section className="bg-primary-soft py-12" aria-labelledby="voluntario-titulo">
      <div className="site-container grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div><HandHeart className="mb-3 h-8 w-8 text-accent" /><p className="section-eyebrow">Faça parte</p><h2 id="voluntario-titulo" className="section-title">Seja Voluntário</h2><p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">Junte a sua voz à nossa. Pela mulher, pela rapariga e pela comunidade.</p></div>
        <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
          <label className="text-xs font-semibold text-primary">Nome completo<Input autoComplete="name" name="nome" required placeholder="O seu nome" className="mt-2 h-11 bg-background" /></label>
          <label className="text-xs font-semibold text-primary">Email<Input autoComplete="email" name="email" type="email" required placeholder="O seu email" className="mt-2 h-11 bg-background" /></label>
          <label className="text-xs font-semibold text-primary">Telefone <span className="font-normal text-muted-foreground">(opcional)</span><Input autoComplete="tel" name="telefone" type="tel" placeholder="O seu contacto" className="mt-2 h-11 bg-background" /></label>
          <div className="flex items-end"><Button type="submit" className="h-11 w-full">Quero participar <ArrowRight /></Button></div>
          <label className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground sm:col-span-2"><input type="checkbox" required className="mt-0.5 accent-primary" /><span>Li e aceito a <Link to="/privacidade" className="underline text-primary">Política de Privacidade</Link>.</span></label>
          {message && <p role="status" className="text-sm text-primary sm:col-span-2">{message}</p>}
        </form>
      </div>
    </section>
  );
}