import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';
import Header from '../components/Header';
import axios from 'axios';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        id: 1,
        creator_id: 1,
        title: 'test project',
        description: 'test description',
        goal: 1000,
        wallet_address: 'wallet address',
        image: 'https://bitcoin.org/img/icons/opengraph.png'
      }
    };
  }

  componentDidMount() {
    // axios.get('/project/fetch')
    // .then(res => {

    // })
  }

  render() {
    return (
      <div>
        <Header />
        
        <h1>{this.state.project.title}</h1>

        <p>{this.state.project.description}</p>

        <div>Goal: {this.state.project.goal}</div>

        <button>Donate</button>

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

export default connect(mapStateToProps, matchDispatchToProps)(Project);