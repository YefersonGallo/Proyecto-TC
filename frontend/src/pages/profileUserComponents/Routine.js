import React, { Component } from 'react'
import sad from '../../images/anxiety.png'
import '../ProfileUser.css'
import axios from 'axios'

export default class Routine extends Component {
    state = {
        flag: '',
        idUser: this.props.idUser,
        routines: []
    }

    async componentDidMount() {
        const routines = await axios.get('http://localhost:4060/api/usersRoutines/' + this.state.idUser);
        console.log(routines.data)
        if (routines.data.length !== 0) {
            this.setState({
                flag: true,
                routines: routines.data[0].routinesUser
            })
        }
        console.log(this.state.routinesList)
    }

    async routinesAssing() {
        var routine = ''
        var auxList = this.state.routines;
        this.state.routinesList.map(async id => (
            routine = await axios.get('http://localhost:4060/api/routines/' + id),
            auxList.push(routine.data)
        ))
        this.setState({
            routine: auxList
        })
    }

    render() {
        const { user } = this.props;
        return (
            <div className="container RoutinesUser">
                <div className="text-center mb-4">
                    <h1>Rutinas</h1>
                    <div >
                        <h5 className="">{user.names} {user.lastnames}</h5>
                    </div>
                    <div hidden={this.state.flag} className="align-items-center">
                        <img className="figuereNot" src={sad} alt="notFound" />
                        <h3 className="col">Aún no tienes rutinas asignadas</h3>
                    </div>
                    <div hidden={!this.state.flag}>
                        <div className="row">
                            {
                                this.state.routines.map(routine => (
                                    <div className="card cardRoutine col-3" key={routine._id}>
                                        <img src={routine.urlImage} className="card-img-top" alt="ImageRoutine" />
                                        <div className="card-body">
                                            <h5 className="card-title">{routine.name}</h5>
                                            <p className="card-text">{routine.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}