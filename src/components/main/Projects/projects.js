import React from "react";
import ProjectCard from "./project-card";
import Header from "../Header/header";
import projects from "./projects-details";

const Projects = () => {
  return (
    <div className="main-inner">
      <Header title="Projects" />
      <div className="projects">
        <div className="content">
          {projects.map((s, a) => {
            return <ProjectCard key={a} project={s} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
