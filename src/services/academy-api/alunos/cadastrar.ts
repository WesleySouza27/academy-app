import { AxiosError } from "axios";
import { academyApi } from "../http-config";

export async function cadastrarAluno(dados: {
  nome: string;
  email: string;
  senha: string;
}): Promise<{
  sucesso: boolean;
  mensagem: string;
}> {
  try {
    const resultado = await academyApi.post("alunos", dados);

    return {
      sucesso: resultado.data.sucesso,
      mensagem: resultado.data.mensagem,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        sucesso: error.response!.data.sucesso,
        mensagem: error.response!.data.mensagem,
      };
    }

    return {
      sucesso: false,
      mensagem: "Ocorreu um erro inesperado.",
    };
  }
}
