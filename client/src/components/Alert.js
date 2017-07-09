import React from 'react';
import LoginPage from './LoginPage';

// styling
import Dialog from 'material-ui/Dialog';
import './css/Alert.css';

const Alert = ({ dialogActions, handle }) => (
  <div>
    <Dialog
      title={<LoginPage />}
      actions={dialogActions}
      open
      DialogInline
      onRequestClose={handle}
    />
  </div>
);

export default Alert;
