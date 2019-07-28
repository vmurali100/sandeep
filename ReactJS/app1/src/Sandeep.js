import React, { Component } from "react";

// export default class Sandeep extends Component {}

export default class Sandeep1 extends Component {
  constructor() {
    super();
    this.state = {
      fname: "Murali",
      lname: "Krishna"
    };
    this.changeName = this.changeName.bind(this);
  }
  changeName() {
    // this.state.fname = "Sandeep";
    this.setState({ fname: "Sandeep" });
  }
  render() {
    return (
      <div>
        <h2>Welcome to Sandeep1 Component</h2>
        <button onClick={this.changeName}>Change Name</button>
        <h3>{this.state.fname}</h3>
        <h3>{this.state.lname}</h3>
      </div>
    );
  }
}

export class Sandeep2 extends Component {
  render() {
    return (
      <div>
        <h4>Welcome to Sandeep 2</h4>
      </div>
    );
  }
}

export class Sandeep3 extends Component {
  render() {
    return <div />;
  }
}

export class Sandeep4 extends Component {
  render() {
    return <div />;
  }
}
