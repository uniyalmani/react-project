import {LOGIN_START,LOGIN_SUCCESS, LOGIN_FAILED, SIGNUP_START, SIGNUP_FAILED, SIGNUP_SUCCESS, AUTHENTICATE_USER, LOGOUT, CLEAR_AUTH_STATE } from '../actions/actionTypes';
const initialAutState = {
        user:{},
        error:null,
        isLoggedin :false,
        inProgress:false,
}
export default function auth(state = initialAutState, action){
    switch(action.type){
        case CLEAR_AUTH_STATE:
            return {
                ...state,
                error:null
            }
        case LOGIN_START:
            return {
                ...state,
                inProgress:true
            }
        case SIGNUP_START:
            return{
                ...state,
                inProgress:true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user:action.user,
                inProgress:false,
                isLoggedin:true,
                error:null,
            }
        case SIGNUP_SUCCESS:
            return {
                 ...state,
                user:action.user,
                inProgress:false,
                isLoggedin:true,
                error:null,
                }
            case LOGIN_FAILED:
                return {
                    ...state,
                    inProgress:false,
                    error:action.error,
                }
            case LOGIN_FAILED:
                 return {
                    ...state,
                    inProgress:false,
                    error:action.error,
                    }
            case AUTHENTICATE_USER:
                return{
                ...state,
                user:action.user,
                isLoggedin:true,
                }
            case LOGOUT:
                return{
                    ...state,
                    user:{},
                    isLoggedin:false,
                    } 
            default:
                return state;
    }
}