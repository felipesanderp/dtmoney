import { FiAlertCircle } from 'react-icons/fi';

import { Container } from './styles';

export function NoStatementPage() {
  return (
    <Container>
      <FiAlertCircle size={32} />
    <p>
      Sem transações
    </p>
    </Container>
  )
}