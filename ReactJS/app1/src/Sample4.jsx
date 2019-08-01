import React, { Component } from 'react';
// import axios from "axios";


export default class Sample4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[],
             objEdit:{}
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
        this.setState({objEdit:obj})
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
                    <div class="col-sm-8"><table className="table">
                    <thead>
                        <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Tel</th>
                        <th scope="col">Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((obj,i)=>{
                            return <tr key={i}>{Object.keys(obj).map((property)=>{
                                return <td key={obj[property]}>{obj[property]}</td>
                                
                            })}<td><button onClick={()=>{this.editUser(obj,i)}} className="btn btn-info">Edit</button></td>
                            <td><button onClick={()=>{this.deleteUser(i)}} className="btn btn-danger">Delete</button></td></tr>
                        })}
                    </tbody>
                </table></div>
                    <div class="col-sm-4"><form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                  
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form></div>
                </div>
               
            </div>
        )
    }
}
