import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';
import Header from '../components/Header';
import axios from 'axios';
import TextField from 'material-ui/TextField';

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        title: '',
        description: '',
        goal: '',
        wallet_address: '',
        image: ''
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
  }


  componentDidMount() {
    // axios.post('/project/create')
    // .then(res => {

    // })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.createProject}>
          <TextField hintText="Title" onChange={e => this.changeProp('title', e.target.value)} />
          <TextField hintText="Description" multiLine={true} onChange={e => this.changeProp('description', e.target.value)} />
          <TextField hintText="Goal" onChange={e => this.changeProp('goal', e.target.value)} />
          <TextField hintText="Wallet Address" onChange={e => this.changeProp('wallet_address', e.target.value)} />
        </form>
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