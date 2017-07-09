import React, { Component } from 'react';
import { Card, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

const styles = {
  width: 380,
  height: 400,
  padding: 15,
  margin: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

class ProjectSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donations: [],
    };
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

export default ProjectSummary;
