import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, ImageIcon, ArrowUpRight } from "lucide-react";
import { siFacebook, siWhatsapp, siInstagram } from "simple-icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "./nav";

export function Logo({ size = "md" }: { size?: "md" | "sm" }) {
  return <div className={`flex items-center justify-center gap-3 border border-dashed border-primary/30 bg-background ${size === "md" ? "h-14 w-48 sm:w-60" : "h-12 w-48"}`} aria-label="Logótipo oficial da Muthiana Voice (espaço reservado)"><ImageIcon className="h-5 w-5 shrink-0 text-accent" aria-hidden /><div><p className="font-display text-lg font-semibold leading-tight text-primary">Muthiana Voice</p><p className="text-[10px] uppercase text-muted-foreground">Voz da Mulher</p></div></div>;
}
const socials = [{ label: "Facebook", icon: siFacebook }, { label: "WhatsApp", icon: siWhatsapp }, { label: "Instagram", icon: siInstagram }];
export function Socials({ inverted = false }: { inverted?: boolean }) {
  return <ul className="flex items-center gap-2">{socials.map(({ label, icon }) => <li key={label}><Button variant="ghost" size="icon" disabled title={`${label}: endereço oficial por disponibilizar`} aria-label={`${label}: endereço oficial por disponibilizar`} className={inverted ? "text-primary-foreground disabled:opacity-70" : "text-primary disabled:opacity-70"}><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d={icon.path} /></svg></Button></li>)}</ul>;
}
function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return <nav aria-label="Navegação principal"><ul className="space-y-1">{navItems.map(({ to, label, icon: Icon }) => <li key={to}><Link to={to} onClick={onNavigate} activeOptions={{ exact: true }} className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-primary hover:bg-primary-soft" activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary" }}><Icon className="h-[18px] w-[18px] shrink-0" />{label}</Link></li>)}</ul></nav>;
}
export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background">
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="site-container grid h-24 grid-cols-[1fr_auto_1fr] items-center gap-3">
        <Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><Button variant="ghost" size="icon" className="h-11 w-11 justify-self-start text-primary" aria-label="Abrir menu"><Menu className="size-6" /></Button></SheetTrigger><SheetContent side="left" aria-describedby={undefined}><SheetTitle className="mb-8 font-display text-2xl text-primary">Muthiana Voice</SheetTitle><NavList onNavigate={() => setOpen(false)} /><div className="mt-8 border-t pt-6"><Socials /></div></SheetContent></Sheet>
        <Link to="/" aria-label="Muthiana Voice — Página Inicial"><Logo /></Link>
        <div className="hidden justify-self-end sm:block"><Socials /></div>
      </div>
    </header>
    <div className="ticker overflow-hidden border-b bg-primary py-3 text-primary-foreground" aria-label="Muthiana Voice é uma organização religiosa...">
      <div className="ticker-track" aria-hidden>{[0, 1].map(n => <div key={n} className="flex shrink-0 items-center gap-12 px-6 text-xs sm:text-sm">{[0, 1, 2].map(i => <span key={i} className="flex items-center gap-12"><span>Muthiana Voice é uma organização religiosa...</span><span className="text-accent">✦</span></span>)}</div>)}</div>
    </div>
    <main>{children}</main><Footer />
  </div>;
}
const footerNav = [{ to: "/", label: "Página Inicial" }, { to: "/sobre", label: "Sobre Nós" }, { to: "/contactos", label: "Contato" }, { to: "/privacidade", label: "Política de Privacidade" }, { to: "/parceiros", label: "Parceiros" }] as const;
function Footer() {
  return <footer className="bg-primary text-primary-foreground"><div className="site-container grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_0.7fr]"><div><Logo size="sm" /><p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/75">Associação moçambicana sem fins lucrativos, de âmbito nacional, dedicada ao desenvolvimento e empoderamento da mulher e da rapariga.</p></div><div><p className="mb-5 text-xs font-bold uppercase text-accent">Navegação</p><ul className="space-y-3 text-sm">{footerNav.map(n => <li key={n.to}><Link to={n.to} className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent">{n.label}<ArrowUpRight className="size-3" /></Link></li>)}</ul></div><div><p className="mb-4 text-xs font-bold uppercase text-accent">Redes sociais</p><Socials inverted /><p className="mt-3 text-xs leading-relaxed text-primary-foreground/65">Canais oficiais em breve.</p></div></div><div className="border-t border-primary-foreground/15"><div className="site-container flex flex-wrap justify-between gap-3 py-5 text-xs text-primary-foreground/65"><p>© {new Date().getFullYear()} Muthiana Voice – Voz da Mulher.</p><p>Todos os direitos reservados.</p></div></div></footer>;
}
export function EmBreve({ titulo }: { titulo: string }) {
  return <Layout><section className="site-container py-20"><p className="section-eyebrow">Muthiana Voice</p><h1 className="mt-2 text-4xl font-semibold text-primary">{titulo}</h1><p className="mt-4 max-w-xl text-muted-foreground">Esta página está em preparação e será disponibilizada em breve.</p></section></Layout>;
}
