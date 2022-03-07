import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-modal'
import { TransactionsProvider } from './hooks/useTransactions';

import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from "./styles/global";
import { Routes } from './routes';

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
		<BrowserRouter>
			<TransactionsProvider>
				<Header onOpenNewTransactionModal={handleOpenNewTrasactionModal} />
				<Routes />

				<NewTransactionModal 
					isOpen={isNewTrasactionModalOpen}
					onRequestClose={handleCloseNewTrasactionModal}
				/>

				<GlobalStyle />
			</TransactionsProvider>
		</BrowserRouter>
		
	);
}
