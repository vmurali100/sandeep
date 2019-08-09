import React, { Component } from 'react';
import UpdatedComponent from './WitchCounter'

class ClickCounter extends Component {
    render() {
        const {Clickcount} = this.props.stateInfo
        const { clickH } = this.props
        return (
            <div>
                <h2>Clicked {Clickcount} times</h2>
                <button onClick={clickH}>Click</button>
            </div>
        )
    }
  
}


export default UpdatedComponent(ClickCounter)