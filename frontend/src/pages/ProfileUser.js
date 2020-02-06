import React, { Component } from 'react'
import Home from './profileUserComponents/Home'
import Routine from './profileUserComponents/Routine'
import { Link } from 'react-router-dom'
import './ProfileUser.css'
import axios from 'axios'

export default class ProfileUser extends Component {
    state = {
        page: '',
        idUser: '',
        user: '',
        routines: [],
        flag: false
    }

    async componentDidMount() {
        this.setState({
            page: this.props.match.path
        })
        const users = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/userlogin/')
        this.setState({
            idUser: users.data[users.data.length - 1].idUser
        })
        const user = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/users/' + this.state.idUser)
        this.setState({
            user: user.data[0]
        })
        const routines = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/usersRoutines/' + this.state.idUser);
        if (routines.data.length !== 0) {
            this.setState({
                flag: true,
                routines: routines.data[0].routinesUser
            })
        }
    }

    changePage(page) {
        this.setState({
            page
        })
        console.log(this.state.page)
    }

    render() {
        return (
            <div className="Profile">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/user" >Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user/routines" >Rutinas</Link>
                            </li>
                            <li className="nav-item dropdown">
                            <label className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.user.names}</label>
                                <div className="dropdown-menu">
                                    <Link className="nav-link" style={{color: "black"}} to="/" >Cerrar Sesión</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div hidden={(this.state.page === "/user/routines") ? false : true} >
                    <Routine idUser={this.state.idUser} routines={this.state.routines} flag={this.state.flag} user={this.state.user} />
                </div>
                <div hidden={(this.state.page === "/user") ? false : true}>
                    <Home idUser={this.state.idUser} user={this.state.user} />
                </div>
            </div>
        );
    }
}