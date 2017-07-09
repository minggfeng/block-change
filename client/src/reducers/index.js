import { combineReducers } from 'redux';
// import someReducer from './someReducer';
// import Immutable from 'seamless-immutable';
import mainReducer from './mainReducer';
import userState from './userReducer';

const allReducers = combineReducers({
  userState,
  mainReducer,
});


export default allReducers;
