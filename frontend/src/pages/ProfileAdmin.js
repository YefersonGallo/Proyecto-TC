import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProfileUser.css'
import Reports from './profileAdminComponents/Reports'
import Gyms from './profileAdminComponents/Gyms'
import Trainers from './profileAdminComponents/Trainers'

export default class ProfileAdmin extends Component {
    state = {
        page: ''
    }

    componentDidMount(){
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
                                <Link className="nav-link" to="/adminsign" >Cerrar Sesión</Link>
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
            </div>
        );
    }
}