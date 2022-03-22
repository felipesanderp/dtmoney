import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-modal'
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from "./styles/global";
import { Routes } from './routes';

Modal.setAppElement('#root');

export function App() {
	

	return (
		<BrowserRouter>
			<TransactionsProvider>
				<Routes />

				<GlobalStyle />
			</TransactionsProvider>
		</BrowserRouter>
		
	);
}
