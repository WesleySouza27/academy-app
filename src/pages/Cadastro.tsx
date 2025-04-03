import { Link, useNavigate } from "react-router";
import { cadastrarAluno } from "../services/academy-api/alunos/cadastrar";
import { Container } from "../components/Container/styled";
import { Form } from "../components/Form/styles";

export function Cadastro() {
  const navigate = useNavigate();

  async function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const form = evento.currentTarget;

    const dados = {
      nome: form["full-name"].value,
      email: form["email"].value,
      senha: form["password"].value,
    };

    const resposta = await cadastrarAluno(dados);

    alert(resposta.mensagem);

    if (resposta.sucesso) {
      form.reset();
      navigate("/");
    }
  }

  return (
    <Container>
      <div>
        <h1>Cadastro</h1>

        <Form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Nome Completo: </label>
            <input type="text" name="full-name" required />
          </div>

          <div>
            <label htmlFor="">E-mail: </label>
            <input type="email" name="email" required />
          </div>

          <div>
            <label htmlFor="">Senha: </label>
            <input type="passowrd" name="password" required />
          </div>

          <button type="submit">Cadastrar-se</button>
        </Form>

        <small>
          Já possui conta? <Link to="/">Acesse</Link>
        </small>
      </div>
    </Container>
  );
}
