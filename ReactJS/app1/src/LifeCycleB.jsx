import React, { Component } from "react";

export default class LifeCycleB extends Component {
  // lifeCycle 1
  constructor(props) {
    super(props);

    this.state = {
      myName: "Murali"
    };
    console.log("constructor lifeCylce Trigged");
  }

  //   lifeCycle 2 .. Triggered First in Update Phse
  static getDerivedStateFromProps(state, props) {
    console.log("getDerivedStateFromProps lifecycle is Triggered");
    return {};
  }

  //   lifeCycle 3 .. Triggered 3 in Update Phase
  render() {
    console.log("render lifeCylce Trigged");
    return (
      <div>
        <h2>Welcome to LifeCycleB - {this.state.myName}</h2>

        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
  //   lifeCycle 4
  componentDidMount() {
    console.log("componentDidMount did Mount");
  }

  changeName = () => {
    this.setState({ myName: "Murali Krishna" });
  };
  //   Update lifeCycle 2
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate is called");
    return true;
  }

  //   Update lifeCycle 4
  getSnapshotBeforeUpdate(props, state) {
    console.log(props);
    console.log(state);
    console.log("getSnapshotBeforeUpdate is Triggered");
    return null;
  }
  //   Update lifeCycle 5

  componentDidUpdate() {
    console.log(this.state);
    console.log("componentDidUpdate is triggered");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount is Triggered  ");
    window.removeEventListener("resize", this.resizeListener);
  }
}
