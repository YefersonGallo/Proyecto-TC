import React, { Component } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import DeleteIcon from '@material-ui/icons/Delete'

export default class CreateParent extends Component {


    state = {
        parents: [],
        name: ''
    }

    getParents = async () => {
        const res = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/parents')
        this.setState({ parents: res.data })
    }

    async componentDidMount() {
        this.getParents()
    }


    onChangeParentname = (e) => {
        this.setState(
            { name:  e.target.value.toString().replace(/[^a-zA-ZáéíóúÁÉÍÓÚ ]+/, '') } 
        )
    }

    onSubmit = async (e) => {
        e.preventDefault()
        var flag = false
        this.state.parents.map(parent => (parent.name === this.state.name ? flag = true : flag = false))
        console.log(flag)
        if (flag) {
            alert("Ya existe ese parentesco")
            this.setState({
                name: ''
            })
        }else{
            const newParent = {
                name: this.state.name
            }
            await axios.post('http://backend-sic-gym-uptc.herokuapp.com/api/parents', newParent)
            this.setState({
                name: ''
            })
            this.getParents();
        }
    }

    deleteParent = async (id) => {
        await axios.delete('http://backend-sic-gym-uptc.herokuapp.com/api/parents/' + id)
        this.getParents()
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <div className="card card-body">
                        <h3>Crear una nuevo Parentesco</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <TextField label="Nombre" type="text" className="form-control" onChange={this.onChangeParentname} value={this.state.name} />
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
                <div className="col-6">
                <ul className="list-group">
                       {
                           this.state.parents.map(parent => 
                           <li className="list-group-item list-group-item-action" key={parent._id}>
                               <label className="col-10">{parent.name}</label>
                               <button className="btn btn-danger" onClick={() => this.deleteParent(parent._id)} ><DeleteIcon /></button>
                           </li>)
                       }
                   </ul>
                </div>
            </div>
        )
    }
}