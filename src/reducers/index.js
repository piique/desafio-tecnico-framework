import { combineReducers } from 'redux';
import usersReducer from './users';

const allReducers = combineReducers({
  users: usersReducer,
});

export default allReducers;
