import React from 'react';
import PropTypes from 'prop-types';

const Tdc = (props) => (
	<h1 className="title">
		<img width="50" alt="tdc-logo" src="../../tdc_logo.png" />
		{ props.title }
	</h1>
);

Tdc.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Tdc;
