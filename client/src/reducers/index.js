import { combineReducers } from 'redux';
// import someReducer from './someReducer';
// import Immutable from 'seamless-immutable';
import mainReducer from './mainReducer';
import userReducer from './userReducer';

const allReducers = combineReducers({
  user: userReducer,
  main: mainReducer,
});


export default allReducers;
