import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProfileUser.css'
import Reports from './profileAdminComponents/Reports'
import Gyms from './profileAdminComponents/Gyms'
import Trainers from './profileAdminComponents/Trainers'
import AddInformation from './profileAdminComponents/AddInformation'
import AceptUsers from './profileAdminComponents/AceptUsers'

export default class ProfileAdmin extends Component {
    state = {
        page: ''
    }

    componentDidMount() {
        this.setState({
            page: this.props.match.path
        })
    }

    render() {
        return (
            <div className="Profile">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin" >Entrenadores</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/gyms" >Gimnasios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/reports" >Reportes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/info" >Agregar Información</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/users" >Aceptar Usuarios</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <label className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Admin</label>
                                <div className="dropdown-menu">
                                    <Link className="nav-link" style={{color: "black"}} to="/adminsign" >Cerrar Sesión</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div hidden={(this.state.page === "/admin") ? false : true}>
                    <Trainers />
                </div>
                <div hidden={(this.state.page === "/admin/gyms") ? false : true}>
                    <Gyms />
                </div>
                <div hidden={(this.state.page === "/admin/reports") ? false : true}>
                    <Reports />
                </div>
                <div hidden={(this.state.page === "/admin/info") ? false : true}>
                    <AddInformation />
                </div>
                <div hidden={(this.state.page === "/admin/users") ? false : true}>
                    <AceptUsers />
                </div>
            </div >
        );
    }
}