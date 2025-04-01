import { Projeto as ProjetoType } from "../../interfaces/projeto.interface";

interface ProjetoProps {
  projeto: ProjetoType;
  handleUpdateClick: (projeto: ProjetoType) => void;
  handleDeleteClick: (projeto: ProjetoType) => void;
}

export function Projeto({
  projeto,
  handleUpdateClick,
  handleDeleteClick,
}: ProjetoProps) {
  return (
    <li>
      <div>
        <h3>{projeto.titulo}</h3>
        <p>{projeto.descricao}</p>
        <p>{projeto.ferramenta}</p>
        <p>{projeto.status}</p>
      </div>
      <div>
        <button
          onClick={() => {
            handleUpdateClick(projeto);
          }}
        >
          Atualizar
        </button>
        <button
          onClick={() => {
            handleDeleteClick(projeto);
          }}
        >
          Excluir
        </button>
      </div>
    </li>
  );
}
