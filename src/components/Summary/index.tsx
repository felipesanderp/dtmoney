import { useStatements } from '../../hooks/useStatements';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";
//import formatValue from '../../utils/formatValue';

export function Summary() {
  const { balance } = useStatements();

  // const summary = transactions.reduce((acc, transaction) => {
  //   if (transaction.type === 'income') {
  //     acc.incomes += Number(transaction.value);
  //     acc.total += Number(transaction.value);
  //   } else {
  //     acc.outcomes += Number(transaction.value);
  //     acc.total -= Number(transaction.value);
  //   }

  //   return acc;
  // }, {
  //   incomes: 0,
  //   outcomes: 0,
  //   total: 0
  // })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {balance}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong className="withdraw">
          0
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          0
        </strong>
      </div>
    </Container>
  )
}
