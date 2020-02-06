const UbicationCtrl = {};
const UbicationModel = require('../models/Ubication');

UbicationCtrl.getUbications = async (req, res) => {
    const Ubications = await UbicationModel.find();
    res.json(Ubications);
}

UbicationCtrl.createUbication = async(req, res) => {
    const { name, code } = req.body;
    const newUbication = new UbicationModel({
        name, code
    })
    await newUbication.save();
    res.json({message:'Ubication Created'}) 
}

UbicationCtrl.getUbication = async (req, res) => {    
    const ubication = await UbicationModel.find({"name":req.params.name});
    res.json(ubication)
}

UbicationCtrl.deleteUbication = async(req, res) => {
    await UbicationModel.findByIdAndDelete(req.params.id);
    res.json({message:'Ubication deleted'}) 
    //await LoginUserModel.findByIdAndDelete(req.params.id);
    //res.json({message:'User deleted'}) 
}

module.exports = UbicationCtrl;