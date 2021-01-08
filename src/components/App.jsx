import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from "react-router-dom";

import { fetchPosts } from "../actions/posts";
import {authenticateUser, signup } from '../actions/auth'
import * as  jwtDecode from 'jwt-decode';


import { PostsList, NavBar, Home,Login,Logout,Signup, setting } from "./";

const PrivateRoute = (PrivateRouteProps) => {
  const {isLoggedin, path,   component:Component} = PrivateRouteProps;
  console.log(' hrlloj')
  return (
    <Route 
    path = {path}
    render = {(props) =>{
      return !isLoggedin ? <Component {...props}/>:<Redirect to ='/login'/>;
    }
    }
    />
  )

}

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    const token = localStorage.getItem('token');
    if(token){
        const user = jwtDecode(token)
        this.props.dispatch(authenticateUser({
          email:user.email,
          _id: user._id,
          name:user.name,

        }))
    }
  }
 
  render() {
    const { posts,auth } = this.props;
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
          <PrivateRoute
              path="/setting"
              component = {setting}
              isLoggedin = {auth.isLoggedin}
             />
            <Route
              path="/login"
              render={(props) => {
                return <Login {...props} posts={posts} />;
              }}
            />
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
    auth:state.auth,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
