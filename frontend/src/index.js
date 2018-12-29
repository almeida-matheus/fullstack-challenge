import React from 'react';
import {
	render
} from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getRoutes } from './routes';
import configureStore from './store';
import './styles/index.scss';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

render(
	<Provider store={store}>
		<BrowserRouter>
			{
				getRoutes(store)
			}
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);

serviceWorker.unregister();
