const userRoutineCtrl = {};
const UserRoutineModel = require('../models/UserRoutines');
const nodemailer = require('nodemailer');

userRoutineCtrl.getUsersRoutines = async (req, res) => {
    const UsersRoutines = await UserRoutineModel.find();
    res.json(UsersRoutines);
}

userRoutineCtrl.createUserRoutine = async (req, res) => {
    const { idUser, routinesUser, mail, name, lastname } = req.body;
    const newUserRoutine = new UserRoutineModel({
        idUser, routinesUser
    })
    await newUserRoutine.save();
    sendEmail(mail, name, lastname)
    res.json({ message: 'Routines Assigned' })
}

userRoutineCtrl.getUserRoutine = async (req, res) => {
    const user = await UserRoutineModel.find({ "idUser": req.params.idUser });
    res.json(user)
}

userRoutineCtrl.deleteUserRoutine = async (req, res) => {
    await UserRoutineModel.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' })
}

function sendEmail(email, name, lastname) {
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'sicgymuptc@gmail.com',
            pass: 'sistemaGimnasiosUPTC2020'
        }
    });
    var mailOptions = {
        from: 'Gimnasios UPTC',
        to: email,
        subject: 'Rutinas Asignadas',
        html: ''
    };

    console.log("sending email", mailOptions);
    transporter.sendMail(mailOptions, function (error, info) {
        console.log("senMail returned!");
        if (error) {
            console.log("ERROR!!!!!!", error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = userRoutineCtrl;