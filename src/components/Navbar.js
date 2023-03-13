import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} 
      `}
    >
      <a
        className={`navbar-brand text-${
          props.mode === "light" ? "dark" : "light"
        }`}
        href="/"
      >
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a
              className={`nav-link text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              href="/"
            >
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              href="/"
            >
              {props.about}
            </a>
          </li>
        </ul>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onClick={props.toggleMode}
          />
          <label
            className={`custom-control-label mx-3 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            htmlFor="customSwitch1"
          >
            Knight Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//   title: "Some Title",
//   about: "Some details",
// };
