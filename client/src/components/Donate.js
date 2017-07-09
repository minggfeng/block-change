import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dialog, TextField, FlatButton } from 'material-ui';

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendDonation = this.sendDonation.bind(this);
  }

  handleClose() {
    this.props.toggleDonate();
  }

  handleChange(e) {
    this.setState({
      amount: e.target.value,
    });
  }

  sendDonation() {
    console.log('sending donation');
  }

  render() {
    const donateActions = [
      <FlatButton
        label="Confirm"
        primary
        onTouchTap={this.sendDonation}
      />,
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleClose}
      />,
    ];
    const { title } = this.props.project;
    const dialogTitle = "Donate to " + title;
    return (
      <div>
        <Dialog
          title={dialogTitle}
          actions={donateActions}
          open={this.props.showDonate}
          onRequestClose={this.handleClose}
        >
          <div>Your Balance: {3} </div>
          <TextField floatingLabelText="Amount" type="number" onChange={this.handleChange} value={this.state.amount}/>
        </Dialog>
      </div>
    );
  }
}

export default Donate;
