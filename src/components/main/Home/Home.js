import React from "react";
import Header from "../Header/header";

const Home = () => {
  return (
    <div className="main-inner">
      <Header title="About Me" />
      <div className="Home">
        <div className="content">
          <div className="name"> archit kaushik</div>
          <div className="about"> Web Developer</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            maximus purus non leo posuere fringilla. Maecenas commodo libero sed
            tortor
          </div>
          <div className="resume-btn"> Resume</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
