import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component{


    state = {
        epss: [],
        name: ''
    }

    getEPSs = async () =>{
        const res = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/epss');
        this.setState({epss: res.data});
    }

    async componentDidMount(){
        this.getEPSs
    }


    onChangeUsername = (e) =>{
        this.setState(
            {name: e.target.value}
        )
    }

    onSubmit = async e => {
        await axios.post('http://backend-sic-gym-uptc.herokuapp.com/api/epss', {
            name: this.state.name
        })
        this.setState({
            name:''
        })
        this.getEPSs();
        e.preventDefault();
    }

    deleteUser = async(id) => {
        await axios.delete('http://backend-sic-gym-uptc.herokuapp.com/api/epss' + id)
        this.getEPSs()
    }


    render(){
        return(
            <div className="row">
               <div className="col-md-4">
                   <div className="card card-body">
                       <h3>Create New User</h3>
                       <form onSubmit={this.onSubmit}> 
                           <div className="form-group">
                               <input type="text" className="form-control" onChange={this.onChangeUsername} value={this.state.username}/>
                           </div>
                       </form>
                       <button type="submit" className="btn btn-primary">
                           Guardar
                       </button>
                   </div>
               </div>
               <div className="col-md-8">
                   <ul className="list-group">
                       {
                           this.state.users.map(user => 
                           <li 
                           className="list-group-item list-group-item-action" 
                           key={user._id}
                           onDoubleClick={() => this.deleteUser(user._id)}>
                               {user.username}
                           </li>)
                       }
                   </ul>
               </div>
            </div>
        )
    }
}