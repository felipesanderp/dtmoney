import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import { useStatements } from '../../hooks/useStatements';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransacitionTypeContainer, RadioBox } from './styles'
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createStatement } = useStatements();

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');

  async function handleCreateNewStatement(event: FormEvent) {
    event.preventDefault();

    await createStatement({
      description,
      amount,
      type,
    });
    
    setDescription('');
    setAmount(0);
    setType('deposit');
    onRequestClose();
  }
  
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Cadastro de transação</h2>

        <input
          placeholder="Descrição"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransacitionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransacitionTypeContainer>

        <button type="submit" onClick={handleCreateNewStatement}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  )	
}