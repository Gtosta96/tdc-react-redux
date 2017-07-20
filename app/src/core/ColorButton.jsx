import React from 'react';
import PropTypes from 'prop-types';

const ColorButton = ({ color, setColor }) => (
	<button type="button" className={ `btn btn-card-options animate ${color}` } onClick={ () => (setColor(color)) } />
);

ColorButton.propTypes = {
	color: PropTypes.string.isRequired,
	setColor: PropTypes.func.isRequired,
};

export default ColorButton;
