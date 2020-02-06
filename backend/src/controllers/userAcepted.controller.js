const UserAceptedCtrl = {};
const UserAceptedModel = require('../models/UserAcepted');
const nodemailer = require('nodemailer');

UserAceptedCtrl.getUserAcepteds = async (req, res) => {
    const UserAcepteds = await UserAceptedModel.find();
    res.json(UserAcepteds);
}

UserAceptedCtrl.createUserAcepted = async(req, res) => {
    const { idUser, response, name, lastname, email, newAcept, text} = req.body;
    const newUserAcepted = new UserAceptedModel({
        idUser, response
    })
    await newUserAcepted.save();
    if(!newAcept){
        sendEmail(email, name, lastname, text)
    }
    res.json({message:'UserAcepted Created'}) 
}

UserAceptedCtrl.getUserAcepted = async (req, res) => {    
    const UserAcepted = await UserAceptedModel.find({"idUser":req.params.name});
    res.json(UserAcepted)
}

UserAceptedCtrl.updateUserAcepted = async(req, res) => {
    const {idUser, response} = req.body;
    await UserAceptedModel.findOneAndUpdate(req.params.id, {
        idUser, response
    });
    res.json({message:'Updated'}) 
}

UserAceptedCtrl.deleteUserAcepted = async(req, res) => {
    await UserAceptedModel.findByIdAndDelete(req.params.id);
    res.json({message:'UserAcepted deleted'}) 
    //await LoginUserModel.findByIdAndDelete(req.params.id);
    //res.json({message:'User deleted'}) 
}

function sendEmail(email, name, lastname, text) {
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
        text: 'Hola, ' + name + ' ' + lastname +' ' +text
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

module.exports = UserAceptedCtrl;