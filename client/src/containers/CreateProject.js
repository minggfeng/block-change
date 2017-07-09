import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';
import Header from '../components/Header';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Alert from '../components/Alert';

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
        alert: false,
        alertMessage: ''
      }
    };

    this.changeProp = this.changeProp.bind(this);
    this.createProject = this.createProject.bind(this);
  }

  changeProp(key, val) {
    this.setState({
      [key]: val
    });
  }

  createProject(event) {
    event.preventDefault();

    let options = {
      profile_id: 1,
      title: this.state.title,
      description: this.state.description,
      goal: this.state.goal,
      project_wallet: this.state.project_wallet,
      image: this.state.image
    };

    axios.post('/projects/create', options)
    .then(results => {
      this.setState({
        alertTitle: 'Project Created'
      });
    })
    .catch(err => {
      this.setState({
        alertTitle: 'Error in creating project. Please try again.'
      });
    });

  }

  render() {
    return (
      <div>
        {
          this.state.alert && 
          <Alert title={this.state.alertTitle} open={this.state.alert} />
        }
        <Header />
          <div>
            <TextField floatingLabelText="Title" onChange={e => this.changeProp('title', e.target.value)} />
          </div>
          <div>
            <TextField floatingLabelText="Description" multiLine={true} rows={5} rowsMax={5} onChange={e => this.changeProp('description', e.target.value)} />
          </div>
          <div>
            <TextField floatingLabelText="Goal" type="number" onChange={e => this.changeProp('goal', e.target.value)} />
          </div>
          <div>
            <TextField floatingLabelText="Wallet Address" onChange={e => this.changeProp('project_wallet', e.target.value)} />
          </div>
          <RaisedButton onTouchTap={e => {this.createProject(e)}} label="Create Project" primary={true} style={style} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sampleReducer: state.sampleReducer,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
  });
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateProject);