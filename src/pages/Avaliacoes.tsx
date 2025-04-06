import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Corrigido para "react-router-dom"
import { listarAvaliacoes } from "../services/academy-api/avaliacoes/listarAvaliacoes"; 
import { Avaliacao } from "../interfaces/projeto.interface";  // Corrigido para "avaliacao.interface"
import { ListaAvaliacoes } from "../components/ListaAvaliacoes/ListaAvaliacoes"; 

export function Avaliacoes() {
  const [loading, setLoading] = useState(true);
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const navigate = useNavigate(); // Removido o argumento "/avaliacoes"

  useEffect(() => {
    const authToken = localStorage.getItem("auth_user_token");

    if (!authToken) {
      alert("É preciso estar logado para acessar essa página");
      navigate("/"); // Redireciona para a página de login
      return;
    }

    setLoading(true);

    listarAvaliacoes(authToken)
      .then((dados) => {
        setAvaliacoes(dados);
      })
      .catch((err) => {
        console.error("Erro ao carregar avaliações:", err);
        alert("Erro ao carregar avaliações.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);

  return (
    <div>
      <h1>Minhas Avaliações</h1>
      {loading ? <p>Carregando avaliações...</p> : <ListaAvaliacoes avaliacoes={avaliacoes} />}
    </div>
  );
}