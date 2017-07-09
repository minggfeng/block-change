import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';
import { toggleDonate, setProjectInFocus } from '../actions';
import Header from '../components/Header';
import Donate from '../components/Donate';
import axios from 'axios';
import LinearProgress from 'material-ui/LinearProgress';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, description, goal, image } = this.props.projects[this.props.index];
    return (
      <div style={{width: "100%"}}>
        <Header />
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
            <div style={{ padding: "10px" }}>  
              <LinearProgress mode="determinate" value={(5000/goal) * 100} />
            </div>

            <CardText>{description}</CardText>

            <RaisedButton label="Donate" primary={true} style={style} ></RaisedButton>
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

<<<<<<< HEAD
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleDonate, setProjectInFocus,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Project);
=======
export default connect(mapStateToProps)(Project);
>>>>>>> Css change for projects
