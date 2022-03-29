import { useStatements, Statement } from '../../hooks/useStatements';
import { FiTrash2 } from 'react-icons/fi';
import formatValue from "../../utils/formatValue";
import { NoStatementPage } from '../NoStatementPage';

import { Container } from "./styles";

export function TransactionsTable() {
  const { statements, deleteStatement } = useStatements();

  return (
    <Container>
      { statements.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Tipo</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
          {statements.map((statement: Statement) => (
              <tr key={statement.id}>
                <td>{statement.description}</td>
                <td className={statement.type}>
                  {formatValue(statement.amount)}
                </td>
                <td>{statement.type && statement.type === 'deposit' ? 'ENTRADA' : 'SAÍDA'}</td>
                <td>
                  {statement.created_at && new Date(statement.created_at).toLocaleDateString(
                    'pt-BR',
                  )}  
                </td>
                <td>
                  <button onClick={() => deleteStatement(statement.id)}>
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        ) 
        : <NoStatementPage />
      }
    </Container>
  )
}