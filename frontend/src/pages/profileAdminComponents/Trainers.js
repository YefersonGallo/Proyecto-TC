import React, { Component } from 'react'
import axios from 'axios'
import '../ProfileAdmin.css'

export default class Trainers extends Component {

    state = {
        idTrainer: '',
        documentType: 'TI',
        name: '',
        lastname: '',
        code: '',
        password: '',
        edit: false,
        titleName: 'Crear Entrenador',
        trainers: []
    }

    getTrainers = async () => {
        const res = await axios.get('http://localhost:4060/api/trainers');
        this.setState({ trainers: res.data });
    }

    async componentDidMount() {
        this.getTrainers()
    }

    onSubmit = async (e, id) => {
        const newTrainer = {
            idTrainer: this.state.idTrainer,
            documentType: this.state.documentType,
            name: this.state.name,
            lastname: this.state.lastname,
            code: this.state.code,
            password: this.state.password
        }
        if (this.state.edit) {
            await axios.put('http://localhost:4060/api/trainers/' + id, newTrainer)
        } else {
            await axios.post('http://localhost:4060/api/trainers', newTrainer)
        }
        this.setState({
            idTrainer: '',
            documentType: 'TI',
            name: '',
            lastname: '',
            code: '',
            password: '',
            edit: false,
            titleName: 'Crear Entrenador'
        })
        this.getTrainers();
        e.preventDefault();
    }

    deleteTrainer = async (id) => {
        await axios.delete('http://localhost:4060/api/trainers/' + id)
        this.getTrainers();
    }

    updateUser = async (id) => {
        const res = await axios.get('http://localhost:4060/api/trainers/' + id)
        this.setState({
            idTrainer: res.data.idTrainer,
            documentType: res.data.documentType,
            name: res.data.name,
            lastname: res.data.lastname,
            code: res.data.code,
            password: res.data.password
        })
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="Trainers">
                <div className="container">
                    <div className="row">
                        <div className="col-4 formTrainer sidebar-sticky">
                            <div className="card cardTrainer">
                                <div className="card-header text-center">
                                    <h4>{this.state.titleName}</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <input onChange={this.onInputChange} type="number" className="form-control" placeholder="Número de documento" name="idTrainer" value={this.state.idTrainer} required />
                                        </div>
                                        <div className="row ">
                                            <label className="selectId col col-5 color-text">Tipo de Documento: </label>
                                            <select onChange={this.onInputChange} value={this.state.documentType} name="documentType" className="comboId col colM form-control">
                                                <option value="TI" key="TI">Tarjeta de Identidad</option>
                                                <option value="CC" key="CC">Cédula de Ciudadanía</option>
                                                <option value="CE" key="CE">Cédula de Extranjería</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.onInputChange} type="text" className="form-control" placeholder="Nombres" name="name" value={this.state.name} required />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.onInputChange} type="text" className="form-control" placeholder="Apellidos" name="lastname" value={this.state.lastname} required />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.onInputChange} type="number" className="form-control" placeholder="Código Institucional" name="code" value={this.state.code} required />
                                        </div>
                                        <div className="form-group">
                                            <input onChange={this.onInputChange} type="password" className="form-control" placeholder="Contraseña" name="password" value={this.state.password} required />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Guardar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="cardsTrainers col-8">
                            <div className="container">
                                <div className="row row-cols-2">
                                    {
                                        this.state.trainers.map(trainer => (
                                            <div className="col" key={trainer._id}>
                                                <div className="card cardTrainer">
                                                    <div className="card-body">
                                                    <div className="row text-center">
                                                            <h5 className="col card-title">{trainer.name + " " + trainer.lastname}</h5>
                                                        </div>
                                                        <div className="row">
                                                            <h6 className="col">Tipo de Documento: </h6>
                                                            <p className="col textCardT" >{trainer.documentType}</p>
                                                        </div>
                                                        <div className="row">
                                                            <h6 className="col">Número de Documento: </h6>
                                                            <p className="col textCardT" >{trainer.idTrainer}</p>
                                                        </div>
                                                        <div className="row">
                                                            <h6 className="col">Código Institucional: </h6>
                                                            <p className="col textCardT" >{trainer.code}</p>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer justify-content-center">
                                                        <div className="footerDiv">
                                                            <button className="btn btn-danger btnRemove col-6" onClick={() => this.deleteTrainer(trainer._id)} >Borrar</button>
                                                            <button className="btn btn-info col-6 btnUpdate" onClick={() => { this.setState({ titleName: 'Editar Entrenador', edit: true }); this.updateUser(trainer._id)}} >Editar</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}