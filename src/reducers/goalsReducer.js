const initialState = {
	goals: [
		{ id: Math.random().toString(), text: 'first goal' },
		{ id: Math.random().toString(), text: 'second goal' },
		{ id: Math.random().toString(), text: 'third goal' },
	],
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_GOAL':
			return {
				goals: state.goals.concat(action.payload),
			};

		case 'REMOVE_GOAL':
			return {
				goals: state.goals.filter(goal => goal.id !== action.payload),
			};

		default:
			return state;
	}
}
