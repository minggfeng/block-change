import React from 'react';
import Dialog from 'material-ui/Dialog';
import LoginPage from './LoginPage';

// styling
import './css/Alert.css';

const Alert = ({ signupActions ,loginActions, handle, openLogin, openSignup }) => (
  <div>
    <Dialog
      title={<LoginPage />}
      actions={loginActions}
      open={openLogin || openSignup}
      onRequestClose={handle}
    />
  </div>
);

export default Alert;
