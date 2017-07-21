import React from 'react';
import * as ReactRedux from 'react-redux';

import Application from './Application';
import { saveCard, moveCard, removeCard } from '../redux/modules/reducer';

class ApplicationContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
	}

	componentWillMount() {
		// setInterval(() => {
		// 	this.setState({ counter: this.state.counter + 1 });
		// }, 1000);
	}
	render() {
		return (
			<div>
				{/* <div>{ this.state.counter }</div> */}
				<Application { ...this.props } />
			</div>
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
