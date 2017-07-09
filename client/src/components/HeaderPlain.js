import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  ToolbarSeparator,
  FlatButton,
  RaisedButton,
  FontIcon } from 'material-ui';

class HeaderPlain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false
    }
    this.changeProp = this.changeProp.bind(this);
  }

  changeProp(key, val) {
    this.setState({
      [key]: val,
    });
  }

  render() {
    if (this.state.home) {
      return <Redirect to="/"/>
    }
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle onClick={e => this.changeProp('home', !this.state.home)} text="Block Change" />
          <FontIcon className="muidocs-icon-custom-sort" />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default HeaderPlain;
