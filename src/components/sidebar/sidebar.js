import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  toggleSidebar() {
    var a = document.getElementsByClassName("sidebar");
    if (a[0].classList) {
      a[0].classList.toggle("active-sidebar");
    }
  }

  render() {
    return (
      <div className="sidebar">
        <div className="logo-container">
          <a href="#" className="close" onClick={this.toggleSidebar}>
            <i className="fas fa-times" />
          </a>
          <img className="logo-img" src="./assets/logo.jpg" />
        </div>
        <div className="links-container">
          <ul className="links-list">
            <li onClick={this.toggleSidebar}>
              <NavLink
                exact
                activeClassName="active"
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>
            <li onClick={this.toggleSidebar}>
              <NavLink
                exact
                activeClassName="active"
                to="/skills"
                className="nav-link"
              >
                Skills
              </NavLink>
            </li>
            <li onClick={this.toggleSidebar}>
              <NavLink
                exact
                activeClassName="active"
                to="/projects"
                className="nav-link"
              >
                Projects
              </NavLink>
            </li>
            {/* <li>
              <NavLink exact activeClassName="active" to="/" className="nav-link">
                Posts
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="social-container">
          <ul className="social-links">
            <li>
              <a href="https://twitter.com/architkshk">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/architkshk">
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="mailto:asarchit65@gmail.com">
                <i className="fas fa-envelope" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/architkshk">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/archit-kaushik-89ab9468/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVvPXcuSDTeCxhApxvoPe%2Bw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-identity_welcome_message">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Sidebar;
