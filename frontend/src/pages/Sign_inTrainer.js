import React, { Component } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class SigninTrainer extends Component {

  state = {
    idTrainer: '',
    password: '',
    trainer: '',
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
      trainer: [],
      flag: false
    })
    e.preventDefault();
    console.log(this.state.idTrainer)
    console.log('http://localhost:4060/api/trainers/' + this.state.idTrainer)
    const res = await axios.get('http://localhost:4060/api/trainers/' + this.state.idTrainer);
    console.log(res)
    this.setState({ trainer: res.data });
    if(this.state.trainer.length > 0){
      console.log((this.state.trainer[0].idTrainer+'' === this.state.idTrainer+'') && (this.state.trainer[0].password === this.state.password));
    if((this.state.trainer[0].idTrainer+'' === this.state.idTrainer+'') && (this.state.trainer[0].password === this.state.password)){
      this.setState({
        flag:true
      })
      console.log(this.state.idTrainer)
      axios.post('http://localhost:4060/api/trainerlogin/', {idTrainer:this.state.idTrainer});
      window.location = '/trainer';
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
                <h2 className="h2 mb-3">Iniciar Sesión <br /> (Entrenador)</h2>
                <input value={this.state.idTrainer} name="idTrainer" onChange={this.onChange} className="form-control input" type="number" placeholder="Número de documento" required />
                <input value={this.state.password} name="password" onChange={this.onChange} className="form-control input" type="password" placeholder="Constraseña" required />
                <button className="btn btn-primary form-control btn-submit" type="submit">Iniciar Sesión</button>
                <Link className="col" to="/">Usuario</Link>
                <Link className="col" to="/adminsign">Administrador</Link>
              </div>
            </form>
          </div>
        );
  }
}

