import React from "react";

const Header = props => {
  return (
    <div className="header">
      <a
        href="#"
        className="toggle"
        onClick={function() {
          var a = document.getElementsByClassName("sidebar");
          if (a[0].classList) {
            a[0].classList.toggle("active-sidebar");
          }
        }}
      >
        <i className="fas fa-bars" />
      </a>
      <div className="title">{props.title}</div>
    </div>
  );
};
export default Header;
