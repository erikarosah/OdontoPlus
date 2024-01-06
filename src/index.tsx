import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles';
import { Routes } from './routes';
import { Header } from './components/header/Header';
import { OpenMenuProvider } from './context/openMenu';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<GlobalStyle/>
		<OpenMenuProvider>
			<Header/>
			<Routes/>
		</OpenMenuProvider>
	</React.StrictMode>
);