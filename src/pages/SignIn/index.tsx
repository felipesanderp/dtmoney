import { useForm } from 'react-hook-form';
import { FiLogIn } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';

import { Container, Content } from './styles';

export function SignIn() {
  const history = useNavigate();
  const { signIn } = useAuth();

  const { register, handleSubmit } = useForm();

  const handleSignIn = async (values: any) => {
    try {
      const { email, password } = values;

      await signIn({
        email,
        password
      });

      history("/dashboard")
    } catch {
      toast.error("E-mail ou senha incorretos!");
    }
  }

  return (
    <Container>
      <Content>
        <form  onSubmit={handleSubmit(handleSignIn)}>
          <h1>Faça seu logon</h1>

          <Input
            type="email"
            placeholder="E-mail"
            {...register("email")}
          />

          <Input
            type="password"
            placeholder="password"
            {...register("password")}
          />

          <button type="submit">Entrar</button>
        </form>
      </Content>

      <Link to="/signup">
        <FiLogIn />
        Criar Conta
      </Link>
    </Container>
  )
}