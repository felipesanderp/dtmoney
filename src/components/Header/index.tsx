import { NavLink, useLocation } from "react-router-dom"
import logoImg from "../../assets/logo.svg"

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal?: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  const { pathname } = useLocation();

  return (
    <Container>
      <Content>
        <div className="header-items">
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
