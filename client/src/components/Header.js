import React, { Component } from 'react';
import renderif from 'render-if';
import { Link, Redirect } from 'react-router-dom';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  ToolbarSeparator,
  FlatButton,
  RaisedButton,
  FontIcon } from 'material-ui';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <span style={{ marginRight: 8 }}>
            <img src="https://gdusil.files.wordpress.com/2017/05/adel-opinion-4-blockchain-incubation-to-employment-icon.png" alt='favicon' width={35} />
          </span>
          <ToolbarTitle text="BlockChange" />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          {renderif(this.props.loggedin === false) (
            <FlatButton label="Login" primary={true} onTouchTap={this.props.openLoginDialog}/>
          )}
          {renderif(this.props.loggedin === false) (
            <FlatButton label="Sign Up" primary={true} onTouchTap={this.props.openSignupDialog}/>
          )}

          {renderif(this.props.loggedin === true) (
            <Link to="createProject">
              <RaisedButton label="Create Project" primary={true} onTouchTap={this.props.loggedin === false ? this.props.openLoginDialog : this.props.goToCreateProjectPage}/>
            </Link>
          )}
          {renderif(this.props.loggedin === false) (
            <RaisedButton label="Create Project" primary={true} onTouchTap={this.props.loggedin === false ? this.props.openLoginDialog : this.props.goToCreateProjectPage}/>
          )}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Header;
