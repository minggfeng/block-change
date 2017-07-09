import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { toggleDonate, setProjectInFocus } from '../actions';
import HeaderPlain from '../components/HeaderPlain';
import Donate from '../components/Donate';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  FlatButton,
  RaisedButton,
  LinearProgress } from 'material-ui';

import './css/Project.css';

const style = {
  margin: 12,
};

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
      donations: [],
    };
    this.changeProp = this.changeProp.bind(this);
    this.getDonations = this.getDonations.bind(this);
  }

  changeProp(key, val) {
    this.setState({
      [key]: val,
    });
  }

  getDonations(id) {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        project_id: id,
      }),
    };

    fetch('/projects/getDonations', options)
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ donations: res });
      })
      .catch((err) => {
        console.error(`failed to get donations: ${err}`);
      });
  }


  componentDidMount() {
    const { id } = this.props.projects[this.props.index];
    this.getDonations(id);
  }
  
  render() {
    const { id, title, description, goal, image, project_wallet } = this.props.projects[this.props.index];
    if (this.state.home) {
      return <Redirect to="/" />
    }
    return (
      <div style={{width: "100%"}}>
        <HeaderPlain />
        <div style={{margin: "auto", width: "65%", padding: "20px"}}>
          <Card>
            <CardMedia>
              <img src={image}/>
            </CardMedia>

            <CardTitle title={title}/>
            <div style={{ padding: "10px" }}>
              Goal: {goal}
            </div>
            <div style={{ padding: "10px" }}>
              Amount Raised: 5000
            </div>
            <div>
              Wallet address: {project_wallet}
            </div>
            <div style={{ padding: "10px" }}>
              <LinearProgress mode="determinate" value={(5000/goal) * 100} />
            </div>

            <CardText>{description}</CardText>

            <RaisedButton primary={true} style={style} label="Donate" onTouchTap={this.props.toggleDonate}/>

            <Donate
              {...this.props}
              project={this.props.projects[this.props.index]}
            />
            <table className="tx-table">
              <thead>
                <tr>
                  <td className="tx-header">Donations</td>
                </tr>
              </thead>
              <tbody>
                {this.state.donations.map((x) => (
                  <tr>
                    <td className="tx-td">{x}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    projects: state.main.projects,
    showDonate: state.donate.showDonate,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleDonate, setProjectInFocus,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Project);
