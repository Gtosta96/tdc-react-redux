import React from 'react';
import PropTypes from 'prop-types';

const ColorButton = ({ color, activeColor, setColor }) => (
	<button
		type="button"
		className={ `btn btn-card-options animate ${color} ${activeColor === color ? 'activeColor' : ''}` }
		onClick={ () => (setColor(color)) }
	/>
);

ColorButton.propTypes = {
	color: PropTypes.string.isRequired,
	setColor: PropTypes.func.isRequired,
	activeColor: PropTypes.string.isRequired,
};

export default ColorButton;
