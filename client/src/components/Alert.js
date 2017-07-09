import React, { Component } from 'react';

// styling
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import './css/Alert.css';

class Alert extends Component {

  test() {
    console.log('for testing');
  }

  render() {
    const actions = [
      <RaisedButton
        label="Okay"
        primary
        onTouchTap={this.test}
      />,
      <RaisedButton
        label="Cancel"
        primary
        onTouchTap={this.test}
      />
    ]
    return(
      <div>
        <Dialog
          title="from Alert"
          actions={actions}
          open={true}
          onRequestClose={this.test}
        />
      </div>
    );
  }
}

export default Alert;