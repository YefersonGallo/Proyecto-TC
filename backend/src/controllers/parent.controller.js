const ParentCtrl = {};
const ParentModel = require('../models/Parent');

ParentCtrl.getParents = async (req, res) => {
    const Parents = await ParentModel.find();
    res.json(Parents);
}

ParentCtrl.createParent = async(req, res) => {
    const { name } = req.body;
    const newParent = new ParentModel({
        name
    })
    await newParent.save();
    res.json({message:'Parent Created'}) 
}

ParentCtrl.getParent = async (req, res) => {    
    const parent = await ParentModel.find({"name":req.params.name});
    res.json(parent)
}

ParentCtrl.deleteParent = async(req, res) => {
    await ParentModel.findByIdAndDelete(req.params.id);
    res.json({message:'Parent deleted'}) 
    //await LoginUserModel.findByIdAndDelete(req.params.id);
    //res.json({message:'User deleted'}) 
}

module.exports = ParentCtrl;