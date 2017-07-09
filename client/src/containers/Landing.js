import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
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
import CreateProject from '../components/CreateProject';

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
        {/* {this.props.projects.map(project => {
          return (
            <ProjectSummary project={project} />
          );
        })} */}

        <div>
          <Alert
            openLogin={this.props.user.openLogin}
            openSignup={this.props.user.openSignup}
            handle={this.testDialog}
            loginActions={loginActions}

          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    main: state.main,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openLoginDialog: openLoginDialog,
    closeLoginDialog: closeLoginDialog,
    openSignupDialog: openSignupDialog,
    closeSignupDialog: closeSignupDialog,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Landing);
