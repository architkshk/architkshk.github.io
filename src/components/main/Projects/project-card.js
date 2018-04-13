import React from "react";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <img className="project-card-img" src="./assets/js.png" />
      <div className="project-card-text">
        <div className="project-card-heading"> My awesome Project</div>
        <div className="project-card-desc">
        Coming Soon  
        </div>
        <div className="project-card-link">Visit <i className="fas fa-arrow-right" /> </div>
      </div>
    </div>
  );
};
export default ProjectCard;
