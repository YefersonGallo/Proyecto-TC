import React, { Component } from 'react'
import '../ProfileTrainer.css'
import axios from 'axios'

export default class Enter extends Component {

    state = {
        idTrainer: this.props.idTrainer,
        trainer: this.props.trainer,
        codeGym: '',
        idUser: '',
        nameUser: '',
        lastnameUser: '',
        codeUser: '',
        idUserS: '',
        routinesList: '',
        routines: [],
        flag: true,
        active: true
    }

    async componentDidMount() {
        const gym = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/gymTrainer/' + this.state.idTrainer);
        if(gym.data.length !== 0){
        this.setState({
            codeGym: gym.data[0].codeGym
        })
    }
    }

    onSubmitSearch = async (e) => {
        e.preventDefault()
        const user = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/users/' + this.state.idUser)
        const routines = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/usersRoutines/' + this.state.idUser)
        if (user.data.length !== 0) {
            this.setState({
                nameUser: user.data[0].names,
                lastnameUser: user.data[0].lastnames,
                codeUser: user.data[0].code,
                idUserS: user.data[0].idUser
            })
            if (routines.data.length !== 0) {
                this.setState({
                    routines: routines.data[0].routinesUser,
                    active: false,
                    flag: false
                })
            } else {
                this.setState({
                    active: true,
                    flag: false
                })
            }
        } else {
            alert('No existe usuario con dicho número de identificación')
            this.setState({
                nameUser: '',
                lastnameUser: '',
                codeUser: '',
                idUser: '',
                idUserS: '',
                flag: true
            })
        }
        this.setState({
            idUser: ''
        })
    }

    onEnter = async () => {
        const newEnter = {
            idUser: this.state.idUserS,
            codeGym: this.state.codeGym
        }
        await axios.post('http://backend-sic-gym-uptc.herokuapp.com/api/enterGym', newEnter)
        alert("Usuario Ingresado")
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return (
            <div className="Enter">
                <div className="text-center mb-4">
                    <h1>Ingreso al Gimnasio</h1>
                    <div className="col-12 searchBar">
                        <form onSubmit={this.onSubmitSearch} className="form-inline my-2 my-lg-0 row justify-content-start">
                            <input className="form-control mr-sm-2 col-4" type="number" placeholder="Número de Documento" name="idUser" value={this.state.idUser} onChange={this.onInputChange} required />
                            <button className="btn btn-outline-info my-3 my-sm-0 col-2" type="submit">Buscar</button>
                        </form>
                    </div>
                    <div className="container p-2">
                        <div className="row infoUser" hidden={this.state.flag}>
                            <div className="col-3 infoFinal">
                                <h5 className="row">Nombres: </h5>
                                <p className="row">{this.state.nameUser}</p>
                                <h5 className="row">Apellidos: </h5>
                                <p className="row">{this.state.lastnameUser}</p>
                                <h5 className="row">Número de Identificación: </h5>
                                <p className="row">{this.state.idUserS}</p>
                                <h5 className="row">Código Institucional:</h5>
                                <p className="row">{this.state.codeUser}</p>
                                <button hidden={this.state.active} type="button" className="btn btn-outline-success row" onClick={this.onEnter}>Ingresar al Gimnasio</button>
                            </div>
                            <div className="col-8" hidden={this.state.active}>
                                {
                                    this.state.routines.map(routine => (
                                        <div className="card cardRoutine col-3" key={routine._id}>
                                            <img src={routine.urlImage} className="card-img-top" alt="ImageRoutine" />
                                            <div className="card-body">
                                                <h5 className="card-title">{routine.name}</h5>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="col-6" hidden={!this.state.active}>
                                <div className="alert alert-danger" role="alert">
                                    El usuario no tiene rutinas, primero asignar rutinas.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}