import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import ApplicationContainer from './core/ApplicationContainer';

const store = configureStore();

ReactDOM.render(
	<Provider store={ store }>
		<ApplicationContainer />
	</Provider>,
	document.getElementById('app')
);
