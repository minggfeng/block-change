import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions';
import Header from '../components/Header';
import ProjectSummary from '../components/ProjectSummary';

class Landing extends Component {

  render() {
    return (
      <div>
        <Header />
        {/* {this.props.projects.map(project => {
          return (
            <ProjectSummary project={project} />
          );
        })} */}
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

export default connect(mapStateToProps, matchDispatchToProps)(Landing);
