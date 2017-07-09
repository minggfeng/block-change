import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import allReducers from './reducers';
import Landing from './containers/Landing';
import Project from './containers/Project';
import CreateProject from './containers/CreateProject';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const store = createStore(allReducers);

ReactDOM.render((
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/CreateProject" component={CreateProject} />
          <Route path="/project/:id" render={innerProps => (<Project pid={innerProps.match.params.id} />)} />
        </div>
      </Router>
    </Provider>)
  </MuiThemeProvider>,
  document.getElementById('app'));
