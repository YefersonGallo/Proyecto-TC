import React, { Component } from 'react'
import axios from 'axios'
import FormData from 'form-data'
import RoutineSel from './selectRoutine'
import '../ProfileTrainer.css'

export default class Routines extends Component {
    state = {
        routines: [],
        name: '',
        description: "",
        img: '',
        image: '',
        nameUser: '',
        lastnameUser: '',
        idUserS: '',
        idUser: '',
        codeUser: '',
        email: '',
        health: '',
        conditioning: '',
        lose: '',
        recreation: '',
        increasedMuscle: '',
        sports: '',
        flag: true,
        active: false,
        routinesUser: []
    }

    async componentDidMount() {
        this.getRoutines()
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onInputImage = e => {
        e.persist()
        this.setState((state) => {
            return { img: e.target.files[0] }
        });
    }

    addRoutineUser = (id) => {
        console.log(id)
        var routinesAux = this.state.routinesUser
        if (routinesAux.some(routCont => routCont === id)) {
            var pos = routinesAux.indexOf(id)
            routinesAux.splice(pos, 1)
        } else {
            routinesAux.push(id)
        }
        this.setState({ routinesUser: routinesAux });
        console.log(this.state.routinesUser)
    };

    onSubmitSearch = async (e) => {
        e.preventDefault()
        const user = await axios.get('http://localhost:4060/api/users/' + this.state.idUser);
        if (user.data.length !== 0) {
            this.setState({
                nameUser: user.data[0].names,
                lastnameUser: user.data[0].lastnames,
                codeUser: user.data[0].code,
                idUserS: user.data[0].idUser,
                email: user.data[0].mail,
                health: user.data[0].health,
                conditioning: user.data[0].conditioning,
                lose: user.data[0].lose,
                recreation: user.data[0].recreation,
                increasedMuscle: user.data[0].increasedMuscle,
                sports: user.data[0].sports,
                flag: false
            })
        } else {
            alert('No existe usuario con dicho número de identificación')
            this.setState({
                nameUser: '',
                lastnameUser: '',
                codeUser: '',
                idUser: '',
                email: '',
                health: '',
                conditioning: '',
                lose: '',
                recreation: '',
                increasedMuscle: '',
                sports: '',
                flag: true
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault()
        var flag = false
        console.log(this.state.img)
        this.state.routines.map(routine => (routine.name === this.state.name ? flag = true : flag = false))
        if (flag) {
            alert("Ya existe una rutina con el mismo nombre.")
        } else {
            const newRoutine = new FormData()
            newRoutine.append('name', this.state.name)
            newRoutine.append('description', this.state.description)
            newRoutine.append('urlImage', this.state.img)
            console.log(newRoutine)
            await axios.post('http://localhost:4060/api/routines', newRoutine)
            this.setState({
                name: '',
                description: '',
                img: ''
            })
            this.getRoutines();
        }
    }

    onSubmitRoutinesUser = async () => {
        const newUserRoutines = {
            idUser: this.state.idUserS,
            routinesUser: this.state.routinesUser,
            mail: this.state.email,
            name: this.state.nameUser,
            lastname: this.state.lastnameUser,
        }
        axios.post('http://localhost:4060/api/usersRoutines', newUserRoutines)
        this.setState({
            flag: true,
            idUser: ''
        })
    }

    onClickCard = (e) => {
        this.setState({
            routinesUser: this.state.routinesUser.concat(e.target.value)
        })
        console.log(this.state.routinesUser)
    }

    getRoutines = async () => {
        const res = await axios.get('http://localhost:4060/api/routines');
        this.setState({ routines: res.data });
    }

    deleteRoutine = async (id) => {
        await axios.delete('http://localhost:4060/api/routines/' + id)
        this.getRoutines();
    }

    render() {
        return (
            <div className="Routines row">
                <div className="col-4">
                    <div className="routine-data col-12">
                        <h3>Crear Rutina</h3>
                        <div className="form">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" value={this.state.name} className="form-control" placeholder="Nombre de Rutina" name="name" onChange={this.onInputChange} required />
                                </div>
                                <div className="form-group">
                                    <textarea name="description" className="form-control" placeholder="Descripción" onChange={this.onInputChange} value={this.state.description} required></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="file" name="imgUrl" onChange={this.onInputImage} required />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <button type="button" className="btn-assing btn btn-info" data-toggle="modal" data-target="#staticBackdrop">Asignar Rutinas</button>
                        <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-xl" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Asignar Rutinas</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="col-12">
                                            <form onSubmit={this.onSubmitSearch} className="form-inline my-2 my-lg-0 row justify-content-end">
                                                <input className="form-control mr-sm-2 col-4" type="number" placeholder="Número de Documento" name="idUser" value={this.state.idUser} onChange={this.onInputChange} aria-label="idUser" required />
                                                <button className="btn btn-outline-success my-3 my-sm-0 col-2" type="submit">Buscar</button>
                                            </form>
                                        </div>
                                        <div className="row">
                                            <div className="col-3 dataUser" hidden={this.state.flag}>
                                                <h5 className="row">Nombres: </h5>
                                                <p className="row">{this.state.nameUser}</p>
                                                <h5 className="row">Apellidos: </h5>
                                                <p className="row">{this.state.lastnameUser}</p>
                                                <h5 className="row">Número de Identificación: </h5>
                                                <p className="row">{this.state.idUserS}</p>
                                                <h5 className="row">Código Institucional:</h5>
                                                <p className="row">{this.state.codeUser}</p>
                                                <h5 className="row">Beneficios Esperados:</h5>
                                                <p className="row" hidden={this.state.health} >Salud y Bienestar </p>
                                                <p className="row" hidden={this.state.recreation} >Recreación </p>
                                                <p className="row" hidden={this.state.conditioning} >Acondicionamiento Físico </p>
                                                <p className="row" hidden={this.state.lose} >Bajar de Peso </p>
                                                <p className="row" hidden={this.state.sports} >Rendimiento Deportivo </p>
                                                <p className="row" hidden={this.state.increasedMuscle} >Aumento de Masa Muscular</p>
                                            </div>
                                            <div className="row col-8 optionsRoutines" hidden={this.state.flag}>
                                                {
                                                    this.state.routines.map(routine => (
                                                        <div className="btn-group-toggle col-3" data-toggle="buttons" key={routine._id}>
                                                            <RoutineSel routine={routine} addRoutineUser={this.addRoutineUser} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-primary" data-dismiss="modal" onClick={this.onSubmitRoutinesUser} >Guardar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container col-8 row">
                    {
                        this.state.routines.map(routine => (
                            <div className="card cardRoutine col-3" key={routine._id}>
                                <img src={routine.urlImage} className="card-img-top" alt="ImageRoutine" />
                                <div className="card-body">
                                    <h5 className="card-title">{routine.name}</h5>
                                    <p className="card-text">{routine.description}</p>
                                    <button className="btn btn-danger btnRemove" onClick={() => this.deleteRoutine(routine._id)} >Borrar</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}