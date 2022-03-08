import { Transaction, useTransactions } from '../../hooks/useTransactions';
import formatValue from '../../utils/formatValue';

import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction: Transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formatValue(transaction.value)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Date(transaction.created_at).toLocaleDateString(
                  'pt-BR',
                )}  
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}