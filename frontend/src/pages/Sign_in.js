import React, { Component } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Signin extends Component {

  state = {
    idUser: '',
    password: '',
    user: '',
    flag: false
  };

  onChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }

  changeFlag = () =>{
    this.setState({
      flag:false
    });
  }


  onSubmit = async e => {
    this.setState({
      user: [],
      flag: false
    })
    e.preventDefault();
    const res = await axios.get('http://localhost:4060/api/users/' + this.state.idUser);
    this.setState({ user: res.data });
    if(this.state.user.length > 0){
      console.log((this.state.user[0].idUser+'' === this.state.idUser+'') && (this.state.user[0].password === this.state.password));
    if((this.state.user[0].idUser+'' === this.state.idUser+'') && (this.state.user[0].password === this.state.password)){
      this.setState({
        flag:true
      })
      console.log(this.state.idUser)
      axios.post('http://localhost:4060/api/userlogin/', {idUser:this.state.idUser});
      window.location = '/user';
    } else{
      alert("Datos incorrectos")
    }
    }else{
      alert('El usuario no existe')
    }
    console.log(this.state.flag)
  }


  render() {
        return (
          <div className="Signin">
            <form className="form-signin" onSubmit={this.onSubmit}>
              <div className="text-center mb-4">
                <h1 className="h1 mb-3">Sistema de información y Control Gimnasios UPTC</h1>
                <h1 className="h1 mb-3">SICGYM UPTC</h1>
              </div>
              <div className=" text-center inputs">
                <h2 className="h2 mb-3">Iniciar Sesión</h2>
                <input value={this.state.idUser} name="idUser" onChange={this.onChange} className="form-control input" type="number" placeholder="Número de documento" required />
                <input value={this.state.password} name="password" onChange={this.onChange} className="form-control input" type="password" placeholder="Constraseña" required />
                <p className="text-center">Si no tienes cuenta registrate <Link to="/register">aquí</Link></p>
                <button className="btn btn-primary form-control btn-submit" type="submit">Iniciar Sesión</button>
                <Link className="col" to="/trainersign">Entrenador</Link>
                <Link className="col" to="/adminsign">Administrador</Link>
              </div>
            </form>
          </div>
        );
  }
}

