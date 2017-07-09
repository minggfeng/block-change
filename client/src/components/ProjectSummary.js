import React, { Component } from 'react';

class ProjectSummary extends Component {

  render() {
    if (this.props.project) {
      const { id, title, description, image } = this.props.project;
      return (
        <div>
          <b>{title}</b> <br />
          description:{description} <br />
          <img src={image} alt={id} width={100} />
        </div>
      );
    } else {
      return (<div>...</div>);
    }
  }
}

export default ProjectSummary;
