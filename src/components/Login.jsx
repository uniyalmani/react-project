import React, { Component } from 'react';
import '../login.css';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
        }
        // this.emailInputref = React.createRef();
        // this.passwordInputref = React.createRef();

    }
    handleFormsubmit = (e)=>{
        e.preventDefault()
        console.log('state', this.state);
        // console.log('emailInputref',this.emailInputref);
        // console.log('this.passwordInputref',this.passwordInputref);

    }
    handlePasswordChange = (e)=>{
        this.setState({
            email:e.target.value,
        })
    }
    handleEmailChange = (e)=>{
        this.setState({
            password:e.target.value,
        })
    }
   
   
    render() { 
        return ( 
            <div className = 'body'>
            <div class="container">
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <div class="card-header">
                            <h3>Sign In</h3>
                            <div class="d-flex justify-content-end social_icon">
                                <span><i class="fab fa-facebook-square"></i></span>
                                <span><i class="fab fa-google-plus-square"></i></span>
                                <span><i class="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="username" onChange ={this.handleEmailChange}/>
                                    
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" onChange = {this.handlePasswordChange} />
                                </div>
                                <div class="row align-items-center remember">
                                    <input type="checkbox" />Remember Me
                                </div>
                                <div class="form-group">
                                    <button class="btn float-right login_btn"  onClick = {this.handleFormsubmit}>Login1</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                                Don't have an account?<a href="#">Sign Up</a>
                            </div>
                            <div class="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default Login ;