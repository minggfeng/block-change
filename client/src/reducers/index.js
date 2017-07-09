import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import userReducer from './userReducer';
import donateReducer from './donateReducer';

const allReducers = combineReducers({
  user: userReducer,
  main: mainReducer,
  donate: donateReducer,
});


export default allReducers;
