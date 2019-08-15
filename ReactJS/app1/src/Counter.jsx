import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./Actions";
class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.stateCount}</h1>
        <button
          onClick={() => {
            this.props.dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  stateCount: state.count
});
export default connect(mapStateToProps)(Counter);
