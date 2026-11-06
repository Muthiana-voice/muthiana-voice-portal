import destaque from "@/assets/destaque.jpg";
import educacao from "@/assets/educacao.jpg";
import saude from "@/assets/saude.jpg";
import lideranca from "@/assets/lideranca.jpg";

// Conteúdo demonstrativo. Futuramente virá do painel administrativo
// (campo `destaque: true` define a publicação do banner).
export type Publicacao = {
  id: string;
  categoria: string;
  titulo: string;
  resumo: string;
  data: string;
  imagem: string;
  destaque?: boolean;
};

export const publicacoes: Publicacao[] = [
  { id: "0", destaque: true, categoria: "Projecto em destaque", titulo: "Rodas de conversa comunitárias: a voz da mulher no centro das decisões", resumo: "Encontros comunitários que criam espaços seguros para mulheres e raparigas partilharem experiências, aprenderem sobre os seus direitos e participarem activamente na vida da comunidade.", data: "2026-10-28", imagem: destaque },
  { id: "1", categoria: "Educação", titulo: "Raparigas na escola: apoio à continuidade dos estudos", resumo: "Uma iniciativa de acompanhamento escolar que incentiva raparigas a permanecerem na escola.", data: "2026-10-24", imagem: educacao },
  { id: "2", categoria: "Saúde", titulo: "Saúde íntima e reprodutiva: informação que protege", resumo: "Sessões de sensibilização sobre saúde íntima e reprodutiva realizadas em parceria com agentes comunitários.", data: "2026-10-20", imagem: saude },
  { id: "3", categoria: "Liderança", titulo: "Formação de jovens líderes comunitárias", resumo: "Oficinas práticas sobre liderança, participação cívica e comunicação nas comunidades.", data: "2026-10-15", imagem: lideranca },
  { id: "4", categoria: "Campanha", titulo: "Campanha pela igualdade de género nas comunidades", resumo: "Mensagens de sensibilização sobre igualdade de oportunidades entre mulheres e homens.", data: "2026-10-10", imagem: destaque },
  { id: "5", categoria: "Direitos Humanos", titulo: "Conhecer os direitos é o primeiro passo", resumo: "Material educativo sobre direitos da mulher e da rapariga em linguagem simples e acessível.", data: "2026-10-04", imagem: lideranca },
  { id: "6", categoria: "Evento", titulo: "Encontro sobre participação comunitária", resumo: "Um momento de diálogo entre mulheres, líderes locais e jovens sobre desenvolvimento local.", data: "2026-09-29", imagem: saude },
  { id: "7", categoria: "Artigo", titulo: "Porque a educação da rapariga transforma comunidades", resumo: "Uma reflexão sobre o papel da educação na construção de sociedades mais inclusivas.", data: "2026-09-22", imagem: educacao },
  { id: "8", categoria: "Comunicado", titulo: "Muthiana Voice abre inscrições para voluntariado", resumo: "Convidamos pessoas interessadas a juntarem-se às nossas actividades como voluntárias.", data: "2026-09-15", imagem: lideranca },
  { id: "9", categoria: "Desenvolvimento Sustentável", titulo: "Mulheres e desenvolvimento sustentável", resumo: "Como a participação feminina fortalece iniciativas locais de desenvolvimento sustentável.", data: "2026-09-08", imagem: destaque },
  { id: "10", categoria: "Actividade", titulo: "Sessão de leitura e diálogo com raparigas", resumo: "Uma actividade que estimula o gosto pela leitura e a expressão de ideias.", data: "2026-09-01", imagem: educacao },
];

export const formatarData = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" });
