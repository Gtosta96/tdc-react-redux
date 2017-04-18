/* eslint-disable */
import React from 'react';

const Application = (props) => {
	return (
		<div>
			<span>TDC - React Redux!</span>
			<div>{ props.counter }</div>
			<button onClick={ () => props.addCounter() }>Somar</button>
		</div>
	);
};

Application.propTypes = {
	counter: React.PropTypes.number.isRequired,
	addCounter: React.PropTypes.func.isRequired
};

export default Application;
