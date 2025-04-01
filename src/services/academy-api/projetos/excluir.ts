import axios, { AxiosError } from "axios";

export async function excluirProjeto(projetoId: string): Promise<string> {
  try {
    const resultado = await axios.delete(
      `http://localhost:3030/projetos/${projetoId}`,
      {
        headers: {
          Authorization: "Bearer 8ec9f646-641b-419b-a31f-6a4dbe448246",
        },
      }
    );

    return resultado.data.mensagem;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response!.data.mensagem;
    }

    return "Ocorreu um erro inesperado.";
  }
}
