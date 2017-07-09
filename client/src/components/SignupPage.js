import React, { Component } from 'react';
// import { Redirect, Link } from 'react-router-dom';
// import axios from 'axios';

// styling
import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
import './css/SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      wallet: '',
      password: '',
      password2: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleWalletChange = this.handleWalletChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePassword2Change = this.handlePassword2Change.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleWalletChange(e) {
    this.setState({
      wallet: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handlePassword2Change(e) {
    this.setState({
      password2: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <TextField
          errorText={null}
          value={this.state.email}
          floatingLabelText="Email"
          onChange={this.handleEmailChange}
        /><br />
        <TextField
          errorText={null}
          value={this.state.wallet}
          floatingLabelText="Wallet String"
          onChange={this.handleWalletChange}
        /><br />
        <TextField
          errorText={null}
          value={this.state.password}
          floatingLabelText="Password"
          type="password"
          onChange={this.handlePasswordChange}
        /><br />
        <TextField
          errorText={null}
          value={this.state.password2}
          floatingLabelText="Confirm Password"
          type="password"
          onChange={this.handlePassword2Change}
        /><br />
      </div>
    );
  }
}

export default SignupPage;
