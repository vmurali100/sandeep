import React, { Component } from 'react';
// import axios from "axios";


export default class Sample4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[]
        }
        // this.getDataFromServer()
    }

    async componentDidMount(){
        const response = await fetch(`http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true`);
        const json = await response.json();
        this.setState({ users: json });
    }

    // getDataFromServer=()=>{
    //     axios.get("http://localhost:3000/users").then(res=>{
    //         console.log(res.data)
    //         this.setState({users:res.data})
    //     })
    //     fetch("http://localhost:3000/users").then((res)=>{
    //         res.json().then((data)=>{
    //             console.log(data)
    //             this.setState({users:data})

    //         })
    //     })
    // }
    editUser=(obj,index)=>{
        console.log(obj,index)
    }
    deleteUser=(i)=>{
        let delusers =this.state.users.splice(i,1)
        console.log(delusers)
        this.setState({users:this.state.users})
        console.log("deleteUser called",i)
    }
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-sm-8">col-sm-8</div>
                    <div class="col-sm-4">col-sm-4</div>
                </div>
               <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {this.state.users.map((obj,i)=>{
        return <tr key={i}>{Object.keys(obj).map((property)=>{
            return <td key={obj[property]}>{obj[property]}</td>
            
        })}<td><button onClick={()=>{this.editUser(obj,i)}}>Edit</button></td><td><button onClick={()=>{this.deleteUser(i)}}>Delete</button></td></tr>
    })}
  </tbody>
</table>
            </div>
        )
    }
}
