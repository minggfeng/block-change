import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateUserEmail,
  updateUserWallet,
  updateUserPassword,
  updateUserDebit,
  validateUserPassword,
} from '../actions';

// styling
import TextField from 'material-ui/TextField';
import './css/SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleWalletChange = this.handleWalletChange.bind(this);
    this.handleDebitChange = this.handleDebitChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePassword2Change = this.handlePassword2Change.bind(this);
  }

  handleEmailChange(e) {
    this.props.updateUserEmail(e.target.value);
  }

  handleWalletChange(e) {
    this.props.updateUserWallet(e.target.value);
  }

  handleDebitChange(e) {
    this.props.updateUserDebit(e.target.value);
  }
  handlePasswordChange(e) {
    this.props.updateUserPassword(e.target.value);
  }

  handlePassword2Change(e) {
    this.props.validateUserPassword(e.target.value);
  }
  render() {
    return (
      <div>
        <TextField
          errorText={null}
          value={this.props.user.email}
          floatingLabelText="Email"
          onChange={this.handleEmailChange}
        /><br />
        <TextField
          errorText={null}
          value={this.props.user.wallet}
          floatingLabelText="Wallet String"
          onChange={this.handleWalletChange}
        /><br />
        <TextField
          errorText={null}
          value={this.props.user.debit}
          floatingLabelText="Current Ether debit"
          onChange={this.handleDebitChange}
        /><br />
        <TextField
          errorText={null}
          value={this.props.user.password}
          floatingLabelText="Password"
          type="password"
          onChange={this.handlePasswordChange}
        /><br />
        <TextField
          errorText={null}
          value={this.props.user.password2}
          floatingLabelText="Confirm Password"
          type="password"
          onChange={this.handlePassword2Change}
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
    updateUserWallet,
    updateUserPassword,
    updateUserDebit,
    validateUserPassword,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SignupPage);