export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

export const removeGoal = id => ({ type: REMOVE_GOAL, payload: id });
export const addGoal = goal => ({ type: ADD_GOAL, payload: goal });
