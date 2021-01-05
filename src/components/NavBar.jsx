import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="left-div">
          <Link to="/">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/svg/483/483356.svg"
            alt="search-icon"
          />
          <input placeholder="Search" />

          {/* <div className="search-results">
            <ul>
              <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                />
                <span>John Doe</span>
              </li>
              <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                />
                <span>ashu Doe</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          <div className="user">
            <img
              src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
              alt="user-dp"
              id="user-dp"
            />
            <span>John Doe</span>
          </div> */}
          <div className="nav-links ">
            <ul className = "d-flax" >
              <li className = "btn btn-success m-1">
                <Link to="/login">Log in</Link>
              </li>
              <li className = "btn btn-danger m-1">
                <Link to="/signout">Log out</Link>
              </li>
              <li className = "btn btn-info m-1">
                <Link to="/signup">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
