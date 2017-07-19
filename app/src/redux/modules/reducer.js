const initialState = {
	counter: 0,
	savedCounters: [],
	colors: {
		available: ['Red', 'Pink', 'Purple', 'DeepPurple',
			'Indigo', 'Blue', 'Light', 'Cyan', 'Teal', 'Green',
			'LightGreen', 'Lime', 'Yellow', 'Amber', 'Orange',
			'DeepOrange', 'Brown'],
		active: 'Red',
	},
};

export default function reducer(state = initialState, action) {
	switch (action.type) {

		case 'SET_COLOR':
			return {
				...state,
				colors: {
					...state.colors,
					active: action.color,
				},
			};

		default:
			return state;
	}
}
