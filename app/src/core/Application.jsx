import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import Tdc from './Tdc';

const Application = (props) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<h2># todo</h2>
					<Card colors={ props.colors } />
				</div>
				<div className="col-md-6">
					<div className="col-md-12">
						<h2># done</h2>
					</div>
				</div>
			</div>
			<Tdc title="TDC SP - React + Redux" />
		</div>
	);
};

Application.propTypes = {
	colors: PropTypes.shape({
		available: PropTypes.arrayOf(PropTypes.string).isRequired,
		active: PropTypes.string.isRequired,
	}).isRequired,
	setColor: PropTypes.func.isRequired,
};

export default Application;
