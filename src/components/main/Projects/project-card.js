import React from "react";

const ProjectCard = props => {
  return (
    <div className="project-card">
      <img className="project-card-img" src={props.project.img} />
      <div className="project-card-text">
        <div className="project-card-heading">{props.project.name}</div>
        <div className="project-card-desc">{props.project.descr}</div>
        <div className="project-card-link">
          <a href={props.project.link} target="_blank">
            Visit <i className="fas fa-arrow-right" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
