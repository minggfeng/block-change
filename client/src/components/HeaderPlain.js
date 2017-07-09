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
          <span style={{ marginRight: 8 }}>
            <img src="https://gdusil.files.wordpress.com/2017/05/adel-opinion-4-blockchain-incubation-to-employment-icon.png" alt='favicon' width={35} />
          </span>
          <ToolbarTitle onClick={e => this.changeProp('home', !this.state.home)} text="BlockChange" />
          <FontIcon className="muidocs-icon-custom-sort" />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default HeaderPlain;
