import React, { Component } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class SiginAdmin extends Component {

  state = {
    idAdmin: '',
    password: '',
    admin: '',
    flag: false
  };

  onChange = (e) => {
    this.setState(
      { password: e.target.value }
    )
  }

  handleValidationNumber = e => {
    this.setState({ idAdmin: e.target.value.toString().replace(/[^0-9]+/, '')})
  }

  changeFlag = () =>{
    this.setState({
      flag:false
    });
  }


  onSubmit = async e => {
    this.setState({
      admin: [],
      flag: false
    })
    e.preventDefault();
    const res = await axios.get('http://backend-sic-gym-uptc.herokuapp.com/api/admins/' + this.state.idAdmin);
    this.setState({ admin: res.data });
    if(this.state.admin.length > 0){
      console.log((this.state.admin[0].idAdmin+'' === this.state.idAdmin+'') && (this.state.admin[0].password === this.state.password));
    if((this.state.admin[0].idAdmin+'' === this.state.idAdmin+'') && (this.state.admin[0].password === this.state.password)){
      this.setState({
        flag:true
      })
      console.log(this.state.idAdmin)
      axios.post('http://backend-sic-gym-uptc.herokuapp.com/api/adminlogin/', {idAdmin:this.state.idAdmin});
      window.location = '/admin';
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
                <h2 className="h2 mb-3">Iniciar Sesión <br /> (Administrador)</h2>
                <input value={this.state.idAdmin} name="idAdmin" onChange={this.handleValidationNumber} className="form-control input" type="text" placeholder="Número de documento" required />
                <input value={this.state.password} name="password" onChange={this.onChange} className="form-control input" type="password" placeholder="Constraseña" required />
                <button className="btn btn-primary form-control btn-submit" type="submit">Iniciar Sesión</button>
                <Link className="col" to="/trainersign">Entrenador</Link>
                <Link className="col" to="/">Usuario</Link>
              </div>
            </form>
          </div>
        );
  }
}

