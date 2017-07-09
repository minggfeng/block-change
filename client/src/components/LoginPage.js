import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

// styling
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './css/LoginPage.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  login(Email, password) {
    let loginInfo = { Email: Email, password: password };
    axios.post('/login', loginInfo)
    .then( res => {
      console.log('successfully logged in');
    })
    .error( err => {
      console.error(err);
    })
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
        /><br />
        <br />
        <TextField

          errorText={null}
          floatingLabelText="Password"
        /><br />
      </div>
    );
  }
}

export default LoginPage;
