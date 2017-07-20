import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, title, description, readOnly, activeColor, clickText, onClick, removeText, onRemove, children }) => {
	let titleInput;
	let descriptionInput;

	const _onClick = () => {
		if (titleInput.value && descriptionInput.value) {
			onClick(id, titleInput.value, descriptionInput.value, activeColor);
			titleInput.value = '';
			descriptionInput.value = '';
		}
	};

	const _onRemove = () => {
		if (id) onRemove(id);
	};

	const renderButton = (text, action) => (
		<button
			type="button"
			className="btn btn-link pull-right btn-cta animate"
			onClick={ action }
		>
			{ text }
		</button>
	);

	return (
		<div className={ `col-md-12 card animate ${activeColor}` }>
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
					clickText && onClick &&
					renderButton(clickText, _onClick)
				}

				{
					removeText && onRemove &&
					renderButton(removeText, _onRemove)
				}
			</div>
		</div>
	);
};

Card.defaultProps = {
	title: '',
	description: '',

	clickText: null,
	removeText: null,

	setColor: null,
	onClick: null,
	readOnly: false,
	children: null,
	onRemove: null,
};

Card.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string,
	description: PropTypes.string,
	activeColor: PropTypes.string.isRequired,
	clickText: PropTypes.string,
	removeText: PropTypes.string,
	readOnly: PropTypes.bool,
	children: PropTypes.node,
	onClick: PropTypes.func,
	onRemove: PropTypes.func,
};

export default Card;
