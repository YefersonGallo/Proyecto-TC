import React, { Component } from 'react'
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'react-datepicker/dist/react-datepicker.css'
import '../Register.css'

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
        const { handleChange, values, onChangeDate, handleValidationText, handleValidationNumber } = this.props;
        return (

            <div className="PersonalData">
                <form onSubmit={this.continue}>
                    <div className="containerForm">
                        <h3 className="text-center">Datos Personales</h3>
                        <div className="row">
                            <TextField value={values.names} name="names" type="text" className="col m-2 colM form-control" label="Nombres" onChange={handleValidationText("names")} required />
                            <TextField value={values.lastnames} name="lastnames" onChange={handleValidationText("lastnames")} type="text" className="col m-2 colM form-control" label="Apellidos" required />
                            <FormControl required className="col m-2 colM form-control">
                                <InputLabel id="DocumentType">Tipo de Documento</InputLabel>
                                <Select
                                    labelId="DocumentType"
                                    id="demo-simple-select-required"
                                    value={values.documentType}
                                    name="documentType"
                                    onChange={handleChange("documentType")}
                                >
                                    <MenuItem value="TI" key="TI">Tarjeta de Identidad</MenuItem>
                                    <MenuItem value="CC" key="CC">Cédula de Ciudadanía</MenuItem>
                                    <MenuItem value="CE" key="CE">Cédula de Extranjería</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField value={values.idUser} name="idUser" onChange={handleValidationNumber("idUser")} type="text" className="col m-2 colM form-control" label="Número de Documento" required />
                            <TextField value={values.password} name="password" onChange={handleChange("password")} type="password" className="col m-2 colM form-control" label="Contraseña" required />
                        </div>
                        <div className="row">
                            <TextField value={values.code} name="code" onChange={handleValidationNumber("code")} type="text" className="col-2 m-2 mt-3 colM form-control" label="Código Institucional" required />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    className="col"
                                    maxDate={new Date()}
                                    value={values.birthdate}
                                    selected={values.birthdate}
                                    onChange={onChangeDate}
                                    name="birthdate"
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Fecha de Nacimiento"
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    required
                                />
                            </MuiPickersUtilsProvider>
                            <div className="row col">
                                <label className="col genre" >Género * </label>
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
                            </div>
                            <TextField name="phone" value={values.phone} onChange={handleValidationNumber("phone")} type="text" className="col m-2 mt-3 colM form-control" label="Télefono" required />
                        </div>
                        <div className="row">
                            <TextField name="email" value={values.mail} onChange={handleChange("mail")} type="mail" className="col  m-2 colM form-control" label="Correo Institucional" required />
                            <FormControl required className="col m-2 colM form-control">
                                <InputLabel id="eps">EPS</InputLabel>
                                <Select
                                    name="eps"
                                    value={values.eps}
                                    onChange={handleChange("eps")}
                                    labelId="eps"
                                >
                                    {
                                        values.epss.map(eps =>
                                            <MenuItem value={eps.name} key={eps._id}>{eps.name}</MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                            <FormControl required className="col m-2 colM form-control">
                                <InputLabel id="rh">RH</InputLabel>
                                <Select
                                    labelId="rh"
                                    value={values.rh}
                                    name="rh"
                                    onChange={handleChange("rh")}
                                >
                                    <MenuItem value="A+" key="A+">A+</MenuItem>
                                    <MenuItem value="A-" key="A-">A-</MenuItem>
                                    <MenuItem value="B+" key="B+">B+</MenuItem>
                                    <MenuItem value="B-" key="B-">B-</MenuItem>
                                    <MenuItem value="O+" key="O+">O+</MenuItem>
                                    <MenuItem value="O-" key="O-">O-</MenuItem>
                                    <MenuItem value="AB+" key="AB+">AB+</MenuItem>
                                    <MenuItem value="AB-" key="AB-">AB-</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="row">
                            <FormControl className="col m-2 colM form-control">
                                <InputLabel id="arl">ARL</InputLabel>
                                <Select
                                    name="arl"
                                    value={values.arl}
                                    onChange={handleChange("arl")}
                                    labelId="arl"
                                >
                                    {
                                        values.arls.map(arl =>
                                            <MenuItem value={arl.name} key={arl._id}>{arl.name}</MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                            <label className="col color-text">Alergia a medicamentos * </label>
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
                            <TextField name="allergyAns" value={values.allergyAns} hidden={this.state.allergyBool ? false : true} onChange={handleChange("allergyAns")} type="text" className="col  m-2 colM form-control" label="¿Cuál?" />
                        </div>
                        <div className="row">
                            <label className="col mb-4 emergency">En caso de emergencia informar a:</label>
                            <TextField name="nameParent" value={values.nameParent} onChange={handleValidationText("nameParent")} type="text" className="col m-2 colM mb-4 form-control" label="Nombre" required />
                            <TextField name="phoneParent" value={values.phoneParent} onChange={handleValidationNumber("phoneParent")} type="text" className="col mb-4 m-2 colM form-control" label="Télefono" required />
                            <FormControl required className="col m-2 colM form-control">
                                <InputLabel id="parent">Parentesco</InputLabel>
                                <Select
                                    name="parent"
                                    value={values.parent}
                                    onChange={handleChange("parent")}
                                    labelId="parent"
                                >
                                    {
                                        values.parents.map(parent =>
                                            <MenuItem value={parent.name} key={parent._id}>{parent.name}</MenuItem>
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </div>
                        <div className="row justify-content-md-center">
                            <button type="submit" className="btn-lg btn-mar btn-primary">Siguiente</button>
                        </div>
                    </div>
                </form>
            </div >
        );

    }
}