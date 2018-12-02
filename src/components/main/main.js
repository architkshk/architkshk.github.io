import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Skills from "./skills/skills";
import Projects from "./Projects/projects";
import Designs from "./Designs/designs";

const Main = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/designs" component={Designs} />
      </Switch>
    </div>
  );
};
export default Main;
