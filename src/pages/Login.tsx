import { useNavigate } from "react-router";
import { login } from "../services/academy-api/auth/login";
import { useEffect } from "react";

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
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">E-mail: </label>
          <input type="text" name="email" />
        </div>

        <div>
          <label htmlFor="">Senha: </label>
          <input type="password" name="password" />
        </div>

        <button type="submit">Acessar</button>
      </form>
    </>
  );
}
