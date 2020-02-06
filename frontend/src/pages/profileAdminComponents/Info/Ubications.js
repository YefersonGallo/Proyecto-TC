import React, { Component } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import DeleteIcon from '@material-ui/icons/Delete'

export default class CreateUbication extends Component {


    state = {
        ubications: [],
        name: ''
    }

    getUbications = async () => {
        const res = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/ubications')
        this.setState({ ubications: res.data })
    }

    async componentDidMount() {
        this.getUbications()
    }

    onChangeUbicationname = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    onSubmit = async (e) => {
        e.preventDefault()
        var flag = false
        this.state.ubications.map(ubication => (ubication.name === this.state.name ? flag = true : flag = false))
        if (flag) {
            alert("Ya existe esa ubicación")
            this.setState({
                name: '', 
                code:''
            })
        }else{
            const newUbication = {
                name: this.state.name,
                code: this.state.code
            }
            await axios.post('https://backend-sic-gym-uptc.herokuapp.com/api/ubications', newUbication)
            this.setState({
                name: '',
                code:''
            })
            this.getUbications();
        }
    }

    deleteUbication = async (id) => {
        await axios.delete('https://backend-sic-gym-uptc.herokuapp.com/api/ubications/' + id)
        this.getUbications()
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <div className="card card-body">
                        <h3>Crear una nueva Ubicación</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <TextField label="Nombre" type="text" className="form-control m-1" onChange={this.onChangeUbicationname} value={this.state.name} name="name" required />
                                <TextField label="Código" type="text" className="form-control m-1 mt-2" onChange={this.onChangeUbicationname} value={this.state.code} name="code" required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
                <div className="col-6">
                <ul className="list-group">
                       {
                           this.state.ubications.map(ubication => 
                           <li className="list-group-item list-group-item-action" key={ubication._id}>
                               <label className="col-10">{ubication.name} {ubication.code}</label>
                               <button className="btn btn-danger" onClick={() => this.deleteUbication(ubication._id)} ><DeleteIcon /></button>
                           </li>)
                       }
                   </ul>
                </div>
            </div>
        )
    }
}