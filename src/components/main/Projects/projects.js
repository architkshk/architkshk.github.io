import React from "react";
import ProjectCard from "./project-card";
import Header from "../Header/header";

const Projects = () => {
  return (
    <div className="main-inner">
      <Header title="Projects" />
      <div className="projects">
        <div className="content">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};
export default Projects;
