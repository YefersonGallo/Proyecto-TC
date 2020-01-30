const trainerCtrl = {};
const TrainerModel = require('../models/Trainer');

trainerCtrl.getTrainers = async (req, res) => {
    const trainers = await TrainerModel.find();
    res.json(trainers);
}

trainerCtrl.createTrainer = async(req, res) => {
    const { idTrainer, documentType, name, lastname, code, password } = req.body;
    const newTrainer = new TrainerModel({
        idTrainer, 
        documentType,
        name, 
        lastname, 
        code, 
        password
    })
    await newTrainer.save();
    res.json({message:'Trainer Created'}) 
}

trainerCtrl.updateTrainer = async(req, res) => {
    const {idTrainer, documentType, name, lastname, code, password} = req.body;
    await TrainerModel.findOneAndUpdate(req.params.id, {
        idTrainer,
        documentType,
        name,
        lastname,
        code,
        password
    });
    res.json({message:'Trainer updated'}) 
}

trainerCtrl.getTrainer = async (req, res) => {    
    const trainer = await TrainerModel.find({"idTrainer":req.params.idTrainer});
    res.json(trainer)
    //const user = await TrainerModel.find({"idUser":req.params.idUser});
    //res.json(user)
}

trainerCtrl.deleteTrainer = async(req, res) => {
    await TrainerModel.findByIdAndDelete(req.params.id);
    res.json({message:'Trainer deleted'}) 
    //await TrainerModel.findByIdAndDelete(req.params.id);
    //res.json({message:'User deleted'}) 
}

module.exports = trainerCtrl;