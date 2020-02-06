import React, { Component } from 'react'
import sad from '../../images/anxiety.png'
import '../ProfileUser.css'

export default class Routine extends Component {

    render() {
        const { user, routines, flag } = this.props;
        return (
            <div className="container RoutinesUser">
                <div className="text-center mb-4">
                    <h1>Rutinas</h1>
                    <div >
                        <h5 className="">{user.names} {user.lastnames}</h5>
                    </div>
                    <div hidden={flag} className="align-items-center">
                        <img className="figuereNot" src={sad} alt="notFound" />
                        <h3 className="col">Aún no tienes rutinas asignadas</h3>
                    </div>
                    <div hidden={!flag}>
                        <div className="row">
                            {
                                routines.map(routine => (
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