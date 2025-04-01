export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  ferramenta: string;
  status: "" | "finalizado" | "em_andamento";
}
