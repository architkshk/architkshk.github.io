import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Sidebar from "./sidebar/sidebar";
import Main from "./main/main";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
