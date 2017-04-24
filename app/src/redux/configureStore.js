import * as Redux from 'redux';
import createLogger from 'redux-logger';

import reducer from './modules/reducer';

const middlewares = [
	createLogger()
];

export default function configureStore() {
	return Redux.createStore(
		reducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		Redux.applyMiddleware(...middlewares)
	);
}
