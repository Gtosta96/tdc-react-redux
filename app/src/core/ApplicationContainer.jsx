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
		setColor(color) {
			dispatch({ type: 'SET_COLOR', color });
		},
		saveCard(title, description, color) {
			dispatch({
				type: 'SAVE_CARD',
				title,
				description,
				color,
			});
		},
	};
};

export default ReactRedux.connect(mapStateToProps,	mapDispatchToProps)(ApplicationContainer);
