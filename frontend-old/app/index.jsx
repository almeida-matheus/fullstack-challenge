import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { getRoutes } from './routes';
import configureStore from './store';
// eslint-disable-next-line
import globalStyl from './styles/global.styl';
// eslint-disable-next-line
import variablesStyl from './styles/variables.styl';

const store = configureStore();


render(
	<Provider store={store}>
		<Router history={browserHistory} routes={getRoutes(store)} />
	</Provider>,
	document.getElementById('app')
);
