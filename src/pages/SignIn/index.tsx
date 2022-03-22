import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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
    } catch (err) {
      alert(err);
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
    </Container>
  )
}