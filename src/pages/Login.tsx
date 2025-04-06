import { Link, useNavigate } from "react-router-dom"; // Corrigido para "react-router-dom"
import { login } from "../services/academy-api/auth/login";
import { useEffect } from "react";
import { Form } from "../components/Form/styles";
import { Container } from "../components/Container/styled";

export function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("auth_user_token");

    if (authToken) {
      navigate("/projetos");
    }
  }, [navigate]);

  async function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const form = evento.currentTarget;

    const credenciais = {
      email: form["email"].value,
      senha: form["password"].value,
    };

    try {
      const resposta = await login(credenciais);

      if (!resposta.token) {
        alert(resposta.mensagem);
        return;
      }

      form.reset();
      localStorage.setItem("auth_user_token", resposta.token);
      alert("Login realizado com sucesso!");
      navigate("/projetos");
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      alert("Erro ao conectar ao servidor.");
    }
  }

  return (
    <Container>
      <div>
        <h1>Login</h1>

        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-mail: </label>
            <input type="email" name="email" required />
          </div>

          <div>
            <label htmlFor="password">Senha: </label>
            <input type="password" name="password" required />
          </div>

          <button type="submit">Acessar</button>
        </Form>

        <small>
          Não tem conta? <Link to="/cadastrar">Cadastre-se</Link>
        </small>
      </div>
    </Container>
  );
}