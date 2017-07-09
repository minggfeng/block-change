import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addProjects } from '../actions';
import HeaderPlain from '../components/HeaderPlain';
import Footer from '../components/Footer';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  FlatButton,
  Subheader } from 'material-ui';
import { Redirect } from 'react-router-dom';

const style = {
  margin: 12,
};

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        title: '',
        description: '',
        goal: '',
        project_wallet: '',
        image: '',
        redirect: false,
        home: false
      },
    };

    this.changeProp = this.changeProp.bind(this);
    this.createProject = this.createProject.bind(this);
  }

  changeProp(key, val) {
    this.setState({
      [key]: val,
    });
  }

  createProject(event) {
    event.preventDefault();

    let options = {
      profile_id: this.props.currentUser.currentUserId,
      title: this.state.title,
      description: this.state.description,
      goal: this.state.goal,
      image: this.state.image,
    };

    axios.post('/projects/create', options)
    .then((results) => {
      this.props.addProjects([results.data]);
      this.setState({
        redirect: this.props.projects.length - 1,
      });
    })
    .catch(err => {
      console.warn(err);
    });
  }

  render() {
    if (this.state.home) {
      return <Redirect to="/" />
    }
    if (this.state.redirect) {
      return <Redirect to={`/project/${this.state.redirect}`}/>
    }
    return (
      <div style={{width: "100%"}}>
        <HeaderPlain />
        <div style={{ margin: "auto", width: "50%"}}>
          <div>
            <TextField style={{width: "100%"}} floatingLabelText="Title" onChange={e => this.changeProp('title', e.target.value)} />
          </div>
          <div>
            <TextField style={{width: "100%"}} floatingLabelText="Description" multiLine={true} rows={5} rowsMax={5} onChange={e => this.changeProp('description', e.target.value)} />
          </div>
          <div>
            <TextField style={{width: "100%"}} floatingLabelText="Goal" type="number" onChange={e => this.changeProp('goal', e.target.value)} />
          </div>
          <div>
            <TextField style={{width: "100%"}} floatingLabelText="Image" onChange={e => this.changeProp('image', e.target.value)} />
          </div>
          <div>
            <RaisedButton onTouchTap={e => {this.createProject(e)}} label="Submit" primary={true} style={style} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    projects: state.main.projects,
    currentUser: state.profile,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addProjects,
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(CreateProject);
