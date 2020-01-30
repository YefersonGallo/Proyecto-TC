import React, { Component } from 'react'
import './App.css'
import Sign_in from './pages/Sign_in'
import Sign_inAdmin from './pages/Sign_inAdmin'
import Sign_inTrainer from './pages/Sign_inTrainer'
import bien_cab_p from './images/bien_cab_p.png'
import Register from './pages/Register'
import ProfileUser from './pages/ProfileUser'
import ProfileAdmin from './pages/ProfileAdmin'
import ProfileTrainer from './pages/ProfileTrainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {

  render() {
    return (
      <Router className="App">
        <div className="App">
          <img className="logo" src={bien_cab_p} alt="header"/>
        </div>
        <Route path="/" exact component={Sign_in} />
        <Route path="/adminsign" exact component={Sign_inAdmin} />
        <Route path="/trainersign" exact component={Sign_inTrainer} />
        <Route path="/register" exact component={Register} />
        <Route path="/admin" exact component={ProfileAdmin} />
        <Route path="/admin/gyms" exact component={ProfileAdmin} />
        <Route path="/admin/reports" exact component={ProfileAdmin} />
        <Route path="/trainer" exact component={ProfileTrainer} />
        <Route path="/trainer/enter" exact component={ProfileTrainer} />
        <Route path="/trainer/routines" exact component={ProfileTrainer} />
        <Route path="/user" exact component={ProfileUser} />
        <Route path="/user/routines" exact component={ProfileUser} />        
      </Router>
    );
  }
}

