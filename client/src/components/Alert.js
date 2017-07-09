import React from 'react';
import Dialog from 'material-ui/Dialog';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

// styling
import './css/Alert.css';

const Alert = ({ signupActions ,loginActions, handle, openLogin, openSignup, validateLogin }) => (
  <div>
    <Dialog
      title={openLogin === true ? 
        <LoginPage validateLogin={validateLogin} />
        : <SignupPage />}
      actions={openLogin === true ? loginActions : signupActions}
      open={openLogin || openSignup}
      onRequestClose={handle}
    />
  </div>
);

export default Alert;
