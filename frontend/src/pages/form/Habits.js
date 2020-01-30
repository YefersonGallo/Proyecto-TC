import React, { Component } from 'react'
import '../Register.css';

export default class Habits extends Component {

    values = this.props;
    state = {
        sports: true
    }
    handleText(sports) {
        this.setState({ sports });
    }
    continue = e => {
        e.preventDefault();
        this.props.onSubmit();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { handleChange, handleChangeCheck, values } = this.props;
        return (
            <div className="Habits">
                <form onSubmit={this.continue}>
                    <div className="containerForm">
                        <h3 className="title text-center">Hábitos</h3>
                        <div className="row">
                            <label className="col-6 color" required>¿Realiza habitualmente Actividad Física o Deporte que implican un aumento importante de la respiración o del ritmo cardíaco al menos durante 15 minutos continuos?</label>
                            <div className="color-radio col-2 ans">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="yes12" value="yes" checked={(values.question12 === "yes" ? true : false)} name="question12" className="custom-control-input" onClick={() => this.handleText(true)} onChange={handleChange("question12")} required />
                                    <label className="custom-control-label" htmlFor="yes12">Sí</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="no12" value="no" checked={(values.question12 === "no" ? true : false)} name="question12" className="custom-control-input" onClick={() => this.handleText(false)} onChange={handleChange("question12")} />
                                    <label className="custom-control-label" htmlFor="no12">No</label>
                                </div>
                            </div>
                            <input hidden={this.state.sports ? false : true} onChange={handleChange("question12Ans")} value={values.question12Ans} name="question12Ans" type="text" className="col colM form-control" placeholder="¿Cuál?" required={(values.question12 === "yes" ? true : false)} />
                        </div>
                        <div className="row">
                            <input hidden={this.state.sports ? false : true} onChange={handleChange("timeWeek")} value={values.timeWeek} name="timeWeek" type="number" className="col-3 colM form-control" placeholder="¿Cuántas veces a la semana?" required={(values.question12 === "yes" ? true : false)} />
                            <label hidden={this.state.sports ? false : true} className="col-2 color-text time">Tiempo: </label>
                            <input hidden={this.state.sports ? false : true} onChange={handleChange("hours")} value={values.hours} name="hours" type="number" className="col-1 colM form-control" placeholder="Horas" required={(values.question12 === "yes" ? true : false)} />
                            <input hidden={this.state.sports ? false : true} onChange={handleChange("minutes")} value={values.minutes} name="minutes" type="number" className="col-1 colM form-control" placeholder="Minutos" required={(values.question12 === "yes" ? true : false)} />
                            <input onChange={handleChange("lastTime")} value={values.lastTime} name="lastTime" type="text" className="col colM form-control" placeholder="Cuándo fue la última vez que estuvo en un programa de actividad física?" required />
                        </div>
                        <label className="col-12 color benLabel">Los beneficios que espero conseguir con la práctica de ejercicio físico en el gimnasio son:</label>
                        <div className="row">
                            <div className="custom-control custom-checkbox col color check-init">
                                <input onChange={handleChangeCheck("health")} type="checkbox" className="custom-control-input" id="health" checked={values.confirmation1} />
                                <label className="custom-control-label" htmlFor="health">Salud y Bienestar</label>
                            </div>
                            <div className="custom-control custom-checkbox col color">
                                <input onChange={handleChangeCheck("conditioning")} type="checkbox" className="custom-control-input" id="conditioning" checked={values.conditioning} />
                                <label className="custom-control-label" htmlFor="conditioning">Acondicionamiento Físico</label>
                            </div>
                            <div className="custom-control custom-checkbox col color">
                                <input onChange={handleChangeCheck("lose")} type="checkbox" className="custom-control-input" id="lose" checked={values.lose} />
                                <label className="custom-control-label" htmlFor="lose">Bajar de peso</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="custom-control custom-checkbox col color check-init check-bottom">
                                <input onChange={handleChangeCheck("recreation")} type="checkbox" className="custom-control-input" id="recreation" checked={values.recreation} />
                                <label className="custom-control-label" htmlFor="recreation">Recreación</label>
                            </div>
                            <div className="custom-control custom-checkbox col color check-bottom">
                                <input onChange={handleChangeCheck("increasedMuscle")} type="checkbox" className="custom-control-input" id="increasedMuscle" checked={values.increasedMuscle} />
                                <label className="custom-control-label" htmlFor="increasedMuscle">Aumento de masa muscular</label>
                            </div>
                            <div className="custom-control custom-checkbox col color check-bottom">
                                <input onChange={handleChangeCheck("sports")} type="checkbox" className="custom-control-input" id="sports" checked={values.sports} />
                                <label className="custom-control-label" htmlFor="sports">Rendimieto Deportivo</label>
                            </div>
                        </div>
                        <div className="custom-control custom-checkbox check-bottom">
                            <input onChange={handleChangeCheck("confirmation")} name="confirmation" type="checkbox" className="custom-control-input" id="confirmation" checked={values.confirmation} required />
                            <label className="custom-control-label color" htmlFor="confirmation">Afirmo que toda la información suministrada en este formulario es real y asumo la responsabilidad por cualquier omisión o falsedad diligenciada en la misma.</label>
                        </div>
                        <div className="row justify-content-md-center">
                            <button type="submit" className="btn-lg btn-mar btn-primary">Registrarse</button>
                            <button onClick={this.back} className="btn-lg btn-mar btn-primary">Atrás</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}