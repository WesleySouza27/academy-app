import axios, { AxiosError } from "axios";
import { Projeto } from "../../../interfaces/projeto.interface";

export async function cadastrarProjeto(dados: Projeto): Promise<string> {
  try {
    const resultado = await axios.post(
      "http://localhost:3030/projetos",
      dados,
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
