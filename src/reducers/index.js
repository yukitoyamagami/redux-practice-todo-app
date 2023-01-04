import { combineReducers } from 'redux';
import { todoListReducer } from './todo_list';

const rootReducers = combineReducers({
  todoListReducer,
});

export default rootReducers;
