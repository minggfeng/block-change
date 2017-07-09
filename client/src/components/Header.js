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
          <ToolbarTitle text="Block Change" />
          <FontIcon className="muidocs-icon-custom-sort" />
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
