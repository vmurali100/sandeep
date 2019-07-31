import React, { Component } from 'react'

export default class Sample3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log(props)

    }
    
    addAPerson=()=>{
        let person = {
            "fname": "Murali",
            "lname": "Krishna",
            "state": "KA",
            "zip": 63065
        }
        this.props.samfunc(person)
    }
    render() {
        //Destructering
        const { msg , users} = this.props.info
        
        return (
            <div>
                <hr/>
                <button onClick={this.addAPerson}>Call Method from Sample2</button>
                <h3>I am from Sample 3 </h3>
                <p>Message Received From Sample 2 : {msg.info}</p>
                <ul>
                {/* Array Iteration */}
                    {users.map((obj)=>{
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
