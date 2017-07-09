import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import userReducer from './userReducer';

const allReducers = combineReducers({
  user: userReducer,
  main: mainReducer,
});


export default allReducers;
