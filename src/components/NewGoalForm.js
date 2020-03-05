import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addGoal } from '../actions';

const NewGolForm = ({ dispatch }) => {
	const [enteredText, setEnteredText] = useState('');

	const onChangeHandler = event => {
		setEnteredText(event.target.value);
	};

	const onSubmitHandler = event => {
		event.preventDefault();

		const newGoal = {
			id: Math.random().toString(),
			text: enteredText,
		};

		setEnteredText('');

		dispatch(addGoal(newGoal));
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<input type='text' value={enteredText} onChange={onChangeHandler} />
				<button type='submit'>Add goal</button>
			</form>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		goals: state.goalsReducer.goals,
	};
}

export default connect(mapStateToProps)(NewGolForm);
