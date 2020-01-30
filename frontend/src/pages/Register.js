import React, { Component } from 'react'
import PersonalData from './form/PersonalData';
import Habits from './form/Habits';
import MedicalRecord from './form/MedicalRecord';
import './Register.css';
import axios from 'axios'

export default class Register extends Component {

  state = {
    step: 1,
    names: '',
    lastnames: '',
    documentType: 'TI',
    idUser: '',
    password: '',
    code: '',
    birthdate: new Date(),
    genre: 'null',
    phone: '',
    mail: '',
    eps: '',
    rh: '',
    arl: '',
    allergy: 'null',
    allergyAns: '',
    nameParent: '',
    phoneParent: '',
    parent: '',
    question1: '',
    question1Ans: '',
    question2: '',
    question2Ans: '',
    question3: '',
    question3Ans: '',
    question4: '',
    question4Ans: '',
    question5: '',
    question5Ans: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
    medicines: '',
    indicatedDose: '',
    question11: '',
    question11Ans: '',
    question12: '',
    question12Ans: '',
    timeWeek: '',
    hours: '',
    minutes: '',
    lastTime: '',
    health: false,
    conditioning: false,
    lose: false,
    recreation: false,
    increasedMuscle: false,
    sports: false,
    confirmation: false
  };

  onSubmit = async (e) => {
    const newUser = {
      names: this.state.names,
      lastnames: this.state.lastnames,
      documentType: this.state.documentType,
      idUser: this.state.idUser,
      password: this.state.password,
      code: this.state.code,
      birthdate: this.state.birthdate,
      genre: this.state.genre,
      phone: this.state.phone,
      mail: this.state.mail,
      eps: this.state.eps,
      rh: this.state.rh,
      arl: this.state.arl,
      allergy: this.state.allergy,
      allergyAns: this.state.allergyAns,
      nameParent: this.state.nameParent,
      phoneParent: this.state.phoneParent,
      parent: this.state.parent,
      question1: this.state.question1,
      question1Ans: this.state.question1Ans,
      question2: this.state.question2,
      question2Ans: this.state.question2Ans,
      question3: this.state.question3,
      question3Ans: this.state.question3Ans,
      question4: this.state.question4,
      question4Ans: this.state.question4Ans,
      question5: this.state.question5,
      question5Ans: this.state.question5Ans,
      question6: this.state.question6,
      question7: this.state.question7,
      question8: this.state.question8,
      question9: this.state.question9,
      question10: this.state.question10,
      medicines: this.state.medicines,
      indicatedDose: this.state.indicatedDose,
      question11: this.state.question11,
      question11Ans: this.state.question11Ans,
      question12: this.state.question12,
      question12Ans: this.state.question12Ans,
      timeWeek: this.state.timeWeek,
      hours: this.state.hours,
      minutes: this.state.minutes,
      lastTime: this.state.lastTime,
      health: this.state.health,
      conditioning: this.state.conditioning,
      lose: this.state.lose,
      recreation: this.state.recreation,
      increasedMuscle: this.state.increasedMuscle,
      sports: this.state.sports
    }
    await axios.post('http://localhost:4060/api/users', newUser);
    window.location.href = '/';
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  onChangeDate = birthdate => {
    this.setState(
      { birthdate }
    )
  };

  handleChangeCheck = input => e => {
    this.setState({ [input]: e.target.checked });
  };

  render() {
    const { step } = this.state;
    const { names, lastnames, documentType, idUser, password, code, birthdate, genre, phone, mail, eps, rh, arl, allergy, allergyAns, nameParent, phoneParent, parent, question1, question1Ans, question2, question2Ans, question3, question3Ans, question4, question4Ans, question5, question5Ans, question6, question7, question8, question9, question10, medicines, indicatedDose, question11, question11Ans, question12, question12Ans, timeWeek, hours, minutes, lastTime, benefits, confirmation, health, conditioning, lose, recreation, increasedMuscle, sports } = this.state;
    const values = { names, lastnames, documentType, idUser, password, code, birthdate, genre, phone, mail, eps, rh, arl, allergy, allergyAns, nameParent, phoneParent, parent, question1, question1Ans, question2, question2Ans, question3, question3Ans, question4, question4Ans, question5, question5Ans, question6, question7, question8, question9, question10, medicines, indicatedDose, question11, question11Ans, question12, question12Ans, timeWeek, hours, minutes, lastTime, benefits, confirmation, health, conditioning, lose, recreation, increasedMuscle, sports }
    switch (step) {
      case 1:
        return (
          <div className="Register">
            <div className="text-center mb-4">
              <h1 className="h1 mb-3">Sistema de información y Control Gimnasios UPTC</h1>
              <h1 className="h1 mb-3">SICGYM UPTC</h1>
              <h2 className="h2 mb-3">Registrarse</h2>
            </div>
            <PersonalData nextStep={this.nextStep} handleChange={this.handleChange} values={values} onChangeDate={this.onChangeDate} />
          </div>
        );
      case 2:
        return (
          <div className="Register">
            <div className="text-center mb-4">
              <h1 className="h3 mb-3">Registrarse</h1>
            </div>
            <MedicalRecord nextStep={this.nextStep} prevStep={this.prevStep} onChangeRadio={this.onChangeRadio} handleChange={this.handleChange} values={values} />
          </div>
        );
      case 3:
        return (
          <div className="Register">
            <div className="text-center mb-4">
              <h1 className="h3 mb-3">Registrarse</h1>
            </div>
            <Habits onSubmit={this.onSubmit} prevStep={this.prevStep} handleChange={this.handleChange} onChangeRadio={this.onChangeRadio} values={values} handleChangeCheck={this.handleChangeCheck} />
          </div>
        );
    }
  }
}
