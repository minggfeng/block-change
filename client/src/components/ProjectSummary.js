import React, { Component } from 'react';
import { Card, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

class ProjectSummary extends Component {
  constructor(props) {
    super(props);
    this.openDonate = this.openDonate.bind(this);
  }

  openDonate() {
    this.props.toggleDonate();
    this.props.setProjectInFocus(this.props.project);
  }

  render() {
    const { id, title, description, image, project_wallet } = this.props.project;
    const context = this;
    return (
      <div>
        <Card style={styles}>
          <h4>{title}</h4>
          <i>description:{description}</i>
          <i>wallet address:{project_wallet}</i>
          <br />
          <img src={image} alt={id} width={300} /> <br />
          <RaisedButton label="Donate" primary onTouchTap={this.openDonate} />
          <Link to={`/project/${this.props.index}`}>
            <RaisedButton label="Learn More" primary />
          </Link>
        </Card>
      </div>
    );
  }
}

const styles = {
  width: 380,
  padding: 15,
  margin: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default ProjectSummary;
