const gymCtrl = {};
const GymModel = require('../models/Gym');

gymCtrl.getGyms = async (req, res) => {
    const gyms = await GymModel.find();
    res.json(gyms);
}

gymCtrl.createGym = async(req, res) => {
    const { code, name, ubication} = req.body;
    const newGym = new GymModel({
        code,
        name,
        ubication
    })
    await newGym.save();
    res.json({message:'Gym Created'}) 
}

gymCtrl.updateGym = async(req, res) => {
    const {code, name, ubication} = req.body;
    await GymModel.findOneAndUpdate(req.params.id, {
        code, name, ubication
    });
    res.json({message:'Gym updated'}) 
}

gymCtrl.getGym = async (req, res) => {    
    const gym = await GymModel.findById(req.params.id);
    res.json(gym)
    //const user = await GymModel.find({"idUser":req.params.idUser});
    //res.json(user)
}

gymCtrl.deleteGym = async(req, res) => {
    await GymModel.findByIdAndDelete(req.params.id);
    res.json({message:'Gym deleted'}) 
    //await GymModel.findByIdAndDelete(req.params.id);
    //res.json({message:'User deleted'}) 
}

module.exports = gymCtrl;