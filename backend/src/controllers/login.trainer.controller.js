const trainerLoginCtrl = {};
const LoginTrainerModel = require('../models/LoginTrainer');

trainerLoginCtrl.getTrainersLogin = async (req, res) => {
    const trainersLogin = await LoginTrainerModel.find();
    res.json(trainersLogin);
}

trainerLoginCtrl.createTrainerLogin = async(req, res) => {
    const { idTrainer } = req.body;
    const newLoginTrainer = new LoginTrainerModel({
        idTrainer
    })
    await newLoginTrainer.save();
    res.json({message:'Login Created'}) 
}

trainerLoginCtrl.getTrainerLogin = async (req, res) => {    
    const trainer = await LoginTrainerModel.findById(req.params.id);
    res.json(trainer)
    //const admin = await LoginTrainerModel.find({"idAdmin":req.params.idAdmin});
    //res.json(admin)
}

trainerLoginCtrl.deleteTrainerLogin = async(req, res) => {
    await LoginTrainerModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin deleted'}) 
    //await LoginTrainerModel.findByIdAndDelete(req.params.id);
    //res.json({message:'Admin deleted'}) 
}

module.exports = trainerLoginCtrl;