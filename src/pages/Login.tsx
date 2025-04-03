import { Link, useNavigate } from "react-router";
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

    const resposta = await login(credenciais);

    if (!resposta.token) {
      alert(resposta.mensagem);
      return;
    }

    form.reset();
    localStorage.setItem("auth_user_token", resposta.token);
    navigate("/projetos");
  }

  return (
    <Container>
      <div>
        <h1>Login</h1>

        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">E-mail: </label>
            <input type="text" name="email" />
          </div>

          <div>
            <label htmlFor="">Senha: </label>
            <input type="password" name="password" />
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
