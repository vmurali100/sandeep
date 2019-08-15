import React, { Component } from 'react'
import Sample3 from './Sample3';

export default class Sample2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg,
             users
        }
    }

    sample2method=(obj)=>{
        console.log("I am from Sample2(Parent)")
        let myUsers = [...this.state.users]
        myUsers.push(obj)
        this.setState({users:myUsers})
    }
    
    render() {
        return (
            <div>
                <h2>I am From Sample Compoentn 2</h2>
                <Sample3 info={this.state} samfunc={this.sample2method}></Sample3>
            </div>
        )
    }
}

let msg = {info:"Hello World From Sample 2"}


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