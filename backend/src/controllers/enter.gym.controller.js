const gymUserCtrl = {};
const GymUserModel = require('../models/EnterGym');

gymUserCtrl.getGymsUsers = async (req, res) => {
    const gymsUsers = await GymUserModel.find();
    res.json(gymsUsers);
}

gymUserCtrl.createGymUser = async(req, res) => {
    const { idUser, codeGym} = req.body;
    const newGymUser = new GymUserModel({
        idUser, 
        codeGym
    })
    await newGymUser.save();
    res.json({message:'Login Created'}) 
}

gymUserCtrl.getGymUser = async (req, res) => {    
    const user = await GymUserModel.find({"idUser":req.params.idUser});
    res.json(user)
}

gymUserCtrl.deleteGymUser = async(req, res) => {
    await GymUserModel.findByIdAndDelete(req.params.id);
    res.json({message:'User deleted'}) 
    //await LoginUserModel.findByIdAndDelete(req.params.id);
    //res.json({message:'User deleted'}) 
}

module.exports = gymUserCtrl;