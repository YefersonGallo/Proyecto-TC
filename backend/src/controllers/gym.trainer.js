const gymTrainerCtrl = {};
const GymTrainerModel = require('../models/GymTrainer');

gymTrainerCtrl.getGymsTrainers = async (req, res) => {
    const GymsTrainers = await GymTrainerModel.find();
    res.json(GymsTrainers);
}

gymTrainerCtrl.createGymTrainer = async(req, res) => {
    const { idTrainer, codeGym} = req.body;
    const newGymTrainer = new GymTrainerModel({
        idTrainer, codeGym
    })
    await newGymTrainer.save();
    res.json({message:'Login Created'}) 
}

gymTrainerCtrl.getGymTrainer = async (req, res) => {    
    const user = await GymTrainerModel.find({"codeGym":req.params.codeGym});
    res.json(user)
    //const user = await GymTrainerModel.find({"idUser":req.params.idUser});
    //res.json(user)
}

gymTrainerCtrl.deleteGymTrainer = async(req, res) => {
    await GymTrainerModel.findByIdAndDelete(req.params.id);
    res.json({message:'User deleted'}) 
    //await GymTrainerModel.findByIdAndDelete(req.params.id);
    //res.json({message:'User deleted'}) 
}

module.exports = gymTrainerCtrl;