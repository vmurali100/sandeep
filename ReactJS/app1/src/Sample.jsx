import React, { Component } from 'react'

export default class Sample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             obj:{
                 fname:"Murali",
                 lname:"Krishna",
                 email:"Vmurali@gmail.com"
             }
        }
        console.log(Object.keys(this.state.obj))
    }
    clickUser=(user)=>{
        console.log(user)
    }
    render() {
        return (
            <div>
                {/* Object Iteration */}
                {/* {Object.keys(this.state.obj).map((property)=>{
                    return <p key={property}>{property}:{this.state.obj[property]}</p>
                })} */}
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

const users = [
    {
        "fname": "Anita",
        "lname": "Hopson",
        "state": "OK",
        "zip": 34526
    },
    {
        "fname": "Alexander",
        "lname": "Schuessler",
        "state": "NM",
        "zip": 34221
    },
    {
        "fname": "Cindy",
        "lname": "Stokes",
        "state": "CA",
        "zip": 52365
    },
    {
        "fname": "Roberto",
        "lname": "Doerfler",
        "state": "WI",
        "zip": 39003
    },
    {
        "fname": "Earnest",
        "lname": "Sommers",
        "state": "AZ",
        "zip": 63065
    }
]