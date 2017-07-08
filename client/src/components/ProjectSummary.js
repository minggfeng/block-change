import React, { Component } from 'react';

class ProjectSummary extends Component {

  render() {
    const { id, title, creator, description, image } = this.props.project;
    return (
      <div>
        <b>{title}</b>
        created by:{creator} <br />
        description:{description} <br />
        <img src={image} alt={id} width={100} />
      </div>
    );
  }
}

export default ProjectSummary;
