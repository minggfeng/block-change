import React, { Component, fetch } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';
import { saveProjects } from '../actions';
import {
  openLoginDialog,
  openSignupDialog,
  closeLoginDialog,
  closeSignupDialog,
} from '../actions';
import Header from '../components/Header';
import Alert from '../components/Alert';
import ProjectSummary from '../components/ProjectSummary';
import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';
import { Link } from 'react-router-dom';

// styling
import RaisedButton from 'material-ui/RaisedButton';
import './css/Landing.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class Landing extends Component {
  constructor(props) {
    super(props);
    this.testDialog = this.testDialog.bind(this);
  }

  testDialog() {
    const hi = 'hi';
    console.log(hi);
  }

  componentDidMount() {
    axios.get('/fetchProjects')
    .then((res) => {
      this.props.saveProjects(res.data);
    })
    .catch((err) => { console.log(err); });
  }

  render() {
    const loginActions = [
      <RaisedButton
        label="Okay"
        primary
        onTouchTap={this.testDialog}
      />,
      <RaisedButton
        label="Cancel"
        primary
        onTouchTap={this.testDialog}
      />,
    ];
    return (
      <div>
        <Header />
        {this.props.projects.map((project, i) => {
          return (<ProjectSummary key={i} project={project} />);
        })}
        <div>
          <Alert
            openLogin={this.props.user.openLogin}
            openSignup={this.props.user.openSignup}
            handle={this.testDialog}
            loginActions={loginActions}
          />
        </div>

        <li><Link to="project/1">Project</Link></li>
        <li><Link to="createProject">Create a Project</Link></li>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    projects: state.main.projects,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openLoginDialog, closeLoginDialog, openSignupDialog, closeSignupDialog, saveProjects,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Landing);
