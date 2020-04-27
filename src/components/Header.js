import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-danger mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <i className="fa fa-phone px-1"></i>
            Contact Manager
          </Link>
          <ul className="nav ml-auto">
            <li className="nav-item">
              <Link className="text-white nav-link" to="/">
                Home
                <i className="fa fa-home px-1"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-white nav-link" to="/add-contact">
                Add
                <i className="fa fa-plus px-1"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="text-white nav-link" to="/about">
                About
                <i className="fa fa-question px-1"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
