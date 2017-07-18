import React from 'react';
import * as ReactRedux from 'react-redux';

import Application from './Application';

class ApplicationContainer extends React.Component {
	render() {
		return (
			<Application { ...this.props } />
		);
	}
}

const mapStateToProps = (state) => {
	return (
		state
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		addCounter() {
			dispatch({ type: 'ADD_COUNTER', value: 1 });
		},
		subCounter() {
			dispatch({ type: 'SUB_COUNTER', value: 1 });
		},
		saveCounter(value) {
			dispatch({ type: 'SAVE_COUNTER', value });
		},
	};
};

export default ReactRedux.connect(mapStateToProps,	mapDispatchToProps)(ApplicationContainer);
