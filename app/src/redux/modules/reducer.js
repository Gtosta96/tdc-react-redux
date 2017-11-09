const localStorageState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : null;
let initialState = { // eslint-disable-line
	colors: {
		available: ['Red', 'Pink', 'Purple', 'DeepPurple',
			'Indigo', 'Blue', 'Cyan', 'Teal', 'Green',
			'LightGreen', 'Lime', 'Yellow', 'Amber', 'Orange',
			'DeepOrange', 'Brown'],
		active: 'Red',
	},
	cards: {
		doing: [],
		done: [],
	},
};

initialState = localStorageState || initialState;
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
					doing: [...state.cards.doing, action.payload],
				},
			};

		case 'MOVE_CARD':
			return {
				...state,
				cards: {
					...state.cards,
					doing: state.cards.doing.filter(card => card.id !== action.payload.id),
					done: [...state.cards.done, action.payload],
				},
			};

		case 'REMOVE_CARD':
			return {
				...state,
				cards: {
					...state.cards,
					doing: state.cards.doing.filter(card => card.id !== action.payload.id),
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

export function removeCard(id) {
	return {
		type: 'REMOVE_CARD',
		payload: { id },
	};
}
