import axios from "axios";
import { Projeto } from "../../../interfaces/projeto.interface";

export async function listarProjetos(): Promise<Projeto[]> {
  try {
    const resposta = await axios.get("http://localhost:3030/projetos", {
      headers: {
        Authorization: "Bearer 8ec9f646-641b-419b-a31f-6a4dbe448246",
      },
    });

    return resposta.data.dados;
  } catch (err) {
    console.log(err);
    return [];
  }
}
