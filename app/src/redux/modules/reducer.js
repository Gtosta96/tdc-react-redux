const initialState = {
	counter: 0,
	savedCounters: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {

		case 'ADD_COUNTER':
			return {
				...state,
				counter: state.counter + action.value
			};

		case 'SUB_COUNTER':
			return {
				...state,
				counter: state.counter - action.value
			};

		case 'SAVE_COUNTER':
			return {
				...state,
				counter: 0,
				savedCounters: [
					...state.savedCounters,
					action.value
				]
			};

		default:
			return state;
	}
}
