import React, { Component } from 'react';
import { Card, RaisedButton } from 'material-ui';
import { Link } from 'react-router-dom';

class ProjectSummary extends Component {

  render() {
    if (this.props.project) {
      const { id, title, description, image } = this.props.project;
      return (
        <div>
          <Card style={styles}>
            <Link to={`/project/${this.props.index}`}>
              <h3>{title}</h3> <br />
              <i>description:{description}</i> 
            </Link>
              <br />
            <img src={image} alt={id} width={300} /> <br />
            <RaisedButton label="Donate" primary={true} />
            <RaisedButton label="Learn More" primary={true} />
          </Card>
        </div>
      );
    } else {
      return (<div>...</div>);
    }
  }
}

const styles = {
  width: 380,
  padding: 15,
  margin: 10,
};

export default ProjectSummary;
