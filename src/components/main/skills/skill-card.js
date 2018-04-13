import React from "react";

const SkillCard = props => {
  return (
    <div className="skill-card">
      <img className="skill-card-logo" src={props.skill.source} />
      <p className="skill-card-text">{props.skill.name}</p>
    </div>
  );
};
export default SkillCard;
