import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import actions from '../actions';
import Header from '../components/Header';
import Alert from '../components/Alert';
import ProjectSummary from '../components/ProjectSummary';
import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';
import CreateProject from '../components/CreateProject';

// styling
import RaisedButton from 'material-ui/RaisedButton';
import './css/Landing.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class Landing extends Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }

  test() {
    console.log('for testing');
  }

  render() {

    const customContentStyle = {
      width: '82%',
      maxWidth: 'none',
      // maxHeight: 'none',
      height: '100%',
      opacity: 0.85,
    };

    const actions = [
      <RaisedButton
        label="Okay"
        primary
        onTouchTap={this.test}
      />,
      <RaisedButton
        label="Cancel"
        primary
        onTouchTap={this.test}
      />
    ];

    return (
      <div>
        <Header />
        {/* {this.props.projects.map(project => {
          return (
            <ProjectSummary project={project} />
          );
        })} */}

        <div>
          <Alert

          />
        </div>
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
