import { useForm } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { Container, Content } from './styles';

export function SignUp() {
  const history = useNavigate();

  const { register, handleSubmit } = useForm();

  const handleSignUp = async (values: any) => {
    try {
      const { name, email, password } = values;

      await api.post("/users", { name, email, password});

      toast.success("Cadastro realizado!");
      history("/")
    } catch {
      toast.error("Não foi possível se cadastrar! Verifique suas informações.");
    }
  }

  return (
    <Container>
      <Content>
        <form  onSubmit={handleSubmit(handleSignUp)}>
          <h1>Criar Conta</h1>

          <Input
            type="name"
            placeholder="Nome"
            {...register("name")}
          />

          <Input
            type="email"
            placeholder="E-mail"
            {...register("email")}
          />

          <Input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
      <Link to="/">
        <FiArrowLeft />
        Voltar para Logon
      </Link>
    </Container>
  )
}