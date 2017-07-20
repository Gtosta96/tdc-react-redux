import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import ColorButton from './ColorButton';
import Placeholder from './Placeholder';

const uuidv4 = require('uuid/v4');

const Application = (props) => (
	<div className="container">
		<div className="row">
			<div className="col-md-6">
				<h2>todo</h2>
				<Card
					id={ uuidv4() }
					activeColor={ props.colors.active }
					buttonText={ 'Salvar' }
					onClick={ props.saveCard }
				>
					{ props.colors.available.map((color) => (
						<ColorButton
							key={ color }
							color={ color }
							setColor={ props.setColor }
						/>
						)) }
				</Card >
			</div>
			<div className="col-md-6" style={ { position: 'absolute', right: '0' } }>
				<div className="col-md-12 done-section">
					<h2>done</h2>
					{
						props.cards.done.map((card) => (
							<Card
								key={ card.id }
								id={ card.id }
								title={ card.title }
								description={ card.description }
								activeColor={ card.color }
								readOnly
							/>
						))
					}
				</div>
			</div>
		</div>

		<div className="row">
			<div className="col-md-6">
				<div className="col-md-12 doing-section">
					<h2>doing</h2>
					{
						props.cards.todo.map((card) => (
							<Card
								key={ card.id }
								id={ card.id }
								title={ card.title }
								description={ card.description }
								activeColor={ card.color }
								buttonText={ '✔' }
								onClick={ props.moveCard }
								readOnly
							/>
						))
					}
				</div>
			</div>
		</div>
		<Placeholder title="TDC SP - React + Redux" />
	</div>
	);

const { shape, arrayOf, string, func } = PropTypes;
Application.propTypes = {
	colors: shape({
		available: arrayOf(string).isRequired,
		active: string.isRequired,
	}).isRequired,

	cards: shape({
		todo: arrayOf(
			shape({
				title: string.isRequired,
				description: string.isRequired,
				color: string.isRequired,
			}),
		),
		done: arrayOf(
			shape({
				title: string.isRequired,
				description: string.isRequired,
				color: string.isRequired,
			}),
		),
	}).isRequired,

	saveCard: func.isRequired,
	moveCard: func.isRequired,
};

export default Application;
