import React from 'react';
import * as ReactRedux from 'react-redux';

import Application from './Application';
import { saveCard, moveCard } from '../redux/modules/reducer';

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
});

export default ReactRedux.connect(mapStateToProps,	mapDispatchToProps)(ApplicationContainer);
