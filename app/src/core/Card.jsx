import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, title, description, readOnly, activeColor, buttonText, onClick, children }) => {
	let titleInput;
	let descriptionInput;

	const _onClick = () => {
		if (titleInput.value && descriptionInput.value) {
			onClick(id, titleInput.value, descriptionInput.value, activeColor);
			titleInput.value = '';
			descriptionInput.value = '';
		}
	};

	return (
		<div className={ `col-md-12 card ${activeColor}` }>
			<div className="col-md-12">
				<input
					type="text"
					className="card-title col-md-12"
					placeholder="Título"
					defaultValue={ title }
					ref={ node => (titleInput = node) }
					disabled={ readOnly }
				/>
			</div>
			<div className="col-md-12">
				<textarea
					className="card-description"
					placeholder="Descrição"
					defaultValue={ description }
					ref={ node => (descriptionInput = node) }
					disabled={ readOnly }
				/>
			</div>
			<div className="col-md-12">
				{ children }
				{
					buttonText && onClick &&
					<button
						type="button"
						className="btn btn-link pull-right"
						onClick={ _onClick }
					>
						{ buttonText }
					</button>
				}
			</div>
		</div>
	);
};

Card.defaultProps = {
	title: '',
	description: '',
	buttonText: null,
	setColor: null,
	onClick: null,
	readOnly: false,
	children: null,
};

Card.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string,
	description: PropTypes.string,
	activeColor: PropTypes.string.isRequired,
	buttonText: PropTypes.string,
	readOnly: PropTypes.bool,
	children: PropTypes.node,
	onClick: PropTypes.func,
};

export default Card;
