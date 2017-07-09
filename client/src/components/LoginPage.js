import React, { Component } from 'react';
// import { Redirect, Link } from 'react-router-dom';
// import axios from 'axios';

// styling
import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
import './css/LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
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
          value={this.state.email}
          onChange={this.handleEmailChange}
        /><br />
        <br />
        <TextField
          errorText={null}
          floatingLabelText="Password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        /><br />
      </div>
    );
  }
}

export default LoginPage;
