import React from 'react';
import PropTypes from 'prop-types';

const Application = (props) => {
	const showSavedCounters = (counters) => {
		const length = counters.length - 1;
		const presentational = counters.map((savedCounter, index) => {
			return index !== length ? `${savedCounter}, ` : savedCounter;
		});

		return <div>[ { presentational } ]</div>;
	};

	return (
		<div className="container">
			<h1 className="title">
				<img width="50" alt="tdc-logo" src="../../tdc_logo.png" /> TDC São Paulo - React + Redux
			</h1>
			<div className="text-center">
				<h1 className="counter">{ props.counter }</h1>
				<button className="btn tdc-button btn-link" onClick={ () => { props.addCounter(); } }>➕</button>
				<button className="btn tdc-button btn-link" onClick={ () => { props.subCounter(); } }>➖</button>
				<button className="btn tdc-button btn-link" onClick={ () => { props.saveCounter(props.counter); } }>✔️</button>

				<div className="btn tdc-button saved-counters">
					{ showSavedCounters(props.savedCounters) }
				</div>
			</div>
		</div>
	);
};

Application.propTypes = {
	counter: PropTypes.number.isRequired,
	savedCounters: PropTypes.arrayOf(PropTypes.number).isRequired,
	addCounter: PropTypes.func.isRequired,
	subCounter: PropTypes.func.isRequired,
	saveCounter: PropTypes.func.isRequired,
};

export default Application;
