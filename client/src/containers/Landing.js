import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';
import {
  resetUser,
  saveProjects,
  openLoginDialog,
  openSignupDialog,
  closeLoginDialog,
  closeSignupDialog,
  setProjectInFocus,
  toggleDonate,
  userLogin,
  userLogout,
  updateCurrentUser,
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
    this.proceedSignup = this.proceedSignup.bind(this);
    this.loginToSignup = this.loginToSignup.bind(this);
  }

  testDialog() {
    const hi = 'hi';
    console.log(hi);
  }

  closePopups() {
    // this.props.closeLoginDialog();
    // this.props.closeSignupDialog();
    this.props.resetUser();
  }

  componentDidMount() {
    axios.get('/projects/fetchProjects')
    .then((res) => {
      this.props.saveProjects(res.data);
    })
    .catch((err) => { console.log(err); });
  }

  validateLogin() {
    // console.log('email: ', this.props.user.email);
    // console.log('password: ', this.props.user.password);
    axios.post('/user/login', { 
      email: this.props.user.email, 
      password: this.props.user.password 
    })
    .then( res => {
      console.log(`successfully validated login info`);
      // console.log('res: ', res);
      this.props.updateCurrentUser(res.data.id, res.data.password, res.data.email, res.data.profile_wallet, res.data.debit)
      this.props.userLogin();
      this.props.resetUser();
      // console.log('id: ', this.props.currentUser.currentUserId);
      // console.log('email: ', this.props.currentUser.currentUserEmail);
      // console.log('password: ', this.props.currentUser.currentUserPassword);
      // console.log('wallet: ', this.props.currentUser.currentUserWallet);
      // console.log('debit: ', this.props.currentUser.currentUserDebit);
    })
    .catch( err => {
      console.error(`failed to validate login info: ${err}`);
      this.props.userLogout();
    });
  }

  proceedSignup() {
      // console.log('id: ', this.props.currentUser.currentUserId);
      // console.log('email: ', this.props.currentUser.currentUserEmail);
      // console.log('password: ', this.props.currentUser.currentUserPassword);
      // console.log('wallet: ', this.props.currentUser.currentUserWallet);
      // console.log('debit: ', this.props.currentUser.currentUserDebit);
    axios.post('/user/signup', { email: this.props.user.email,
      password: this.props.user.password,
      profile_wallet: this.props.user.wallet,
      debit: this.props.user.debit,
    })
    .then( res => {
      console.log(`successfully signed up`);
      this.props.updateCurrentUser(res.data.id, res.data.password, res.data.email, res.data.profile_wallet, res.data.debit)
      //  console.log('id: ', this.props.currentUser.currentUserId);
      // console.log('email: ', this.props.currentUser.currentUserEmail);
      // console.log('password: ', this.props.currentUser.currentUserPassword);
      // console.log('wallet: ', this.props.currentUser.currentUserWallet);
      // console.log('debit: ', this.props.currentUser.currentUserDebit);
      this.props.userLogin();
      this.props.resetUser();
    });

  }

  loginToSignup() {
    this.props.closeLoginDialog();
    this.props.resetUser(),
    setTimeout(this.props.openSignupDialog(), 400);
  }

  render() {
    const loginActions = [
      <RaisedButton
        label="Log in"
        secondary
        onTouchTap={this.validateLogin}
      />,
      <RaisedButton
        label="Sign up"
        primary
        onTouchTap={this.loginToSignup}
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
        secondary
        onTouchTap={this.proceedSignup}
      />,
      <RaisedButton
        label="Cancel"
        primary
        onTouchTap={this.closePopups}
      />,
    ];
    return (
      <div>
        <Header
          openLoginDialog={this.props.openLoginDialog}
          openSignupDialog={this.props.openSignupDialog}
        />
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
        <div>
          <Alert
            openLogin={this.props.user.openLogin}
            openSignup={this.props.user.openSignup}
            handle={this.closePopups}
            loginActions={loginActions}
            signupActions={signupActions}
            validateLogin={this.validateLogin}
          />
        </div>
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
    currentUser: state.profile,
    projects: state.main.projects,
    projectInFocus: state.donate.projectInFocus,
    showDonate: state.donate.showDonate,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setProjectInFocus, toggleDonate,
    resetUser, openLoginDialog, closeLoginDialog, openSignupDialog, closeSignupDialog, saveProjects,
    userLogin, userLogout, updateCurrentUser,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Landing);
