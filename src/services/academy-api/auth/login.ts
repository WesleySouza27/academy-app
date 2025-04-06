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
    if (error instanceof AxiosError && error.response) {
      return {
        mensagem: error.response.data.mensagem || "Erro ao realizar login.",
      };
    }

    return {
      mensagem: "Ocorreu um erro inesperado.",
    };
  }
}