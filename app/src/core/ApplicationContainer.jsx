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
		}
	};
};

export default ReactRedux.connect(mapStateToProps,	mapDispatchToProps)(ApplicationContainer);
