import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import allReducers from './reducers';
import Landing from './containers/Landing';

const store = createStore(allReducers);

ReactDOM.render((
  <MuiThemeProvider>
    <Provider store={store}>
      <Landing />
    </Provider>
  </MuiThemeProvider>
  ),
  document.getElementById('app'));
