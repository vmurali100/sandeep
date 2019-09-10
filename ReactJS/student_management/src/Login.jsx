import React, { Component } from "react";
import axios from "axios";

import { BrowserRouter, Route, Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        role: "",
        email: "",
        password: ""
      }
    };
  }
  getUser = () => {
    const { history } = this.props;

    console.log(this.state.user);
    axios.get("http://localhost:3000/login").then(res => {
      var allusers = res.data;
      allusers.map(user => {
        if (JSON.stringify(user) === JSON.stringify(this.state.user)) {
          // this.context.router.history.push(`/Admin`);
          history.push("/admin");
        }
      });
    });
  };
  handleChange = event => {
    console.log(event.target.value);
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };
  render() {
    return (
      <div id="LoginForm">
        <div className="container">
          <h1 className="form-heading">Sunline IT Solutions</h1>
          <div className="login-form">
            <div className="main-div">
              <div className="panel">
                <h2>Student Management</h2>
                <p>Please enter your email and password</p>
              </div>
              <form id="Login">
                <div className="form-group">
                  <select
                    name="role"
                    className="form-control"
                    value={this.state.user.role}
                    onChange={event => {
                      this.handleChange(event);
                    }}
                  >
                    <option value="admin">Admin</option>
                    <option value="employee">Employee</option>
                    <option value="Student">Student</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email Address"
                    value={this.state.user.email}
                    onChange={event => {
                      this.handleChange(event);
                    }}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    name="password"
                    value={this.state.user.password}
                    onChange={event => {
                      this.handleChange(event);
                    }}
                  />
                </div>
                <div className="forgot">
                  <a href="reset.html">Forgot password?</a>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.getUser}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let user = {
  role: "admin",
  email: "",
  password: ""
};
