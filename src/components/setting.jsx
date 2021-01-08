import React, { Component } from "react";
import { connect } from "react-redux";

class setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name,
      password: "",
      confirmPassword: "",
      editMode: false,
    };
  }
  handleChange = (fieldName, val)=>{
    this.setState({
      [fieldName]:val,
    })
  }
  render() {
    const { user } = this.props.auth;
    const { editMode } = this.state;
    console.log("inside setting");
    return (
      <div className="settings">
        <div className="img-container ">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>
        <div className="field">
          <div className="field-label">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div className="field-value">{user.name}</div>
          )}
        </div>
        {editMode && (
          <div className="field">
            <div className="field-label">New Password</div>
            <input
              type="text"
              onChange={(e) => this.handleChange('password',e.target.value)}
              value={this.state.password}
            />
          </div>
        )}
        {editMode && (
          <div className="field">
            <div className="field-label">Confirm Password</div>
            <input
              type="text"
              onChange={(e) => this.handleChange('confirmPassword',e.target.value)}
              value={this.state.confirmPassword}
            />
          </div>
        )}
        <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn">Save</button>
          ) : (
            <button className="button edit-btn" onClick ={()=>this.handleChange('editMode',true)}>Edit</button>
          )}
          {editMode && <div className="go-back" onClick={()=>this.handleChange('editMode',false)}>GO Back</div>}
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(setting);
