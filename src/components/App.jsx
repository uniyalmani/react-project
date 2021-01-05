import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { fetchPosts } from "../actions/posts";
import { PostsList, NavBar, Home,Login,Logout,Signup } from "./";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route
              path="/login"
              render={(props) => {
                return <Login {...props} posts={posts} />;
              }}
            />{" "}
            <Route
              path="/signout"
              render={(props) => {
                return <Logout {...props} posts={posts} />;
              }}
            />
            <Route
              path="/signup"
              render={(props) => {
                return <Signup {...props} posts={posts} />;
              }}
              />
              <Route
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
