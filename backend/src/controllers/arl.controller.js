const ARLCtrl = {};
const ARLModel = require('../models/Arl');

ARLCtrl.getARLs = async (req, res) => {
    const ARLs = await ARLModel.find();
    res.json(ARLs);
}

ARLCtrl.createARL = async(req, res) => {
    const { name } = req.body;
    const newARL = new ARLModel({
        name
    })
    await newARL.save();
    res.json({message:'ARL Created'}) 
}

ARLCtrl.getARL = async (req, res) => {    
    const arl = await ARLModel.find({"name":req.params.name});
    res.json(arl)
}

ARLCtrl.deleteARL = async(req, res) => {
    await ARLModel.findByIdAndDelete(req.params.id);
    res.json({message:'ARL deleted'}) 
    //await LoginUserModel.findByIdAndDelete(req.params.id);
    //res.json({message:'User deleted'}) 
}

module.exports = ARLCtrl;