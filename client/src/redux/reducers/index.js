import { combineReducers } from 'redux';
import todoReducer from './todo.reducers';

const reducer = combineReducers({
  todos: todoReducer,
});

export default reducer;
