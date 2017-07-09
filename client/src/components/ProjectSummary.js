import React, { Component } from 'react';
import { Card, RaisedButton } from 'material-ui';

class ProjectSummary extends Component {

  render() {
    if (this.props.project) {
      const { id, title, description, image } = this.props.project;
      return (
        <div>
          <Card style={styles}>
            <h3>{title}</h3> <br />
            <i>description:{description}</i> <br />
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
