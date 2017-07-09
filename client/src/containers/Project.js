import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';
import { toggleDonate, setProjectInFocus } from '../actions';
import Header from '../components/Header';
import Donate from '../components/Donate';
import axios from 'axios';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, description, goal, image } = this.props.projects[this.props.index];
    return (
      <div>
        <Header />
        <h1>{title}</h1>
        <img src={image} alt={id} width={500}/>
        <p><b>Description:</b> {description}</p>
        <div>Amount Raised: {goal}</div>
        <div>Goal: {goal}</div>
        <RaisedButton label="Donate" onTouchTap={this.props.toggleDonate}/>
        <Donate
          {...this.props}
          project={this.props.projects[this.props.index]}
        />
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
}

export default connect(mapStateToProps, matchDispatchToProps)(Project);
