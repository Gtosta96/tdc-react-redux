/* eslint-disable */
import React from 'react';

const Application = (props) => {
	return (
		<div className="container">
			<h1 className="title">
				<img width="50" src="../../tdc_logo.png" /> TDC Floripa - React + Redux
			</h1>
			<div className="text-center">
				<h1 className="counter">{ props.counter }</h1>
				<button className="btn tdc-button btn-link" onClick={ () => props.addCounter() }>➕</button>
				<button className="btn tdc-button btn-link" onClick={ () => props.removeCounter() }>➖</button>
			</div>			
		</div>
	);
};

Application.propTypes = {
	counter: React.PropTypes.number.isRequired,
	addCounter: React.PropTypes.func.isRequired,
	removeCounter: React.PropTypes.func.isRequired
};

export default Application;
