import React, { Component } from 'react'
import axios from 'axios'
import '../ProfileAdmin.css'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Chip from '@material-ui/core/Chip'
import Input from '@material-ui/core/Input'

export default class Gyms extends Component {

    async componentDidMount() {
        this.getGyms()
        this.getTrainers()
        const res = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/ubications')
        this.setState({
            ubications: res.data,
        })
    }

    state = {
        name: '',
        ubicationSel: '',
        ubication: '',
        titleName: 'Crear Gimnasio',
        gyms: [],
        codeSel: '',
        trainers: [],
        target: "",
        trainersSel: [],
        trainersSelAux: [],
        idTrainer: "",
        codeGym: "",
        nameTrainer: '',
        flag: true,
        ubications: []
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

    handleChange = (e) => {
        this.setState({
            trainersSel: e.target.value
        })
    };

    onSubmit = async (e) => {
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
                ubication: '',
            })
            this.getGyms();
        }
        e.preventDefaul()
        e.stopPropagation()
    }

    assingTrainer = async () => {
        const newTrainerGym = {
            idTrainer: this.state.trainersSel,
            codeGym: this.state.codeSel
        }
        await axios.post('http://backend-sic-gym-uptc.herokuapp.com/api/gymTrainer', newTrainerGym)
        const trainergym = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/gymTrainer/' + newTrainerGym.codeGym)
        if (trainergym.data.length !== 0) {
            this.getTrainerName(newTrainerGym.codeGym);
        }
        console.log(this.state.nameTrainer)
    }

    showTrainerName = async (codeGym) => {
        const trainergym = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/gymTrainer/' + codeGym)
        this.setState({
            flag: trainergym.data.length === 0
        })
    }

    getTrainerName = async (codeGym) => {
        const gymTrainer = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/gymTrainer/' + codeGym)
        if (gymTrainer.data.length !== 0) {
            console.log(gymTrainer.data[0].idTrainer)
            var names = ""
            for (let index = 0; index < gymTrainer.data[0].idTrainer.length; index++) {
                const trainer = gymTrainer.data[0].idTrainer[index];
                const trainerAux = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/trainers/' + trainer.idTrainer)
                if (trainerAux.data.length !== 0) {
                    if (index < gymTrainer.data[0].idTrainer.length - 1) {
                        names += trainerAux.data[0].name + ' ' + trainerAux.data[0].lastname + ', '
                    } else {
                        names += trainerAux.data[0].name + ' ' + trainerAux.data[0].lastname + ' '
                    }
                }
            }
            this.showTrainerName(codeGym)
            this.setState({
                nameTrainer: names
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
                                    <form>
                                        <div className="form-group">
                                            <TextField onChange={this.onInputChange} type="text" className="form-control" label="Nombre del Gimnasio" name="name" value={this.state.name} required />
                                        </div>
                                        <div className="form-group">
                                            <FormControl required className="form-control">
                                                <InputLabel id="parent">Ubicación</InputLabel>
                                                <Select
                                                    onChange={this.onInputUbication}
                                                    value={this.state.ubicationSel}
                                                    name="ubicationSel"
                                                    labelId="parent"
                                                >
                                                    {
                                                        this.state.ubications.map(ubication =>
                                                            <MenuItem value={ubication.code} key={ubication._id}>{ubication.name}</MenuItem>
                                                        )
                                                    }
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <button onClick={this.onSubmit} className="btn btn-primary">Guardar</button>
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
                                                        <button className="btn btn-link collapsed" onClick={() => { this.setState({ codeSel: gym.code }); this.showTrainerName(gym.code); this.getTrainerName(gym.code) }} type="button" data-toggle="collapse" data-target={"#collapse" + gym._id} aria-expanded="false" aria-controls={"collapse" + gym._id}>
                                                            {gym.code}
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div id={"collapse" + gym._id} className="collapse" aria-labelledby={"heading" + gym._id} data-parent="#listGyms">
                                                    <div hidden={this.state.flag} className="card-body" id={"collapse" + gym._id}>
                                                        <h5>Entrenador: {this.state.nameTrainer}</h5>
                                                    </div>
                                                    <div className="card-body" id={"collapse" + gym._id}>
                                                        <h5 className="modal-title" >Asignar entrenador</h5>
                                                        <p>Seleccione los entrenadores para el gimansio </p>
                                                        <FormControl className="col-10">
                                                            <InputLabel id="trainers">Entrenadores</InputLabel>
                                                            <Select
                                                                labelId="trainers"
                                                                value={this.state.trainersSel}
                                                                onChange={this.handleChange}
                                                                multiple
                                                                input={<Input id="trainers" />}
                                                                renderValue={selected => (
                                                                    <div>
                                                                        {selected.map(value => (
                                                                            <Chip key={value._id} label={value.name + ' ' + value.lastname} />
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            >
                                                                {this.state.trainers.map(trainer => (
                                                                    <MenuItem key={trainer._id} value={trainer}>
                                                                        {trainer.name + ' ' + trainer.lastname}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                        <button type="button" className="col mt-2 btn btn-success" onClick={this.assingTrainer}>Asignar</button>
                                                    </div>
                                                    <div className="row justify-content-center">
                                                        <button className="btn btn-danger col-3 mb-2" onClick={() => this.deleteGym(gym._id)} >Borrar</button>
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
            </div >
        )
    }
}
