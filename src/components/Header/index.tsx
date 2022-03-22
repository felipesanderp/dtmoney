import { NavLink, useLocation } from "react-router-dom"
import logoImg from "../../assets/logo.svg"
import { useAuth } from "../../hooks/useAuth";

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal?: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  const { pathname } = useLocation();
  const { signOut } = useAuth();

  return (
    <Container>
      <Content>
        <div className="header-items">
          <button type="button" onClick={() => signOut()}>Sair</button>
          <img src={logoImg} alt="dt money" />
          <nav>
            <NavLink to="/dashboard">Listagem</NavLink>
            <NavLink to="/import">Importar</NavLink>
          </nav>
        </div>
        { pathname === "/dashboard" && (
          <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transação
          </button>
        )}
      </Content>
    </Container>
  )
}
