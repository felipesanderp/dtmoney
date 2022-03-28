import { NavLink, useLocation } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth";
import { FiPower, FiPlus } from 'react-icons/fi';

import logoImg from "../../assets/logo.svg"

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
          <img src={logoImg} alt="dt money" />
          <nav>
            <NavLink to="/dashboard">Listagem</NavLink>
            <NavLink to="/import">Importar</NavLink>
          </nav>
        </div>
        <div>
          { pathname === "/dashboard" && (
            <button type="button" onClick={onOpenNewTransactionModal}>
              <FiPlus />
            </button>
          )}

          <button type="button" onClick={() => signOut()}>
            <FiPower />
          </button>
        </div>
      </Content>
    </Container>
  )
}
