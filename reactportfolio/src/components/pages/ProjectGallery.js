//using 'friends example from day 2 lesson 7
import React, { Component } from "react";
import ProjectCard from "../ProjectCard/projectcard";
import Wrapper from "../CardWrapper/cardwrapper";
import Title from "../Title/title";
import Projects from "../../projects.json";

class ProjectGallery extends Component {
  state = {
    Projects
  };
  render() {
    return (
      <div>
        <Wrapper>
          <Title>Project Gallery</Title>
          {this.state.Projects.map(project => (
            <ProjectCard
              id={project.id}
              key={project.id}
              image={project.image}
              Title={project.Title}
              Github={project.Github}
              Deployment={project.Deployment}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default ProjectGallery;
