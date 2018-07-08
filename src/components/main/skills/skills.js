import React from "react";
import Header from "../Header/header";
import SkillCard from "./skill-card";

const Skills = () => {
  const skills = [
    { name: "HTML", source: "assets/html.svg" },
    { name: "CSS", source: "assets/css.svg" },
    { name: "JavaScript", source: "assets/js.png" },
    { name: "DS and Algo", source: "assets/dsa.jpg" },
    { name: "jQuery", source: "assets/jquery.png" },
    { name: "Node JS", source: "assets/nodejs.png" },
    { name: "React", source: "assets/react.png" },
    { name: "MongoDB", source: "assets/mongodb.png" },
    { name: "Bootstrap", source: "assets/bootstrap.png" },
    { name: "Sass", source: "assets/sass.svg" },
    { name: "Handlebars.js", source: "assets/handlebar.png" }
  ];
  return (
    <div className="main-inner">
      <Header title="Skills" />
      <div className="skills">
        <div className="content">
          {skills.map((s, a) => {
            return <SkillCard key={a} skill={s} />;
          })}
        </div>
        <br />
        <p className="more-text">and much more...</p>
      </div>
    </div>
  );
};
export default Skills;
