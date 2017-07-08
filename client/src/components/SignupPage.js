import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

// styling
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './css/SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <span>from Signup Page</span>
        <TextField
          hintText="Email"
          errorText="This field is required"
          floatingLabelText="Email"
        /><br />
        <br />
        <TextField
          hintText="Password"
          errorText="This field is required"
          floatingLabelText="Password"
        /><br />
      </div>
    );
  }
}

export default SignupPage;