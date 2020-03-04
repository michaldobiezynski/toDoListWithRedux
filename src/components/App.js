import React from 'react';

import GoalsList from './GoalsList';
import NewGoalForm from './NewGoalForm';

const App = () => {
	return (
		<div>
			<NewGoalForm />
			<GoalsList />
		</div>
	);
};

export default App;
