const EPSCtrl = {};
const EPSModel = require('../models/Eps');

EPSCtrl.getEPSs = async (req, res) => {
    const EPSs = await EPSModel.find();
    res.json(EPSs);
}

EPSCtrl.createEPS = async(req, res) => {
    const { name } = req.body;
    const newEPS = new EPSModel({
        name
    })
    await newEPS.save();
    res.json({message:'EPS Created'}) 
}

EPSCtrl.getEPS = async (req, res) => {    
    const eps = await EPSModel.find({"name":req.params.name});
    res.json(eps)
}

EPSCtrl.deleteEPS = async(req, res) => {
    await EPSModel.findByIdAndDelete(req.params.id);
    res.json({message:'EPS deleted'}) 
    //await LoginUserModel.findByIdAndDelete(req.params.id);
    //res.json({message:'User deleted'}) 
}

module.exports = EPSCtrl;