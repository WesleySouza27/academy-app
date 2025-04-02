import { AxiosError } from "axios";
import { academyApi } from "../http-config";

export async function login(dados: {
  email: string;
  senha: string;
}): Promise<{ token?: string; mensagem: string }> {
  try {
    const resultado = await academyApi.post("/login", dados);

    return {
      token: resultado.data.dados.token,
      mensagem: resultado.data.mensagem,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        mensagem: error.response!.data.mensagem,
      };
    }

    return {
      mensagem: "Ocorreu um erro inesperado.",
    };
  }
}
