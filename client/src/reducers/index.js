import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import userReducer from './userReducer';
import donateReducer from './donateReducer';
import profileReducer from './profileReducer';

const allReducers = combineReducers({
  user: userReducer,
  main: mainReducer,
  donate: donateReducer,
  profile: profileReducer,
});


export default allReducers;
