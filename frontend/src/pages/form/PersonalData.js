import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Register.css';

export default class PersonalData extends Component {
    state = {
        allergyBool: true
    }

    handleText(allergyBool) {
        this.setState({ allergyBool });
    }


    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    

    render() {
        const { handleChange, values, onChangeDate } = this.props;
        const ExampleCustomInput = ({ value, onClick }) => (
            <button className="form-control btn-date col-12" onClick={onClick}>
              {value}
            </button>
          );
        return (
            <div className="PersonalData">
                <form onSubmit={this.continue}>
                    <div className="containerForm">
                        <h3 className="text-center">Datos Personales</h3>
                        <div className="row">
                            <input value={values.names} name="names" type="text" className="col colM form-control" placeholder="Nombres" onChange={handleChange("names")} required />
                            <input value={values.lastnames} name="lastnames" onChange={handleChange("lastnames")} type="text" className="col colM form-control" placeholder="Apellidos" required />
                            <label className="col color-text">Tipo de Documento: </label>
                            <select value={values.documentType} name="documentType" onChange={handleChange("documentType")} className="col colM form-control">
                                <option value="TI" key="TI">Tarjeta de Identidad</option>
                                <option value="CC" key="CC">Cédula de Ciudadanía</option>
                                <option value="CE" key="CE">Cédula de Extranjería</option>
                            </select>
                            <input value={values.idUser} name="idUser" onChange={handleChange("idUser")} type="number" className="col colM form-control" placeholder="Número de Documento" required />
                        </div>
                        <div className="row">
                            <input value={values.password} name="password" onChange={handleChange("password")} type="password" className="col-4 colM form-control" placeholder="Contraseña" required />
                            <input value={values.code} name="code" onChange={handleChange("code")} type="number" className="col-4 colM form-control" placeholder="Código Institucional" required />
                            <div className="col row">
                            <label className="col-6 color-text">Fecha de Nacimiento: </label>
                            <DatePicker className="col-8" customInput={<ExampleCustomInput />} name="birthdate" maxDate={new Date()} peekNextMonth showMonthDropdown showYearDropdown dropdownMode="select" value={values.birthdate} selected={values.birthdate} onChange={onChangeDate} className="col date form-control" required />
                            </div>
                        </div>
                        <div className="row">
                            <label className="col genre" >Género: </label>
                            <div className="color-radio">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="female" checked={(values.genre === "female" ? true : false)} type="radio" id="female" name="genre" onChange={handleChange("genre")} className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="female">Femenino</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input value="male" checked={(values.genre === "male" ? true : false)} type="radio" id="male" name="genre" onChange={handleChange("genre")} className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="male">Masculino</label>
                                </div>
                            </div>
                            <input name="phone" value={values.phone} onChange={handleChange("phone")} type="number" className="col colM form-control" placeholder="Télefono" required />
                            <input name="email" value={values.mail} onChange={handleChange("mail")} type="mail" className="col colM form-control" placeholder="Correo Institucional" required />
                            <input name="eps" value={values.eps} onChange={handleChange("eps")} type="text" className="col colM form-control" placeholder="EPS" required />
                        </div>
                        <div className="row">
                            <input name="rh" value={values.rh} onChange={handleChange("rh")} type="text" className="col colM form-control" placeholder="RH" required />
                            <input name="arl" value={values.arl} onChange={handleChange("arl")} type="text" className="col colM form-control" placeholder="ARL" />
                            <label className="col color-text" required>Alergia a medicamentos: </label>
                            <div className="color-radio">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" value="yes" checked={(values.allergy === "yes" ? true : false)} id="yes" name="allergy" onClick={() => this.handleText(true)} onChange={handleChange("allergy")} className="custom-control-input" required />
                                    <label className="custom-control-label" htmlFor="yes">Sí</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" value="no" checked={(values.allergy === "no" ? true : false)} id="no" name="allergy" onClick={() => this.handleText(false)} onChange={handleChange("allergy")} className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="no">No</label>
                                </div>
                            </div>
                            <input name="allergyAns" value={values.allergyAns} hidden={this.state.allergyBool ? false : true} onChange={handleChange("allergyAns")} type="text" className="col colM form-control" placeholder="¿Cuál?" />
                        </div>
                        <div className="row">
                            <label className="col emergency">En caso de emergencia informar a:</label>
                            <input name="nameParent" value={values.nameParent} onChange={handleChange("nameParent")} type="text" className="col colM form-control" placeholder="Nombre" required />
                            <input name="phoneParent" value={values.phoneParent} onChange={handleChange("phoneParent")} type="number" className="col colM form-control" placeholder="Télefono" required />
                            <input name="parent" value={values.parent} onChange={handleChange("parent")} type="text" className="col colM form-control" placeholder="Parentesco" required />
                        </div>
                        <div className="row justify-content-md-center">
                            <button type="submit" className="btn-lg btn-mar btn-primary">Siguiente</button>
                        </div>
                    </div>
                </form>
            </div>
        );

    }
}