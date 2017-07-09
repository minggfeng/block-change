import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  ToolbarSeparator,
  FlatButton,
  RaisedButton,
  FontIcon } from 'material-ui';

class Header extends Component {

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Block Change" />
          <FontIcon className="muidocs-icon-custom-sort" />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          <FlatButton label="Login" primary={true} onTouchTap={() => console.log('clicked')}/>
          <FlatButton label="Sign Up" primary={true} onTouchTap={() => console.log('clicked')}/>
          <Link to="createProject">
            <RaisedButton label="Create Project" primary={true} />
          </Link>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Header;
