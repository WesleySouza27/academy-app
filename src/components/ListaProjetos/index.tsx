import { Projeto as ProjetoType } from "../../interfaces/projeto.interface";
import { Projeto } from "../Projeto";

interface ListaProjetosProps {
  projetos: ProjetoType[];
  handleUpdateClick: (projeto: ProjetoType) => void;
  handleDeleteClick: (projeto: ProjetoType) => void;
}

export function ListaProjetos({
  projetos,
  handleUpdateClick,
  handleDeleteClick,
}: ListaProjetosProps) {
  return (
    <ul>
      {projetos.map((projeto) => (
        <Projeto
          key={projeto.id}
          projeto={projeto}
          handleUpdateClick={handleUpdateClick}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
    </ul>
  );
}
