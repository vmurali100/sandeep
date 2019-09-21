import React, { Component } from "react";
import { connect } from "react-redux";
import { create, edit } from "./actions";

class Sample extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.sayHelloState}>Helo</button>
        <h2>{this.props.num}</h2>
      </div>
    );
  }
  sayHelloState = () => {
    this.props.create();
  };
}

function mapStateToProps(state) {
  return {
    num: state.num
  };
}

export default connect(
  mapStateToProps,
  { create, edit }
)(Sample);
