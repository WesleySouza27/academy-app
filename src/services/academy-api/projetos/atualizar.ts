import { AxiosError } from "axios";
import { Projeto } from "../../../interfaces/projeto.interface";
import { academyApi } from "../http-config";

export async function atualizarProjeto(
  dados: Projeto,
  token: string
): Promise<string> {
  try {
    const resultado = await academyApi.put(`/projetos/${dados.id}`, dados, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return resultado.data.mensagem;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response!.data.mensagem;
    }

    return "Ocorreu um erro inesperado.";
  }
}
