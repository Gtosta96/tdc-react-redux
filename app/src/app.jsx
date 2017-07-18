import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { AppContainer } from 'react-hot-loader';

import configureStore from './redux/configureStore';
import ApplicationContainer from './core/ApplicationContainer';

const store = configureStore();

const render = Component => (
	ReactDOM.render(
		<AppContainer>
			<Provider store={ store }>
				<Component />
			</Provider>
		</AppContainer>,
		document.getElementById('app')
	)
);

render(ApplicationContainer);
if (module.hot) module.hot.accept('./core/ApplicationContainer', () => { console.log('yho'); render(ApplicationContainer) });