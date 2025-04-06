import { academyApi } from "../http-config";
import { Avaliacao } from "../../../interfaces/projeto.interface"; 

export async function listarAvaliacoes(token: string): Promise<Avaliacao[]> {
  try {
    const resposta = await academyApi.get("/avaliacoes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return resposta.data.dados;
  } catch (err) {
    console.error("Erro ao listar avaliações:", err);
    return [];
  }
}