import React, { Component } from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import DeleteIcon from '@material-ui/icons/Delete'

export default class CreateEPS extends Component {


    state = {
        epss: [],
        name: ''
    }

    getEPSs = async () => {
        const res = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/epss')
        this.setState({ epss: res.data })
    }

    async componentDidMount() {
        this.getEPSs()
    }


    onChangeEPSname = (e) => {
        this.setState(
            { name: e.target.value }
        )
    }

    onSubmit = async (e) => {
        e.preventDefault()
        var flag = false
        this.state.epss.map(eps => (eps.name === this.state.name ? flag = true : flag = false))
        if (flag) {
            alert("Ya existe una EPS con el mismo nombre.")
            this.setState({
                name: ''
            })
        }else{
            const newEPS = {
                name: this.state.name
            }
            await axios.post('http://backend-sic-gym-uptc.herokuapp.com/api/epss', newEPS)
            this.setState({
                name: ''
            })
            this.getEPSs();
        }
    }

    deleteEPS = async (id) => {
        await axios.delete('http://backend-sic-gym-uptc.herokuapp.com/api/epss/' + id)
        this.getEPSs()
    }

    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <div className="card card-body">
                        <h3>Crear una nueva EPS</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <TextField label="Nombre" type="text" className="form-control" onChange={this.onChangeEPSname} value={this.state.name} />
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                </div>
                <div className="col-6">
                    <ul className="list-group ">
                        {
                            this.state.epss.map(eps =>
                                <li className="list-group-item list-group-item-action row" key={eps._id}>
                                    <label className="col-10">{eps.name}</label>
                                    <button className="btn btn-danger" onClick={() => this.deleteEPS(eps._id)} ><DeleteIcon /></button>
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}