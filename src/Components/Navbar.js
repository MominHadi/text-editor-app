import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}border border-primary border-3`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.TitleOfDocument}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </div>
          </div>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.SwitchMode}
          />
          <label
            className="form-check-label"
            for="flexSwitchCheckDefault"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            {" "}
            Enable dark mode
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.green}
          />
          <label
            className="form-check-label"
            for="flexSwitchCheckDefault"
          ></label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
