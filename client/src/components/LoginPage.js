import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateUserEmail,
  updateUserPassword,
} from '../actions';
// import { Redirect, Link } from 'react-router-dom';
// import axios from 'axios';

// styling
import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
import './css/LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(e) {
    this.props.updateUserEmail(e.target.value);
  }

  handlePasswordChange(e) {
    this.props.updateUserPassword(e.target.value);
  }

  render() {
    // if (login) {
    //   return <Redirect push to ="/" />;
    // }
    return (
      <div>
        <TextField
          errorText={null}
          floatingLabelText="Email"
          value={this.props.user.email}
          onChange={this.handleEmailChange}
        /><br />
        <br />
        <TextField
          errorText={null}
          floatingLabelText="Password"
          type="password"
          value={this.props.user.password}
          onChange={this.handlePasswordChange}
        /><br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUserEmail,
    updateUserPassword,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginPage);