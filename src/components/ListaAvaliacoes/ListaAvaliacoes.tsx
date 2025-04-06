import { Avaliacao } from "../../interfaces/projeto.interface";

interface ListaAvaliacoesProps {
  avaliacoes: Avaliacao[];
}

export function ListaAvaliacoes({ avaliacoes }: ListaAvaliacoesProps) {
  return (
    <ul>
      {avaliacoes.map((avaliacao) => (
        <li key={avaliacao.id}>
          <h3>{avaliacao.titulo}</h3>
          <p>Nota: {avaliacao.nota}</p>
          <p>{avaliacao.descricao}</p>
          <p>Data: {new Date(avaliacao.data).toLocaleDateString()}</p>
        </li>
      ))}
    </ul>
  );
}