import React, { Component } from 'react';
import axios from "axios";


export default class Sample4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[],
             objEdit:obj
        }
        // this.getDataFromServer()
    }

    async componentDidMount(){
        const response = await fetch(`http://localhost:3000/users`);
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
        // let delusers =this.state.users.splice(i,1)
        // console.log(delusers)
        // this.setState({users:this.state.users})
        console.log("deleteUser called",i)
        axios.delete("http://localhost:3000/users/"+this.state.users[i].id).then(res=>{
            console.log()
        }).catch((error)=>{
            console.log("Error Occured")
        })
    }
    handleInput(e){
        this.state.objEdit[e.target.name] = e.target.value
        this.setState({objEdit:this.state.objEdit})
    }

    updateUser = () =>{
        console.log(this.state.objEdit)
        this.state.objEdit.id=null
        axios.post("http://localhost:3000/users/",this.state.objEdit).then(res=>{
            console.log()
        }).catch((error)=>{
            console.log("Error Occured")
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-8"><table className="table">
                    <thead>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Tel</th>
                        <th>Address</th>
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
                </table>
                </div>
                    <div className="col-sm-4"><form>
                    <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" className="form-control" name="fname" placeholder="Enter First Name" value={this.state.objEdit.fname} onChange={(e)=>{this.handleInput(e)}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" className="form-control" name="lname" placeholder="Enter First Name" value={this.state.objEdit.lname} onChange={(e)=>{this.handleInput(e)}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tel">Tel</label>
                        <input type="text" className="form-control" name="tel" placeholder="Tel" value={this.state.objEdit.tel} onChange={(e)=>{this.handleInput(e)}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" name="address" placeholder="Enter First Name" value={this.state.objEdit.address} onChange={(e)=>{this.handleInput(e)}}/>
                    </div> 
                    <div className="form-group">
                        <label htmlFor="fname">City</label>
                        <input type="text" className="form-control" name="city" placeholder="Enter First Name" value={this.state.objEdit.city} onChange={(e)=>{this.handleInput(e)}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input type="text" className="form-control" name="state" placeholder="Enter First Name" value={this.state.objEdit.state} onChange={(e)=>{this.handleInput(e)}}/>
                    </div> 
                    <div className="form-group">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" className="form-control" name="zip" placeholder="Enter First Name" value={this.state.objEdit.zip} onChange={(e)=>{this.handleInput(e)}}/>
                    </div>    
                    <button type="button" className="btn btn-primary" onClick={this.updateUser}>Update</button>
                    </form>
                </div>
                </div>
               
            </div>
        )
    }
}

let obj={
    fname:"",
    lname:"",
    tel:"",
    address:"",
    city:"",
    state:"",
    zip:''
}