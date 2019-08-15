import React, { Component } from "react";

export default class LIfeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myName: "Murali "
    };
    console.log("Contructor Triggered");
  }
  updateName = () => {
    this.setState({ myName: "Murali Krishna" });
  };

  //   This method will be called mounting phase and Updating Phase
  static getDerivedStateFromProps(state, props) {
    console.log("getDerivedStateFromProps Triggered");
    return {};
  }
  render() {
    console.log("Render Method Triggered");
    return (
      <div>
        <h1>{this.state.myName}</h1>
        <button onClick={this.updateName}>Updated</button>
      </div>
    );
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate is called");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate is Triggered");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is triggered");
  }
  componentDidMount() {
    console.log("componentDidMount is called");
  }
}
