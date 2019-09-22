import React, { Component } from "react";
import { connect } from "react-redux";
import { create, edit, deleteUser, getUsers } from "./actions";
import axios from "axios";
class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editUser: sampleUser,
      index: null
    };
  }
  componentDidMount() {
    this.getLatestUsers();
  }
  createUser = () => {
    axios
      .post("http://localhost:3000/users/", this.state.editUser)
      .then(res => {
        this.getLatestUsers();
      });
  };
  getLatestUsers = () => {
    axios.get("http://localhost:3000/users").then(res => {
      this.props.getUsers(res.data);
    });
  };
  deleteUser = user => {
    axios.delete("http://localhost:3000/users/" + user.id).then(res => {
      this.getLatestUsers();
    });
  };
  handleChange = e => {
    this.state.editUser[e.target.name] = e.target.value;
    this.setState({ editUser: this.state.editUser });
  };
  editUser = (i, user) => {
    this.setState({ editUser: user, index: i });
  };
  updateUser = i => {
    axios
      .put(
        "http://localhost:3000/users/" + this.state.editUser.id,
        this.state.editUser
      )
      .then(res => {
        this.getLatestUsers();
      });
  };
  render() {
    const { editUser } = this.state;

    return (
      <div>
        <ul>
          {this.props.userDetails.users.map((user, i) => {
            return (
              <li key={i}>
                {user.firstName}{" "}
                <button
                  onClick={() => {
                    this.editUser(i, user);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    this.deleteUser(user);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <div>
          <form>
            <label htmlFor="">First Name : </label>
            <input
              type="text"
              name="firstName"
              value={editUser.firstName}
              onChange={e => {
                this.handleChange(e);
              }}
            />
            <br />
            <label htmlFor="">Last Name : </label>
            <input
              type="text"
              name="lastName"
              value={editUser.lastName}
              onChange={e => {
                this.handleChange(e);
              }}
            />
            <br />
            <br />
            <button onClick={this.updateUser} type="button">
              Update
            </button>
            <button onClick={this.createUser} type="button">
              Create
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    userDetails: state
  };
}

export default connect(
  mapStateToProps,
  { create, getUsers }
)(Sample);

let sampleUser = {
  firstName: " ",
  lastName: "",
  id: null
};
