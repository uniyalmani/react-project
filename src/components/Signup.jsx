import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuthState, signup,startSignup } from '../actions/auth'

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            password:'',
            confirmPassword:'',

        }
    }
    componentWillUnmount(){
        this.props.dispatch(clearAuthState( ));
    }
    handleEmailChange = (e) =>{
        this.setState({
            email:e.target.value
        })
    }
    handlePasswordChange = (e) =>{
        console.log(e.target.value)
        this.setState({password:e.target.value})
    }
    handleConfirmPasswordChange = (e) =>{
        console.log(e.target.value)
        this.setState({confirmPassword:e.target.value})
    }
    handleSignin = (e)=>{
        e.preventDefault();
        const {email, password, confirmPassword, name} = this.state;

        if (email && password && name){
            this.props.dispatch(startSignup());
            this.props.dispatch(signup(email, password, confirmPassword, name));
        }

    }
    handleUserNameChange = (e) =>{
        console.log(e.target.value)
        this.setState({name:e.target.value})
    }
   
    render() { 
        const {inProgress , error,isLoggedin} = this.props.auth;
        if (isLoggedin){
            return <Redirect to='/' />
        }
        return ( 
        <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                    {error && <div className = "alert error-dailog">{error}</div>}
                <label for="inputEmail4">User Name</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="UserName" onChange = {this.handleUserNameChange}/>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" onChange = {this.handleEmailChange}/>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">password</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Password" onChange = {this.handlePasswordChange}/>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">Confirm Password</label>
                <input type="text" class="form-control" id="inputCity" onChange = {this.handleConfirmPasswordChange}/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary" onClick = {this.handleSignin} disabled = {inProgress}>Sign in</button>
    </form>
         );
    }
}
const  mapStateToProps = ({auth})=>({
   auth:auth,
});
 
export default connect(mapStateToProps)(Signup) ;