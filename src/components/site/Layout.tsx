import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Facebook, Instagram, Youtube, Menu, X, ImageIcon } from "lucide-react";
import { navItems } from "./nav";

export function Logo({ size = "md" }: { size?: "md" | "sm" }) {
  // Espaço reservado para o logótipo oficial — substituir por <img src={logo} />
  const dim = size === "md" ? "h-14 w-14" : "h-11 w-11";
  return (
    <div className={`${dim} shrink-0 rounded-full border-2 border-dashed border-accent/60 bg-accent-soft flex items-center justify-center`} aria-label="Logótipo oficial da Muthiana Voice (espaço reservado)">
      <ImageIcon className="h-5 w-5 text-accent" aria-hidden />
    </div>
  );
}

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "YouTube", href: "#", icon: Youtube },
];

export function Socials({ inverted = false }: { inverted?: boolean }) {
  return (
    <ul className="flex items-center gap-2">
      {socials.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noreferrer" aria-label={label}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${inverted ? "border-primary-foreground/25 text-primary-foreground hover:bg-accent hover:border-accent" : "border-border text-primary hover:bg-primary hover:text-primary-foreground"}`}>
            <Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Navegação principal">
      <ul className="space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <Link to={to} onClick={onNavigate} activeOptions={{ exact: true }}
              className="group flex items-center gap-3 rounded-md border-l-[3px] border-transparent px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary"
              activeProps={{ className: "!border-accent bg-primary !text-primary-foreground hover:!bg-primary" }}>
              <Icon className="h-[18px] w-[18px] shrink-0" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="h-1 bg-accent" />
        <div className="flex items-center justify-between gap-4 px-4 py-3 lg:px-8">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <Logo />
            <div className="min-w-0">
              <p className="font-display text-lg font-semibold leading-tight text-primary sm:text-xl">Muthiana Voice</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Voz da Mulher</p>
            </div>
          </Link>
          <div className="hidden sm:block"><Socials /></div>
          <button onClick={() => setOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-md border text-primary lg:hidden" aria-label="Abrir menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div className="flex">
        <aside className="sticky top-[81px] hidden h-[calc(100vh-81px)] w-64 shrink-0 border-r bg-secondary px-4 py-6 lg:block">
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Menu</p>
          <NavList />
        </aside>

        {open && (
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-overlay/60" onClick={() => setOpen(false)} />
            <div className="absolute left-0 top-0 h-full w-72 max-w-[85vw] bg-background p-5 shadow-xl animate-in slide-in-from-left">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-primary">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="flex h-9 w-9 items-center justify-center rounded-md border"><X className="h-5 w-5" /></button>
              </div>
              <NavList onNavigate={() => setOpen(false)} />
              <div className="mt-8"><Socials /></div>
            </div>
          </div>
        )}

        <div className="min-w-0 flex-1">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="grid gap-10 px-5 py-12 md:grid-cols-3 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <div>
              <p className="font-display text-lg font-semibold">Muthiana Voice</p>
              <p className="text-xs uppercase tracking-[0.18em] text-accent">Voz da Mulher</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            Associação moçambicana sem fins lucrativos, de âmbito nacional, dedicada ao desenvolvimento e empoderamento da mulher e da rapariga.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">Navegação</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navItems.map((n) => (
              <li key={n.to}><Link to={n.to} className="text-primary-foreground/80 hover:text-accent">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">Canais oficiais</p>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="mb-4 inline-flex items-center gap-2 text-sm hover:text-accent">
            <Facebook className="h-4 w-4" /> Página oficial no Facebook
          </a>
          <Socials inverted />
          <p className="mt-3 text-xs text-primary-foreground/60">Outros canais oficiais em breve.</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t border-primary-foreground/15 px-5 py-5 text-xs text-primary-foreground/65 sm:flex-row sm:justify-between lg:px-10">
        <p>© {new Date().getFullYear()} Muthiana Voice – Voz da Mulher. Todos os direitos reservados.</p>
        <Link to="/privacidade" className="hover:text-accent">Política de Privacidade</Link>
      </div>
    </footer>
  );
}

export function EmBreve({ titulo }: { titulo: string }) {
  return (
    <Layout>
      <section className="px-5 py-20 lg:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Muthiana Voice</p>
        <h1 className="mt-2 text-4xl font-semibold text-primary">{titulo}</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">Esta página está em preparação e será disponibilizada em breve.</p>
      </section>
    </Layout>
  );
}
