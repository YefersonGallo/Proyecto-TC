import React, { Component } from 'react'
import axios from 'axios'
import '../ProfileAdmin.css'

export default class Gyms extends Component {

    async componentDidMount() {
        this.getGyms()
        this.getTrainers()
    }

    state = {
        name: '',
        ubicationSel: 'TUN',
        ubication: 'Tunja (Sede Central)',
        code: '',
        titleName: 'Crear Gimnasio',
        gyms: [],
        codeSel: '',
        trainers: [],
        target: "",
        trainerSel: '',
        idTrainer: "",
        codeGym: "",
        nameTrainer: '',
        flag: true
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            code: this.state.ubicationSel + '-' + e.target.value
        })
    }

    onInputUbication = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.setState({
            ubication: this.changeValue(e.target.value)
        });
        this.setState({
            code: e.target.value + '-' + this.state.name
        })
    }

    onInputTrainer = e => {
        console.log(e.target.value)
        this.setState({
            idTrainer: e.target.value
        });
    }

    changeValue(key) {
        var nameCity = 'hfdh'
        switch (key) {
            case 'TUN':
                nameCity = 'Tunja (Sede Central)'
                break;
            case 'FCS':
                nameCity = 'Tunja (Facultad de Ciencias de la Salud)'
                break;
            case 'SOG':
                nameCity = 'Sogamoso'
                break;
            case 'DUI':
                nameCity = 'Duitama'
                break;
            case 'CHI':
                nameCity = 'Chiquinquirá'
                break;
            case 'BOG':
                nameCity = 'Bogotá'
                break;
            default:
                break;
        }
        return nameCity;
    }

    getGyms = async () => {
        const res = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/gyms');
        this.setState({ gyms: res.data });
    }

    getTrainers = async () => {
        const res2 = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/trainers');
        this.setState({ trainers: res2.data })
        if (res2.data.length !== 0) {
            this.setState({ trainerSel: (res2.data[0].idTrainer) });
        }
    }

    onSubmit = async (e, id) => {
        var flag = false
        this.state.gyms.map(gym => (gym.code === this.state.code ? flag = true : flag = false))
        if (flag) {
            alert("Ya existe un gimnasio con el mismo nombre en la ubicación que desea.")
        } else {
            const newGym = {
                code: this.state.code,
                name: this.state.name,
                ubication: this.state.ubication,
            }
            await axios.post('http://backend-sic-gym-uptc.herokuapp.com/api/gyms', newGym)
            this.setState({
                code: '',
                name: '',
                ubication: 'Tunja (Sede Central)',
            })
            this.getGyms();
        }
    }

    assingTrainer = async () => {
        const newTrainerGym = {
            idTrainer: this.state.trainerSel,
            codeGym: this.state.codeSel
        }
        await axios.post('http://backend-sic-gym-uptc.herokuapp.com/api/gymTrainer', newTrainerGym)
        const trainergym = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/gymTrainer/' + newTrainerGym.codeGym)
        if (trainergym.data.length !== 0) {
            this.getTrainerName(newTrainerGym.codeGym);
        }
    }

    showTrainerName = async (codeGym) => {
        const trainergym = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/gymTrainer/' + codeGym)
        this.setState({
            flag: trainergym.data.length === 0
        })
    }

    changeCode = (codeSel) => {
        if (this.state.trainers.length !== 0) {
            this.setState({
                codeSel, target: "#assingTrainer"
            })
        } else {
            this.setState({
                codeSel: "", target: ""
            })
            alert("No hay entrenadores registrados")
        }
    }

    getTrainerName = async (codeGym) => {
        const gymTrainer = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/gymTrainer/' + codeGym)
        if (gymTrainer.data.length !== 0){
            const trainer = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/trainers/' + gymTrainer.data[0].idTrainer)
            console.log(trainer)
            this.setState({
            nameTrainer: trainer.data[0].name + ' ' + trainer.data[0].lastname
            })
        }
    }

deleteGym = async (id, codeGym) => {
    await axios.delete('http://backend-sic-gym-uptc.herokuapp.com/api/gyms/' + id)
    const gymTrainer = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/gymTrainer/' + codeGym)
    if (gymTrainer.data.length !== 0) {
        await axios.delete('http://backend-sic-gym-uptc.herokuapp.com/api/gymTrainer/' + gymTrainer.data._id)
    }
    this.getGyms();
}

render() {
    return (
        <div className="Gyms">
            <div className="container">
                <div className="row">
                    <div className="col-4 formTrainer fixed-left">
                        <div className="card">
                            <div className="card-header text-center">
                                <h4>{this.state.titleName}</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input onChange={this.onInputChange} type="text" className="form-control" placeholder="Nombre del Gimnasio" name="name" value={this.state.name} required />
                                    </div>
                                    <div className="row ">
                                        <label className="selectId col col-5 color-text">Ubicación: </label>
                                        <select onChange={this.onInputUbication} value={this.state.ubicationSel} name="ubicationSel" className="comboId col colM form-control">
                                            <option value="TUN" key="TUN">Tunja (Sede Central)</option>
                                            <option value="FCS" key="FCS">Tunja (Facultad de Ciencias de la Salud)</option>
                                            <option value="SOG" key="SOG">Sogamoso</option>
                                            <option value="DUI" key="DUI">Duitama</option>
                                            <option value="CHI" key="CHI">Chiquinquirá</option>
                                            <option value="BOG" key="BOG">Bogotá</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="cardsTrainers col-8 accordion" id="listGyms">
                        <div className="container">
                            {
                                this.state.gyms.map(gym => (
                                    <div className="col" key={gym._id}>
                                        <div className="card">
                                            <div className="card-header" id={"heading" + gym._id}>
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link collapsed" onClick={() => { this.showTrainerName(gym.code); this.getTrainerName(gym.code)}} type="button" data-toggle="collapse" data-target={"#collapse" + gym._id} aria-expanded="false" aria-controls={"collapse" + gym._id}>
                                                        {gym.code}
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id={"collapse" + gym._id} className="collapse" aria-labelledby={"heading" + gym._id} data-parent="#listGyms">
                                                <div hidden={this.state.flag} className="card-body" id={"collapse" + gym._id}>
                                                    <h5>Entrenador: {this.state.nameTrainer}</h5>
                                                </div>
                                                <div className="card-footer row justify-content-center">
                                                    <button className="btn btn-success col-3" data-toggle="modal" data-target={this.state.target} onClick={() => { this.changeCode(gym.code) }}>Asignar Entrenador</button>
                                                    <button className="btn btn-danger col-3" onClick={() => this.deleteGym(gym._id)} >Borrar</button>
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
            <div className="modal fade" id="assingTrainer" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="assingTrainerLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="assingTrainerLabel">Asignar entrenador</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Seleccione el entrenador para {this.state.codeSel} </p>
                            <select onChange={this.onInputTrainer} value={this.state.trainerSel} name="trainerSel" className="comboId col colM form-control">
                                {
                                    this.state.trainers.map(trainer => (
                                        <option value={trainer.idTrainer} key={trainer._id}>{trainer.name + ' ' + trainer.lastname}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" onClick={() => { this.assingTrainer() }} data-dismiss="modal">Asignar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
