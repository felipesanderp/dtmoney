import { useState } from 'react';
import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
	const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);

  function handleOpenNewTrasactionModal() {
    setIsNewTrasactionModalOpen(true);
  }

  function handleCloseNewTrasactionModal() {
    setIsNewTrasactionModalOpen(false);
  }

	return (
		<>
			<Header onOpenNewTransactionModal={handleOpenNewTrasactionModal} />
			<Dashboard />

			<Modal 
         	isOpen={isNewTrasactionModalOpen} 
          onRequestClose={handleCloseNewTrasactionModal}
        >
          <h2>Cadastro de transação</h2>
        </Modal>
			<GlobalStyle />
		</>
	);
}
