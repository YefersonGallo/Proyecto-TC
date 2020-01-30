import React, { Component } from 'react'
import '../ProfileTrainer.css'

export default class SelectRoutine extends Component {

    state = {
        active: false,
        idRoutine: ""
    }

    onClickDiv = (id) =>{
        this.props.addRoutineUser(id);
    }

    render() {
        const { routine } = this.props
        return (
            <label className="btn btn-secondary card btn-outline-dark"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Buenas');
                    const fistBool = !this.state.active;
                    this.setState({ active: fistBool })
                    this.onClickDiv(routine)
                }}>
                <img src={routine.urlImage} className="card-img-top" alt="ImageRoutine" />
                <div className="card-body">
                    <h5 className="card-title">{routine.name}</h5>
                </div>
            </label>
        )
    }
}