import React, { Component } from 'react'
import axios from 'axios'
import '../ProfileAdmin.css'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

export default class Trainers extends Component {

    state = {
        idTrainer: '',
        documentType: '',
        name: '',
        lastname: '',
        code: '',
        password: '',
        edit: false,
        titleName: 'Crear Entrenador',
        trainers: []
    }

    getTrainers = async () => {
        const res = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/trainers');
        this.setState({ trainers: res.data });
    }

    async componentDidMount() {
        this.getTrainers()
    }

    handleValidationText = e => {
        this.setState({ [e.target.name]: e.target.value.toString().replace(/[^a-zA-ZáéíóúÁÉÍÓÚ ]+/, '') })
      }
    
      handleValidationNumber = e => {
        this.setState({ [e.target.name]: e.target.value.toString().replace(/[^0-9]+/, '') })
      }
    

    onSubmit = async (e, id) => {
        var flag = false
        this.state.trainers.map(trainer => (trainer.idTrainer === this.state.idTrainer ? flag = true : flag = false))
        if (flag) {
            alert("El entrenador ya ha sido registrado")
        } else {
            const newTrainer = {
                idTrainer: this.state.idTrainer,
                documentType: this.state.documentType,
                name: this.state.name,
                lastname: this.state.lastname,
                code: this.state.code,
                password: this.state.password
            }
            if (this.state.edit) {
                await axios.put('https://backend-sic-gym-uptc.herokuapp.com/api/trainers/' + id, newTrainer)
            } else {
                await axios.post('https://backend-sic-gym-uptc.herokuapp.com/api/trainers', newTrainer)
            }
            this.setState({
                idTrainer: '',
                documentType: '',
                name: '',
                lastname: '',
                code: '',
                password: '',
                edit: false,
                titleName: 'Crear Entrenador'
            })
            this.getTrainers();
        }
    }

    deleteTrainer = async (id) => {
        await axios.delete('https://backend-sic-gym-uptc.herokuapp.com/api/trainers/' + id)
        this.getTrainers();
    }

    updateUser = async (id) => {
        const res = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/trainers/' + id)
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
                                            <TextField onChange={this.handleValidationNumber} type="text" className="form-control" label="Número de documento" name="idTrainer" value={this.state.idTrainer} required />
                                        </div>
                                        <div className="form-group">
                                            <FormControl required className="form-control">
                                                <InputLabel id="DocumentType">Tipo de Documento</InputLabel>
                                                <Select
                                                    onChange={this.onInputChange}
                                                    value={this.state.documentType}
                                                    name="documentType"
                                                >
                                                    <MenuItem value="TI" key="TI">Tarjeta de Identidad</MenuItem>
                                                    <MenuItem value="CC" key="CC">Cédula de Ciudadanía</MenuItem>
                                                    <MenuItem value="CE" key="CE">Cédula de Extranjería</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="form-group">
                                            <TextField onChange={this.handleValidationText} type="text" className="form-control" label="Nombres" name="name" value={this.state.name} required />
                                        </div>
                                        <div className="form-group">
                                            <TextField onChange={this.handleValidationText} type="text" className="form-control" label="Apellidos" name="lastname" value={this.state.lastname} required />
                                        </div>
                                        <div className="form-group">
                                            <TextField onChange={this.handleValidationNumber} type="text" className="form-control" label="Código Institucional" name="code" value={this.state.code} required />
                                        </div>
                                        <div className="form-group">
                                            <TextField onChange={this.onInputChange} type="password" className="form-control" label="Contraseña" name="password" value={this.state.password} required />
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