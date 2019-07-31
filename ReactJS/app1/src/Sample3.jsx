import React, { Component } from 'react'

export default class Sample3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log(props)
    }
    
    render() {
        return (
            <div>
                <hr/>
                <h3>I am from Sample 3 </h3>
                <p>Message Received From Sample 2 : {this.props.message.info}</p>
                <ul>
                {/* Array Iteration */}
                    {this.props.usersDetails.map((obj)=>{
                        if(obj.fname == "Anita"){
                            return <li key={obj.lname} onClick={()=>{this.clickUser(obj)}}>{obj.lname}</li>   
                        }else{
                            return <li key={obj.lname} onClick={()=>{this.clickUser(obj)}}>{obj.fname}</li>   

                                }
                                        })}
                </ul>
            </div>
        )
    }
}
