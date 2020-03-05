import React from 'react';
import { connect } from 'react-redux';

import { removeGoal } from '../actions';

const GoalsList = ({ goals, dispatch }) => {
	return (
		<ul>
			{goals.map(goal => {
				return (
					<li
						onClick={() => {
							return dispatch(removeGoal(goal.id));
						}}
						key={goal.id}>
						{goal.text}
					</li>
				);
			})}
		</ul>
	);
};

function mapStateToProps(state) {
	return {
		goals: state.goalsReducer.goals,
	};
}

export default connect(mapStateToProps)(GoalsList);
