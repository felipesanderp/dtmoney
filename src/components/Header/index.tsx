import { Link } from "react-router-dom"
import logoImg from "../../assets/logo.svg"

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="header-items">
          <img src={logoImg} alt="dt money" />
          <nav>
            <Link to="/">Listagem</Link>
            <Link to="/import">Importar</Link>
          </nav>
        </div>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
