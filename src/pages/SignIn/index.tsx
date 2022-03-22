import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';

import { Container, Content } from './styles';

export function SignIn() {
  const history = useNavigate();

  const { register, handleSubmit } = useForm();

  const handleSignIn = async (values: any) => {
    await new Promise(resolve => {setTimeout(resolve, 2000)});

    console.log(values);

    history('/dashboard');
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