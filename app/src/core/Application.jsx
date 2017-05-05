/* eslint-disable */
import React from 'react';

const Application = (props) => {

	const showSavedCounters = () => {
		const length = props.savedCounters.length - 1;
		const presentational = props.savedCounters.map((savedCounter, index) => {
			return index !== length ? `${savedCounter}, ` : savedCounter;
		});

		return <div>[ { presentational } ]</div>
	}

	return (
		<div className="container">
			<h1 className="title">
				<img width="50" alt="tdc-logo" src="../../tdc_logo.png" /> TDC Floripa - React + Redux
			</h1>
			<div className="text-center">
				<h1 className="counter">{ props.counter }</h1>
				<button className="btn tdc-button btn-link" onClick={ () => props.addCounter() }>➕</button>
				<button className="btn tdc-button btn-link" onClick={ () => props.subCounter() }>➖</button>
				<button className="btn tdc-button btn-link" onClick={ () => props.saveCounter(props.counter) }>✔️</button>

				<div className="btn tdc-button saved-counters">
					{ showSavedCounters() }
				</div>
			</div>
		</div>
	);
};

Application.propTypes = {
	counter: React.PropTypes.number.isRequired,
	addCounter: React.PropTypes.func.isRequired,
	subCounter: React.PropTypes.func.isRequired
};

export default Application;
