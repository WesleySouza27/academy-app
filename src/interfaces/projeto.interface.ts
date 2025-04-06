export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  ferramenta: string;
  status: "" | "finalizado" | "em_andamento";
}


export interface Avaliacao {
  id: string;
  titulo: string;
  nota: number;
  descricao: string;
  data: string;
}