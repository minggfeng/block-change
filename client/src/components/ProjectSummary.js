import React, { Component } from 'react';
import { Card, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

class ProjectSummary extends Component {

  render() {
    const { id, title, description, image } = this.props.project;
    return (
      <div>
        <Card style={styles}>
          <h3>{title}</h3> <br />
          <i>description:{description}</i>
          <br />
          <img src={image} alt={id} width={300} /> <br />
          <RaisedButton label="Donate" primary />
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
