import { AxiosError } from "axios";
import { academyApi } from "../http-config";

export async function excluirProjeto(
  projetoId: string,
  token: string
): Promise<string> {
  try {
    const resultado = await academyApi.delete(`/projetos/${projetoId}`, {
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
