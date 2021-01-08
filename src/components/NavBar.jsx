import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
class NavBar extends Component {
  logOut = () => {
    localStorage.removeItem("token");
    this.props.dispatch(this.logoutUser());
  };
  render() {
    const { auth } = this.props;
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

          <div className="search-results">
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
          {auth.isLoggedin && (
            <div className="user">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
                id="user-dp"
              />
              <span>{auth.user.name}</span>
            </div>
          )}

          <div className="nav-links ">
            <ul className="d-flax">
              {!auth.isLoggedin && (
                <li className="btn btn-success m-1">
                  <Link to="/login">Log in</Link>
                </li>
              )}
              {auth.isLoggedin && (
                <li className="btn btn-danger m-1">
                  <button onClick={this.logOut}>logout</button>
                </li>
              )}
              {!auth.isLoggedin && (
                <li className="btn btn-info m-1">
                  <Link to="/signup">Register</Link>
                </li>
              )}
              <li className="btn btn-info m-1">
                <Link to="/setting">Setting</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(NavBar);
