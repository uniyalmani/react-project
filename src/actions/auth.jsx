import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_START,
  SIGNUP_FAILED,
  AUTHENTICATE_USER,
  LOGOUT,
  CLEAR_AUTH_STATE,
} from "./actionTypes";
import axios from "axios";
import { APIurls } from "../helpers/url";
import { getFormBody } from "../helpers/utils";

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user: user,
  };
}
export function login(email, password) {
  return (dispatch) => {
    console.log("heloo");
    dispatch(startLogin());
    console.log("below sta");
    const url = APIurls.login;
    fetch(url, {
      method: "POST",
      header: {
        'Content-Type': 'application/json'
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        if (data.success) {
          localStorage.setItem('token',data.data.token)
          dispatch(loginSuccess(data.data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}
//for sign up;

export function signup(email, password, confirmPassword, name) {
  console.log("hello signup");
  return (dispatch) => {
    const url = APIurls.signup;
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        firstName: name,
        lastName: 'uniyal',
        phoneNumber: '8755091229',
        roles: ['customer']
      })
    })
    .then((response) => response.json())
    .then(data => {
      console.log("data", data.message);
    })
  };
}
export function startSignup() {
  return {
    type: SIGNUP_START,
  };
}
export function signupFailed(error) {
  return {
    type: SIGNUP_START,
    error,
  };
}
export function signupSuccessful(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}
export function authenticateUser(user){
  return {
    type:AUTHENTICATE_USER,
    user,
  }
}
export function logoutUser(user){
  return {
    type:LOGOUT,
  }
}
export function clearAuthState (){
    return {
      type:CLEAR_AUTH_STATE
    }
}
