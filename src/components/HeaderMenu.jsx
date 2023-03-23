import React, { useState } from "react";
import Logo from "./icons/Logo";

const HeaderMenu = () => {
  const [collapse, setCollapse] = useState(true);
  return (
    <div className="d-flex justify-content-center">
      <div className="header-container">
        <nav
          className="navbar navbar-expand-lg align-items-center scrolled header-scrolled"
          id="navbar-header"
        >
          <a className="navbar-brand" href="index.html">
            <Logo color="#3f7bf3" />
          </a>

          <button
            className={`navbar-toggler ${collapse ? "collapsed" : "change"}`}
            type="button"
            onClick={() => setCollapse(!collapse)}
            data-bs-toggle="collapse"
            data-bs-target="#custom-navbar"
            aria-controls="custom-navbar"
            aria-expanded={collapse ? false : true}
            aria-label="Toggle navigation"
          >
            <span className="custom-toggler-icon"></span>
            <span className="custom-toggler-icon"></span>
            <span className="custom-toggler-icon"></span>
          </button>

          <div
            className={`${
              collapse ? "collapse" : "collapse show"
            }  navbar-collapse`}
            id="custom-navbar"
          >
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <a
                  href="#1"
                  className="nav-link page-scroll"
                  onClick={() => {
                    setCollapse(!collapse);
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#2"
                  className="nav-link page-scroll"
                  onClick={() => {
                    setCollapse(!collapse);
                  }}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#3"
                  className="nav-link page-scroll"
                  onClick={() => {
                    setCollapse(!collapse);
                  }}
                >
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#4"
                  className="nav-link page-scroll"
                  onClick={() => {
                    setCollapse(!collapse);
                  }}
                >
                  Process
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#5"
                  className="nav-link page-scroll"
                  onClick={() => {
                    setCollapse(!collapse);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMenu;