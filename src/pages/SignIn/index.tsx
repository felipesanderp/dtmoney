import { Container, Content } from './styles';

export function SignIn() {
  return (
    <Container>
      <Content>
        <form>
          <h1>Faça seu logon</h1>

          <input type="email" name="email" placeholder="E-mail" />
          <input type="password" name="Password" placeholder="Password" />

          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  )
}