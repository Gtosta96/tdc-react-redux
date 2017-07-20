const initialState = {
	colors: {
		available: ['Red', 'Pink', 'Purple', 'DeepPurple',
			'Indigo', 'Blue', 'LightBlue', 'Cyan', 'Teal', 'Green',
			'LightGreen', 'Lime', 'Yellow', 'Amber', 'Orange',
			'DeepOrange', 'Brown'],
		active: 'Red',
	},
	cards: {
		todo: [],
		done: [],
	},
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_COLOR':
			return {
				...state,
				colors: {
					...state.colors,
					active: action.payload,
				},
			};

		case 'SAVE_CARD':
			return {
				...state,
				cards: {
					...state.cards,
					todo: [...state.cards.todo, action.payload],
				},
			};

		case 'MOVE_CARD':
			return {
				...state,
				cards: {
					...state.cards,
					todo: state.cards.todo.filter(card => card.id !== action.payload.id),
					done: [...state.cards.done, action.payload],
				},
			};

		default:
			return state;
	}
}

export function saveCard(id, title, description, color) {
	return {
		type: 'SAVE_CARD',
		payload: { id, title, description, color },
	};
}

export function moveCard(id, title, description, color) {
	return {
		type: 'MOVE_CARD',
		payload: { id, title, description, color },
	};
}
