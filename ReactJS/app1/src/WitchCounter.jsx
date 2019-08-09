import React, { Component } from 'react'

const UpdatedComponent = (ABC) =>{
    class Sandeep extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 Clickcount:0,
                 hoverCount:0
            }
            console.log(props)
        }
        render(){
            return <ABC 
            myName = "Murali" 
            hover={this.handleHover}
            clickH={this.handleClick}
            stateInfo={this.state}/>
        }

        handleHover=()=>{
            this.setState({hoverCount:this.state.hoverCount+1})
        }

        handleClick =()=>{
            console.log("clickCounter is called")
            this.setState({Clickcount:this.state.Clickcount+1})
        }
    }
    return Sandeep
}

export default UpdatedComponent