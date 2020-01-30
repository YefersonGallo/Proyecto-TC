import React, { Component } from 'react'
import '../Register.css';

export default class MedicalRecord extends Component {
    state = {
        q1: true,
        q2: true,
        q3: true,
        q4: true,
        q5: true,
        q6: true,
        q7: true
    }
    handleText1(q1) {
        this.setState({ q1 });
    }
    handleText2(q2) {
        this.setState({ q2 });
    }
    handleText3(q3) {
        this.setState({ q3 });
    }
    handleText4(q4) {
        this.setState({ q4 });
    }
    handleText5(q5) {
        this.setState({ q5 });
    }
    handleText6(q6) {
        this.setState({ q6 });
    }
    handleText7(q7) {
        this.setState({ q7 });
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { handleChange, values } = this.props;
        return (
            <div className="MedicalRecord">
                <form onSubmit={this.continue}>
                    <div className="containerForm">
                        <h3 className="text-center">Historia Médica</h3>
                        <div className="row">
                            <label className="col-6 color-text" required>¿A sufrido o sufre actualmente algún problema cardíaco? </label>
                            <div className="color-radio col-2 ans">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="yes1" value="yes" checked={(values.question1 === "yes" ? true : false)} name="question1" className="custom-control-input" onClick={() => this.handleText1(true)} onChange={handleChange("question1")} required />
                                    <label className="custom-control-label" htmlFor="yes1">Sí</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="no1" value="no" checked={(values.question1 === "no" ? true : false)} name="question1" className="custom-control-input" onClick={() => this.handleText1(false)} onChange={handleChange("question1")} />
                                    <label className="custom-control-label" htmlFor="no1">No</label>
                                </div>
                            </div>
                            <input value={values.question1Ans} hidden={this.state.q1 ? false : true} onChange={handleChange("question1Ans")} name="question1Ans" type="text" className="col colM form-control" placeholder="¿Cuál?" required={(values.question1 === "yes" ? true : false)} />
                        </div>
                        <div className="row">
                            <label className="col-6 color-text" required>¿A sufrido o sufre actualmente algún problema respiratorio o enfermedad pulmonar? </label>
                            <div className="color-radio col-2 ans">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="yes" checked={(values.question2 === "yes" ? true : false)} onChange={handleChange("question2")} type="radio" id="yes2" name="question2" className="custom-control-input" onClick={() => this.handleText2(true)} required />
                                    <label className="custom-control-label" htmlFor="yes2">Sí</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="no" checked={(values.question2 === "no" ? true : false)} onChange={handleChange("question2")} type="radio" id="no2" name="question2" className="custom-control-input" onClick={() => this.handleText2(false)} />
                                    <label className="custom-control-label" htmlFor="no2">No</label>
                                </div>
                            </div>
                            <input value={values.question2Ans} onChange={handleChange("question2Ans")} hidden={this.state.q2 ? false : true} name="question2Ans" type="text" className="col colM form-control" placeholder="¿Cuál?" required={(values.question2 === "yes" ? true : false)} />
                        </div>
                        <div className="row">
                            <label className="col-6 color-text" required>¿Tiene alguna enfermedad neurológica? </label>
                            <div className="color-radio col-2 ans">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="yes" checked={(values.question3 === "yes" ? true : false)} type="radio" onChange={handleChange("question3")} id="yes3" name="question3" className="custom-control-input" onClick={() => this.handleText3(true)} required />
                                    <label className="custom-control-label" htmlFor="yes3">Sí</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="no" checked={(values.question3 === "no" ? true : false)} onChange={handleChange("question3")} type="radio" id="no3" name="question3" className="custom-control-input" onClick={() => this.handleText3(false)} />
                                    <label className="custom-control-label" htmlFor="no3">No</label>
                                </div>
                            </div>
                            <input value={values.question3Ans} onChange={handleChange("question3Ans")} hidden={this.state.q3 ? false : true} name="question3Ans" type="text" className="col colM form-control" placeholder="¿Cuál?" required={(values.question3 === "yes" ? true : false)} />
                        </div>
                        <div className="row">
                            <label className="col-6 color-text" required>¿Ha tenido o tiene problemas articulares, musculares u óseos? (desagrro, esguince, trauma, fractura)</label>
                            <div className="col-2 color-radio ans">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="yes" checked={(values.question4 === "yes" ? true : false)} onChange={handleChange("question4")} type="radio" id="yes4" name="question4" className="custom-control-input" onClick={() => this.handleText4(true)} required />
                                    <label className="custom-control-label" htmlFor="yes4">Sí</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="no" checked={(values.question4 === "no" ? true : false)} onChange={handleChange("question4")} type="radio" id="no4" name="question4" className="custom-control-input" onClick={() => this.handleText4(false)} />
                                    <label className="custom-control-label" htmlFor="no4">No</label>
                                </div>
                            </div>
                            <input value={values.question4Ans} onChange={handleChange("question4Ans")} hidden={this.state.q4 ? false : true} name="question4Ans" type="text" className="col colM form-control" placeholder="¿Cuál?" required={(values.question4 === "yes" ? true : false)} />
                        </div>
                        <div className="row">
                            <label className="col-6 color-text" required>¿Tiene algún factor de riesgo cardiovascular? (colesterol alto, diabetes, obesidad, estrés, tabaquismo, sedentarismo, consumo de alcohol excesivo) </label>
                            <div className="color-radio ans col-2">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="yes" checked={(values.question5 === "yes" ? true : false)} onChange={handleChange("question5")} type="radio" id="yes5" name="question5" className="custom-control-input" onClick={() => this.handleText5(true)} required />
                                    <label className="custom-control-label" htmlFor="yes5">Sí</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="no" checked={(values.question5 === "no" ? true : false)} onChange={handleChange("question5")} type="radio" id="no5" name="question5" className="custom-control-input" onClick={() => this.handleText5(false)} />
                                    <label className="custom-control-label" htmlFor="no5">No</label>
                                </div>
                            </div>
                            <input value={values.question5Ans} onChange={handleChange("question5Ans")} hidden={this.state.q5 ? false : true} name="question5Ans" type="text" className="col colM form-control" placeholder="¿Cuál?" required={(values.question5 === "yes" ? true : false)} />
                        </div>
                        <div className="row">
                            <label className="col color-text" required>¿Ha tenido molestias, dolor o presión en el pecho al realizar ejercicio? </label>
                            <div className="color-radio">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="yes" checked={(values.question6 === "yes" ? true : false)} onChange={handleChange("question6")} type="radio" id="yes6" name="question6" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="yes6">Sí</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="no" checked={(values.question6 === "no" ? true : false)} onChange={handleChange("question6")} type="radio" id="no6" name="question6" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="no6">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col color-text" required>¿Presenta ahogo inusual, se siente cansado con facilidad, con excesiva fatiga al realizar actividad física leve? </label>
                            <div className="color-radio">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="yes" checked={(values.question7 === "yes" ? true : false)} onChange={handleChange("question7")} type="radio" id="yes7" name="question7" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="yes7">Sí</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="no" checked={(values.question7 === "no" ? true : false)} onChange={handleChange("question7")} type="radio" id="no7" name="question7" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="no7">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col color-text" required>¿Ha tenido o tiene con el ejercicio mareo, náuseas, sincopes o desmayos? </label>
                            <div className="color-radio">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="yes" checked={(values.question8 === "yes" ? true : false)} onChange={handleChange("question8")} type="radio" id="yes8" name="question8" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="yes8">Sí</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="no" checked={(values.question8 === "no" ? true : false)} onChange={handleChange("question8")} type="radio" id="no8" name="question8" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="no8">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col color-text" required>¿Ha presentado algún dolor o molestia articular o muscular en las últimas dos (2) semanas? </label>
                            <div className="color-radio">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="yes" checked={(values.question9 === "yes" ? true : false)} onChange={handleChange("question9")} type="radio" id="yes9" name="question9" className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="yes9">Sí</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="no" checked={(values.question9 === "no" ? true : false)} onChange={handleChange("question9")} type="radio" id="no9" name="question9" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="no9">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col color-text" required>¿Toma algún medicamento? </label>
                            <div className="color-radio">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="yes" checked={(values.question10 === "yes" ? true : false)} onChange={handleChange("question10")} type="radio" id="yes10" name="question10" onClick={() => this.handleText6(true)} className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="yes10">Sí</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="no" checked={(values.question10 === "no" ? true : false)} onChange={handleChange("question10")} type="radio" id="no10" name="question10" className="custom-control-input" onClick={() => this.handleText6(false)} />
                                    <label className="custom-control-label" htmlFor="no10">No</label>
                                </div>
                            </div>
                        </div>
                        <div hidden={this.state.q6 ? false : true} className="row">
                            <input value={values.medicines} onChange={handleChange("medicines")} name="medicines" type="text" className="col colM form-control" placeholder="¿Cuál/es medicamentos?" required={(values.question10 === "yes" ? true : false)} />
                            <input value={values.indicatedDose} onChange={handleChange("indicatedDose")} name="indicatedDose" type="text" className="col colM form-control" placeholder="¿Cuál es dosis medicada?" required={(values.question10 === "yes" ? true : false)} />
                        </div>
                        <div className="row">
                            <label className="col-10 color-text" required>¿Existe algún otro problema o enfermedad no mencionada aquí que debiera confiarnos para evitar imprevistos a la hora de realizar actividad física? </label>
                            <div className="color-radio ansExist">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="yes" checked={(values.question11 === "yes" ? true : false)} onChange={handleChange("question11")} type="radio" id="yes11" name="question11" onClick={() => this.handleText7(true)} className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="yes11">Sí</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="no" checked={(values.question11 === "no" ? true : false)} onChange={handleChange("question11")} type="radio" id="no11" name="question11" onClick={() => this.handleText7(false)} className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="no11">No</label>
                                </div>
                            </div>
                        </div>
                        <div hidden={this.state.q7 ? false : true} className="row">
                            <input value={values.question11Ans} onChange={handleChange("question11Ans")} name="question11Ans" type="text" className="col colM form-control" placeholder="¿Cuál?" required={(values.question11 === "yes" ? true : false)} />
                        </div>
                        <div className="row justify-content-md-center">
                            <button type="submit" className="btn-lg btn-mar btn-primary">Siguiente</button>
                            <button onClick={this.back} className="btn-lg btn-mar btn-primary">Atrás</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}