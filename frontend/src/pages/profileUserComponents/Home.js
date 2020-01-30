import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        idUser: '',
        user: ''
    }

    render() {
        const { user } = this.props;
        return (
            <div className="Home">
                <div className="text-center mb-4">
                    <h1 className="h1 mb-3">Sistema de información y Control Gimnasios UPTC</h1>
                    <h1 className="h1 mb-3">SICGYM UPTC</h1>
                </div>
                <div className="row">
                    <div className="text-center col-7 personal-data ">
                        <h3>Datos Personales</h3>
                        <div className="row">
                            <h5 className="col">Número de Documento: </h5>
                            <h6 className="col" >{user.idUser}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">Tipo de documento: </h5>
                            <h6 className="col" >{user.documentType}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">Nombres: </h5>
                            <h6 className="col" >{user.names}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">Apellidos: </h5>
                            <h6 className="col" >{user.lastnames}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">Código Institucional: </h5>
                            <h6 className="col" >{user.code}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">Correo Institucional: </h5>
                            <h6 className="col" >{user.mail}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">EPS: </h5>
                            <h6 className="col" >{user.eps}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">Teléfono: </h5>
                            <h6 className="col" >{user.phone}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">RH: </h5>
                            <h6 className="col" >{user.rh}</h6>
                        </div>
                    </div>
                    <div className="text-center parent-data">
                        <h3>Contacto de Emergencia</h3>
                        <div className="row">
                            <h5 className="col">Nombre: </h5>
                            <h6 className="col" >{user.nameParent}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">Teléfono: </h5>
                            <h6 className="col" >{user.phoneParent}</h6>
                        </div>
                        <div className="row">
                            <h5 className="col">Parentezco: </h5>
                            <h6 className="col" >{user.parent}</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}