import React from 'react';
import PropTypes from 'prop-types';
import ColorButton from './ColorButton';

const Card = ({ colors }) => {
	console.log(colors);
	let title;
	let description;

	return (
		<div className={ `col-md-12 card` }>
			<div className="col-md-12">
				<input type="text" className="card-title col-md-12" placeholder="Título" ref={ node => (title = node) } />
			</div>
			<div className="col-md-12">
				<textarea className="card-description" placeholder="Descrição" ref={ node => (description = node) } />
			</div>
			<div className="col-md-12">
				{
					colors.available.map((color) => (
						<ColorButton
							key={ color }
							color={ color }
						/>
					))
				}
				<button type="button" className="btn btn-link pull-right" onClick={ () => (saveCard()) }>salvar</button>
			</div>
		</div>
	);
};

Card.propTypes = {
	colors: PropTypes.shape({
		available: PropTypes.arrayOf(PropTypes.string).isRequired,
		active: PropTypes.string.isRequired,
	}).isRequired,
	setColor: PropTypes.func.isRequired,
};

export default Card;
