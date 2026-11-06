import { Home, Users, FolderKanban, Newspaper, HandHeart, ShieldCheck, Mail, Handshake } from "lucide-react";

export const navItems = [
  { to: "/", label: "Página Inicial", icon: Home },
  { to: "/sobre", label: "Sobre Nós", icon: Users },
  { to: "/projectos", label: "Projectos", icon: FolderKanban },
  { to: "/publicacoes", label: "Publicações", icon: Newspaper },
  { to: "/voluntario", label: "Seja Voluntário", icon: HandHeart },
  { to: "/privacidade", label: "Política de Privacidade", icon: ShieldCheck },
  { to: "/contactos", label: "Contactos", icon: Mail },
  { to: "/parceiros", label: "Parceiros", icon: Handshake },
] as const;
