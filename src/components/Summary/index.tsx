import { useStatements } from '../../hooks/useStatements';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";
import formatValue from '../../utils/formatValue';

export function Summary() {
  const { statements, balance } = useStatements();

  const summary = statements.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {formatValue(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong className="withdraw">
          {formatValue(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {formatValue(balance)}
        </strong>
      </div>
    </Container>
  )
}
