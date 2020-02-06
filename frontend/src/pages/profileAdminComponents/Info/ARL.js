import React, { Component } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import DeleteIcon from '@material-ui/icons/Delete'

export default class CreateARL extends Component {


    state = {
        arls: [],
        name: ''
    }

    getARLs = async () => {
        const res = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/arls')
        this.setState({ arls: res.data })
    }

    async componentDidMount() {
        this.getARLs()
    }


    onChangeARLname = (e) => {
        this.setState(
            { name: e.target.value }
        )
    }

    onSubmit = async (e) => {
        e.preventDefault()
        var flag = false
        this.state.arls.map(arl => (arl.name === this.state.name ? flag = true : flag = false))
        if (flag) {
            alert("Ya existe una ARL con el mismo nombre.")
            this.setState({
                name: ''
            })
        }else{
            const newARL = {
                name: this.state.name
            }
            await axios.post('https://backend-sic-gym-uptc.herokuapp.com/api/arls', newARL)
            this.setState({
                name: ''
            })
            this.getARLs();
        }
    }

    deleteARL = async (id) => {
        await axios.delete('https://backend-sic-gym-uptc.herokuapp.com/api/arls/' + id)
        this.getARLs()
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <div className="card card-body">
                        <h3>Crear una nueva ARL</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <TextField label="Nombre" type="text" className="form-control" onChange={this.onChangeARLname} value={this.state.name} />
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
                <div className="col-6">
                <ul className="list-group">
                       {
                           this.state.arls.map(arl => 
                           <li className="list-group-item list-group-item-action" key={arl._id}>
                               <label className="col-10">{arl.name}</label>
                               <button className="btn btn-danger" onClick={() => this.deleteARL(arl._id)} ><DeleteIcon /></button>
                           </li>)
                       }
                   </ul>
                </div>
            </div>
        )
    }
}