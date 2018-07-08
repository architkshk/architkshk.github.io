import React from "react";
import Header from "../Header/header";

const Home = () => {
  return (
    <div className="main-inner">
      <Header title="About Me" />
      <div className="Home">
        <div className="content">
          <div className="name">
            <b>archit</b> kaushik<span className="dot">.</span>
          </div>
          <div className="about"> Web Developer</div>
          <div className="description">
            I am passionate about building softwares that improves the lives of
            those around me. I love JavaScript and Oper Source. Currently
            learning by building thnigs. In my free time I dive into competitive
            programming.
          </div>
          <div className="resume-btn">
            <a
              href="https://drive.google.com/file/d/1kP8BqNPn-PvkikmLW7th4U5GoGN0bmBD/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
