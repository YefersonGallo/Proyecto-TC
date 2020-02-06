import React, { Component } from 'react'
import axios from 'axios'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import CancelIcon from '@material-ui/icons/Cancel'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

export default class AceptUsers extends Component {
    state = {
        user: [],
        usersId: [],
        _id: '', 
        name: '',
        lastname: '',
        email:''
    }

    getUsersId = async () => {
        const res = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/acepteds')
        this.setState({ usersId: res.data })
    }

    getUser = async (idUser, id) => {
        const res = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/users/' + idUser)
        await this.setState({ 
            user: res.data[0], 
            _id:id
        })
    }

    async componentDidMount() {
        this.getUsersId()
    }

    getStyle = (number) => {
        switch (number) {
            case 0:
                return "#FFF3CD"
                break;
            case 1:
                return "#D4EDDA"
                break;
            case 2:
                return "#F8D7DA"
                break;
            default:
                return "#D1ECF1"
                break;
        }
    }

    responseUser = async(newResponse, idUser, name, lastname, email) =>{
        var text = ""
        if(newResponse === 1){
            text="ha sido aceptado en el gimnasio"
        }else{
            text="no ha sido aceptado en el gimnasio"
        }
        const updateRes = {
            idUser: idUser,
            response: newResponse,
            name: name,
            lastname: lastname,
            email: email,
            newAcept: false, 
            text: text
        }
        await axios.delete('https://backend-sic-gym-uptc.herokuapp.com/api/acepteds/' + this.state._id)
        await axios.post('https://backend-sic-gym-uptc.herokuapp.com/api/acepteds', updateRes);
        this.setState({
            _id:''
        })
        this.getUsersId()
    }

    render() {
        return (
            <div className="row">
                <div className="col-8">
                    {
                        this.state.usersId.map(userId =>
                            <ExpansionPanel key={userId._id} style={{ background: this.getStyle(userId.response) }}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>{userId.idUser}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <button className="btn btn-info" onClick={async () => {this.setState({_id: userId._id}); await this.getUser(userId.idUser, userId._id); console.log(this.state._id) }} data-toggle="modal" data-target="#infoUser"><AddCircleOutlineIcon /></button>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        )
                    }
                </div>
                <div className="col-4">
                    <div>
                        <div className="alert alert-warning">Si el usuario aparece de este color, está en espera de aprobación</div>
                        <div className="alert alert-success">Si el usuario aparece de este color, ha sido aprobado</div>
                        <div className="alert alert-danger">Si el usuario aparece de este color, ha sido rechazada</div>
                    </div>
                </div>
                <div className="modal fade" id="infoUser" tabIndex="-1" role="dialog" aria-labelledby="infoTitle" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="infoTitle">{this.state.user.names} {this.state.user.lastnames}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active" id="nav-personal-data-tab" data-toggle="tab" href="#nav-personal-data" role="tab" aria-controls="nav-personal-data" aria-selected="true">Datos Personales</a>
                                        <a className="nav-item nav-link" id="nav-medical-record-tab" data-toggle="tab" href="#nav-medical-record" role="tab" aria-controls="nav-medical-record" aria-selected="false">Historia Médica</a>
                                        <a className="nav-item nav-link" id="nav-habits-tab" data-toggle="tab" href="#nav-habits" role="tab" aria-controls="nav-habits" aria-selected="false">Hábitos</a>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-personal-data" role="tabpanel" aria-labelledby="nav-personal-data-tab">
                                        <h3>Datos Personales</h3>
                                        <div className="row">
                                            <h5 className="col">Número de Documento: </h5>
                                            <h6 className="col" >{this.state.user.idUser}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">Tipo de documento: </h5>
                                            <h6 className="col" >{this.state.user.documentType}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">Código Institucional: </h5>
                                            <h6 className="col" >{this.state.user.code}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">Correo Institucional: </h5>
                                            <h6 className="col" >{this.state.user.mail}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">EPS: </h5>
                                            <h6 className="col" >{this.state.user.eps}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">Teléfono: </h5>
                                            <h6 className="col" >{this.state.user.phone}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">RH: </h5>
                                            <h6 className="col" >{this.state.user.rh}</h6>
                                        </div>
                                        <h3>Contacto de Emergencia</h3>
                                        <div className="row">
                                            <h5 className="col">Nombre: </h5>
                                            <h6 className="col" >{this.state.user.nameParent}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">Teléfono: </h5>
                                            <h6 className="col" >{this.state.user.phoneParent}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">Parentezco: </h5>
                                            <h6 className="col" >{this.state.user.parent}</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-medical-record" role="tabpanel" aria-labelledby="nav-medical-record-tab">
                                        <h3>Historia Médica</h3>
                                        <div className="row">
                                            <h5 className="col">¿Ha sufrido o sufre actualmente algún problema cardíaco? </h5>
                                            <h6 className="col" >{(this.state.user.question1) ? "Sí" : "No"}</h6>
                                            <h6 className="col" hidden={!this.state.user.question1}>{this.state.user.question1Ans}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">¿Ha sufrido o sufre actualmente algún problema respiratorio o enfermedad pulmonar? </h5>
                                            <h6 className="col" >{(this.state.user.question2) ? "Sí" : "No"}</h6>
                                            <h6 className="col" hidden={!this.state.user.question2}>{this.state.user.question2Ans}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">¿Tiene alguna enfermedad neurológica? </h5>
                                            <h6 className="col" >{(this.state.user.question3) ? "Sí" : "No"}</h6>
                                            <h6 className="col" hidden={!this.state.user.question3}>{this.state.user.question3Ans}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">¿Ha tenido o tiene problemas articulares, musculares u óseos? (desagrro, esguince, trauma, fractura) </h5>
                                            <h6 className="col" >{(this.state.user.question4) ? "Sí" : "No"}</h6>
                                            <h6 className="col" hidden={!this.state.user.question4}>{this.state.user.question4Ans}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">¿Tiene algún factor de riesgo cardiovascular? (colesterol alto, diabetes, obesidad, estrés, tabaquismo, sedentarismo, consumo de alcohol excesivo) </h5>
                                            <h6 className="col" >{(this.state.user.question5) ? "Sí" : "No"}</h6>
                                            <h6 className="col" hidden={!this.state.user.question5}>{this.state.user.question5Ans}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">¿Ha tenido molestias, dolor o presión en el pecho al realizar ejercicio? </h5>
                                            <h6 className="col" >{(this.state.user.question6) ? "Sí" : "No"}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">¿Presenta ahogo inusual, se siente cansado con facilidad, con excesiva fatiga al realizar actividad física leve? </h5>
                                            <h6 className="col" >{(this.state.user.question7) ? "Sí" : "No"}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">¿Ha tenido o tiene con el ejercicio mareo, náuseas, sincopes o desmayos? </h5>
                                            <h6 className="col" >{(this.state.user.question8) ? "Sí" : "No"}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">¿Ha presentado algún dolor o molestia articular o muscular en las últimas dos (2) semanas? </h5>
                                            <h6 className="col" >{(this.state.user.question9) ? "Sí" : "No"}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">¿Toma algún medicamento? </h5>
                                            <h6 className="col" >{(this.state.user.question10) ? "Sí" : "No"}</h6>
                                            <h6 className="col" hidden={!this.state.user.question10}>{this.state.user.medicines}</h6>
                                            <h6 className="col" hidden={!this.state.user.question10}>{this.state.user.indicatedDose}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">¿Existe algún otro problema o enfermedad no mencionada aquí que debiera confiarnos para evitar imprevistos a la hora de realizar actividad física? </h5>
                                            <h6 className="col" >{(this.state.user.question1) ? "Sí" : "No"}</h6>
                                            <h6 className="col" hidden={!this.state.user.question11}>{this.state.user.question11Ans}</h6>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-habits" role="tabpanel" aria-labelledby="nav-habits-tab">
                                        <h3>Hábitos</h3>
                                        <div className="row">
                                            <h5 className="col">¿Realiza habitualmente Actividad Física o Deporte que implican un aumento importante de la respiración o del ritmo cardíaco al menos durante 15 minutos continuos? </h5>
                                            <h6 className="col" >{(this.state.user.question12) ? "Sí" : "No"}</h6>
                                            <h6 className="col" hidden={!this.state.user.question12}>{this.state.user.question12Ans}</h6>
                                        </div>
                                        <div className="row" hidden={!this.state.user.question12}>
                                            <h6 className="col">{this.state.user.timeWeek}</h6>
                                            <h5 className="col">Tiempo </h5>
                                            <h6 className="col">{this.state.user.hours}</h6>
                                            <h6 className="col">{this.state.user.minutes}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">¿Cuándo fue la última vez que estuvo en un programa de actividad física? </h5>
                                            <h6 className="col">{this.state.user.lastTime}</h6>
                                        </div>
                                        <div className="row">
                                            <h5 className="col">Los beneficios que espero conseguir con la práctica de ejercicio físico en el gimnasio son: </h5>
                                            <ul className="col">
                                                <li hidden={!this.state.user.health}><h6 className="">Salud y Bienestar</h6></li>
                                                <li hidden={!this.state.user.conditioning}><h6 className="">Acondicionamiento Físico</h6></li>
                                                <li hidden={!this.state.user.lose}><h6 className="">Bajar de peso</h6></li>
                                                <li hidden={!this.state.user.recreation}><h6 className="">Recreación</h6></li>
                                                <li hidden={!this.state.user.increasedMuscle}><h6 className="">Aumento de masa muscular</h6></li>
                                                <li hidden={!this.state.user.sports}><h6 className="">Rendimieto Deportivo</h6></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-success" data-dismiss="modal" onClick={() =>{this.responseUser(1, this.state.user.idUser, this.state.user.names, this.state.user.lastnames, this.state.user.email)}}><CheckCircleOutlineIcon /></button>
                                <button className="btn btn-danger" data-dismiss="modal" onClick={() => {this.responseUser(2, this.state.user.idUser, this.state.user.names, this.state.user.lastnames, this.state.user.email)}}><CancelIcon /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}