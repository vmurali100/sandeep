import React, { Component } from 'react'
import UpdatedComponent from './WitchCounter'

class HoverCounter extends Component {
     
    render() {
        const {hoverCount} = this.props.stateInfo
        const {hover} = this.props
        return (
            <div>
                <h2>Hovered {hoverCount} times</h2>
                <button onMouseOver={hover}>Hover ON Me</button>
            </div>
        )
    }

  
}

export default UpdatedComponent(HoverCounter)