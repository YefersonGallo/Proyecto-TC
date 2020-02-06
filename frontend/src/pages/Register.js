import React, { Component } from 'react'
import PersonalData from './form/PersonalData';
import Habits from './form/Habits';
import MedicalRecord from './form/MedicalRecord';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import StepConnector from '@material-ui/core/StepConnector';
import './Register.css';
import axios from 'axios'

export default class Register extends Component {

  state = {
    step: 0,
    names: '',
    lastnames: '',
    documentType: '',
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
    confirmation: false,
    epss: [],
    arls: [],
    parents: [],
    users: [],
    open: false
  };

  onSubmit = async (e) => {
    var flag = false
    this.getUsers()
    this.state.users.map(user => (user.idUser === this.state.idUser ? flag = true : flag = false))
    if (flag) {
      alert("El usuario ya ha sido registrado")
    } else {
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
      const userAcept = {idUser: this.state.idUser, response: 0, newAcept: true}
      await axios.post('https://backend-sic-gym-uptc.herokuapp.com/api/acepteds', userAcept);
      await axios.post('https://backend-sic-gym-uptc.herokuapp.com/api/users', newUser);
      this.handleClick()
    }
  }

  async componentDidMount() {
    const res1 = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/arls')
    const res2 = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/epss')
    const res3 = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/parents')
    this.setState({
      arls: res1.data,
      epss: res2.data,
      parents: res3.data,
    })
    this.getUsers()
  }

  async getUsers(){
    const res4 = await axios.get('https://backend-sic-gym-uptc.herokuapp.com/api/users')
    this.setState({
      users: res4.data
    })
  }

  handleClick = () => {
    this.setState({
        open: true
    })
  };

handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
        open: false
    })
  };

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

  handleValidationText = input => e => {
    this.setState({ [input]: e.target.value.toString().replace(/[^a-zA-ZáéíóúÁÉÍÓÚ ]+/, '')})
  }

  handleValidationNumber = input => e => {
    this.setState({ [input]: e.target.value.toString().replace(/[^0-9]+/, '') })
  }

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
    const { names, lastnames, documentType, idUser, password, code, birthdate, genre, phone, mail, eps, rh, arl, allergy, allergyAns, nameParent, phoneParent, parent, question1, question1Ans, question2, question2Ans, question3, question3Ans, question4, question4Ans, question5, question5Ans, question6, question7, question8, question9, question10, medicines, indicatedDose, question11, question11Ans, question12, question12Ans, timeWeek, hours, minutes, lastTime, benefits, confirmation, health, conditioning, lose, recreation, increasedMuscle, sports, arls, epss, parents, open } = this.state;
    const values = { names, lastnames, documentType, idUser, password, code, birthdate, genre, phone, mail, eps, rh, arl, allergy, allergyAns, nameParent, phoneParent, parent, question1, question1Ans, question2, question2Ans, question3, question3Ans, question4, question4Ans, question5, question5Ans, question6, question7, question8, question9, question10, medicines, indicatedDose, question11, question11Ans, question12, question12Ans, timeWeek, hours, minutes, lastTime, benefits, confirmation, health, conditioning, lose, recreation, increasedMuscle, sports, arls, epss, parents, open }
    const ColorlibConnector = withStyles({
      alternativeLabel: {
        top: 22,
      },
      active: {
        '& $line': {
          backgroundImage:
            'linear-gradient(to right, #2980b9, #2c3e50)',
        },
      },
      completed: {
        '& $line': {
          backgroundImage:
            'linear-gradient(to right, #2980b9, #2c3e50)',
        },
      },
      line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
      },
    })(StepConnector);

    const useColorlibStepIconStyles = makeStyles({
      root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      active: {
        backgroundImage:
          'linear-gradient(to right, #2980b9, #2c3e50)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      },
      completed: {
        backgroundImage:
          'linear-gradient(to right, #2980b9, #2c3e50)',
      },
    });

    function ColorlibStepIcon(props) {
      const classes = useColorlibStepIconStyles();
      const { active, completed } = props;

      const icons = {
        1: <AssignmentIndIcon />,
        2: <LocalHospitalIcon />,
        3: <DirectionsRunIcon />,
      };

      return (
        <div
          className={clsx(classes.root, {
            [classes.active]: active,
            [classes.completed]: completed,
          })}
        >
          {icons[String(props.icon)]}
        </div>
      );
    }

    ColorlibStepIcon.propTypes = {
      active: PropTypes.bool,
      completed: PropTypes.bool,
      icon: PropTypes.node,
    };

    function getSteps() {
      return ['Datos Personales', 'Historia Médica', 'Hábitos'];
    }

    const steps = getSteps();

    return (
      <div >
        <div className="text-center mb-4">
          <h1 className="h1 mb-3">Sistema de información y Control Gimnasios UPTC</h1>
          <h1 className="h1 mb-3">SICGYM UPTC</h1>
          <h2 className="h2 mb-3">Registrarse</h2>
        </div>
        <Stepper alternativeLabel activeStep={step} connector={<ColorlibConnector />}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          <div hidden={this.state.step !== 0}>
            <PersonalData nextStep={this.nextStep} handleValidationNumber={this.handleValidationNumber} handleValidationText={this.handleValidationText} handleChange={this.handleChange} values={values} onChangeDate={this.onChangeDate} />
          </div>
          <div hidden={this.state.step !== 1}>
            <MedicalRecord nextStep={this.nextStep} prevStep={this.prevStep} onChangeRadio={this.onChangeRadio} handleChange={this.handleChange} values={values} />
          </div>
          <div hidden={this.state.step !== 2}>
            <Habits handleClick={this.handleClick} handleClose={this.handleClose} onSubmit={this.onSubmit} prevStep={this.prevStep} handleChange={this.handleChange} onChangeRadio={this.onChangeRadio} values={values} handleChangeCheck={this.handleChangeCheck} />
          </div>
        </div>
      </div>
    );

  }
}
