import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

function configureStore (initialState) {
	const loggerMiddleware = createLogger();
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	);

	return store;
}

export default configureStore;