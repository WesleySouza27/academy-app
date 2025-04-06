import { useNavigate } from "react-router-dom";

export async function realizarLogin(
  email: string,
  senha: string,
  navigate: ReturnType<typeof useNavigate>
) {
  try {
    const resposta = await fetch("http://localhost:3030/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    });

    const data = await resposta.json();
    console.log("Resposta do servidor:", data); // Log para depuração

    if (resposta.ok && data.sucesso && data.dados?.token) {
      localStorage.setItem("auth_user_token", data.dados.token);
      alert("Login realizado com sucesso!");
      navigate("/avaliacoes");
    } else {
      alert("Erro no login: " + (data.mensagem || "Credenciais inválidas"));
    }
  } catch (err) {
    console.error("Erro ao realizar login:", err);
    alert("Erro ao conectar ao servidor.");
  }
}