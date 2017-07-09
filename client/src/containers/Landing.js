import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';
import {
  saveProjects,
  openLoginDialog,
  openSignupDialog,
  closeLoginDialog,
  closeSignupDialog,
  setProjectInFocus,
  toggleDonate,
} from '../actions';
import Header from '../components/Header';
import Alert from '../components/Alert';
import ProjectSummary from '../components/ProjectSummary';
import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';
import Donate from '../components/Donate';
import { Link } from 'react-router-dom';

// styling
import { GridList, RaisedButton } from 'material-ui';
import './css/Landing.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


class Landing extends Component {
  constructor(props) {
    super(props);
    this.testDialog = this.testDialog.bind(this);
    this.closePopups = this.closePopups.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  testDialog() {
    const hi = 'hi';
    console.log(hi);
  }

  closePopups() {
    this.props.closeLoginDialog();
    this.props.closeSignupDialog();
  }

  componentDidMount() {
    axios.get('/fetchProjects')
    .then((res) => {
      this.props.saveProjects(res.data);
    })
    .catch((err) => { console.log(err); });
  }

  validateLogin() {
    console.log('email: ', this.props.user.email);
    console.log('password: ', this.props.user.password);
    axios.post('/login', this.props.user.email, this.props.user.password)
    .then( res => {
      console.log(`successfully validated login info`);
      // if valid, redirect to landing page
      // if not valid, display error
    })
    .catch( err => { console.error(`failed to validate login info: ${err}`); })
  }

  render() {
    const loginActions = [
      <RaisedButton
        label="Log in"
        primary
        onTouchTap={this.validateLogin}
      />,
      <RaisedButton
        label="Cancel"
        primary
        onTouchTap={this.closePopups}
      />,
    ];

    const signupActions = [
      <RaisedButton
        label="Sign up"
        primary
        onTouchTap={this.closePopups}
      />,
      <RaisedButton
        label="Cancel"
        primary
        onTouchTap={this.closePopups}
      />,
    ];
    return (
      <div>
        <Header />
        <GridList
          cellHeight={400}
          cols={3}
          // style={styles.gridList}
        >
          {this.props.projects.map((project, i) => {
            return (<ProjectSummary index={i} key={i} project={project}
              setProjectInFocus={this.props.setProjectInFocus}
              toggleDonate={this.props.toggleDonate}
            />);
          })}
        </GridList>
        {/* <div>
          <Alert
            openLogin={this.props.user.openLogin}
            openSignup={this.props.user.openSignup}
            handle={this.closePopups}
            loginActions={loginActions}
            signupActions={signupActions}
            validateLogin={this.validateLogin}
          />
        </div> */}
        <div>
          <Donate
            project={this.props.projectInFocus}
            toggleDonate={this.props.toggleDonate}
            setProjectInFocus={this.props.setProjectInFocus}
            showDonate={this.props.showDonate}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    projects: state.main.projects,
    projectInFocus: state.donate.projectInFocus,
    showDonate: state.donate.showDonate,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openLoginDialog, closeLoginDialog, openSignupDialog, closeSignupDialog, saveProjects, setProjectInFocus, toggleDonate,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Landing);
