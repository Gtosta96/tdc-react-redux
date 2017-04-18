const initialState = { counter: 0 };

export default function reducer(state = initialState, action) {
	switch (action.type) {

		case 'ADD_COUNTER':
			return {
				...state,
				counter: state.counter + action.value
			};

		default:
			return state;
	}
}
