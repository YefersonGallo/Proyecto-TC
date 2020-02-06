const UserAceptedCtrl = {};
const UserAceptedModel = require('../models/UserAcepted');

UserAceptedCtrl.getUserAcepteds = async (req, res) => {
    const UserAcepteds = await UserAceptedModel.find();
    res.json(UserAcepteds);
}

UserAceptedCtrl.createUserAcepted = async(req, res) => {
    const { idUser, response } = req.body;
    const newUserAcepted = new UserAceptedModel({
        idUser, response
    })
    await newUserAcepted.save();
    res.json({message:'UserAcepted Created'}) 
}

UserAceptedCtrl.getUserAcepted = async (req, res) => {    
    const UserAcepted = await UserAceptedModel.find({"idUser":req.params.name});
    res.json(UserAcepted)
}

UserAceptedCtrl.updateUserAcepted = async(req, res) => {
    const {idUser, response} = req.body;
    await TrainerModel.findOneAndUpdate(req.params.id, {
        idUser, response
    });
    res.json({message:'Trainer updated'}) 
}

UserAceptedCtrl.deleteUserAcepted = async(req, res) => {
    await UserAceptedModel.findByIdAndDelete(req.params.id);
    res.json({message:'UserAcepted deleted'}) 
    //await LoginUserModel.findByIdAndDelete(req.params.id);
    //res.json({message:'User deleted'}) 
}

module.exports = UserAceptedCtrl;