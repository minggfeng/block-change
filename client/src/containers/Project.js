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
      // project: {
      //   id: 1,
      //   creator_id: 1,
      //   title: 'test project',
      //   description: 'test description',
      //   goal: 1000,
      //   wallet_address: 'wallet address',
      //   image: 'https://bitcoin.org/img/icons/opengraph.png'
      // }
    };
  }

  render() {
    const { id, title, description, goal, image } = this.props.projects[this.props.index];
    return (
      <div>
        <Header />
        
        <h1>{title}</h1>

        <p>{description}</p>

        <div>Goal: {goal}</div>

        <button>Donate</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    projects: state.main.projects
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
  });
}

export default connect(mapStateToProps, matchDispatchToProps)(Project);