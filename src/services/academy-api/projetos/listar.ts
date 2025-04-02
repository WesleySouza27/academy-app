import { Projeto } from "../../../interfaces/projeto.interface";
import { academyApi } from "../http-config";

export async function listarProjetos(token: string): Promise<Projeto[]> {
  try {
    const resposta = await academyApi.get("/projetos", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return resposta.data.dados;
  } catch (err) {
    console.log(err);
    return [];
  }
}
