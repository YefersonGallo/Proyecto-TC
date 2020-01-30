import React, { Component } from 'react'
import '../ProfileTrainer.css'

export default class Home extends Component {
    state = {
        idTrainer: '',
        trainer: ''
    }

    render() {
        const { trainer } = this.props;
        return (
            <div className="Home">
                <div className="text-center mb-4">
                    <h1 className="h1 mb-3">Sistema de información y Control Gimnasios UPTC</h1>
                    <h1 className="h1 mb-3">SICGYM UPTC</h1>
                </div>
                <div className="personalDataTrainer">
                    <div className="text-center col-7 personal-data ">
                        <h3>Datos Personales</h3>
                        <div className="row">
                            <h5 className="col">Número de Documento: </h5>
                            <h6 className="col" >{trainer.idTrainer}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">Tipo de documento: </h5>
                            <h6 className="col" >{trainer.documentType}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">Nombres: </h5>
                            <h6 className="col" >{trainer.name}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">Apellidos: </h5>
                            <h6 className="col" >{trainer.lastname}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">Código Institucional: </h5>
                            <h6 className="col" >{trainer.code}</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}