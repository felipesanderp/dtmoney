import { BrowserRouter } from 'react-router-dom';
import Modal from 'react-modal'

import { AppProvider } from "./hooks";

import { GlobalStyle } from "./styles/global";
import { Routes } from './routes';

Modal.setAppElement('#root');

export function App() {
	
	return (
		<BrowserRouter>
			<AppProvider>
				<Routes />

				<GlobalStyle />
			</AppProvider>
		</BrowserRouter>
	);
}
