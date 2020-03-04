import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';

const initialState = {
	goals: [
		{ id: Math.random().toString(), text: 'first goal' },
		{ id: Math.random().toString(), text: 'second goal' },
		{ id: Math.random().toString(), text: 'third goal' },
	],
};

function reducer(state = initialState, action) {
	console.log('reducer', state, action);

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

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root'),
);
