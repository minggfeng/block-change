import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import Landing from './containers/Landing';

const store = createStore(allReducers);

ReactDOM.render(
  (<Provider store={store}>
    <Landing />
  </Provider>),
  document.getElementById('root'));
