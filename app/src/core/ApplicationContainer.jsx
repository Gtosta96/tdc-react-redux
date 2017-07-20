import React from 'react';
import * as ReactRedux from 'react-redux';

import Application from './Application';
import { saveCard, moveCard, removeCard } from '../redux/modules/reducer';

class ApplicationContainer extends React.Component {
	render() {
		return (
			<Application { ...this.props } />
		);
	}
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
	setColor(color) {
		dispatch({ type: 'SET_COLOR', payload: color });
	},
	saveCard(id, title, description, color) {
		dispatch(saveCard(id, title, description, color));
	},
	moveCard(id, title, description, color) {
		dispatch(moveCard(id, title, description, color));
	},
	removeCard(id) {
		dispatch(removeCard(id));
	},
});

export default ReactRedux.connect(mapStateToProps,	mapDispatchToProps)(ApplicationContainer);
