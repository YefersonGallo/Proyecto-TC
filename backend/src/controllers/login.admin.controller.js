const adminLoginCtrl = {};
const LoginAdminModel = require('../models/LoginAdmin');

adminLoginCtrl.getAdminsLogin = async (req, res) => {
    const adminsLogin = await LoginAdminModel.find();
    res.json(adminsLogin);
}

adminLoginCtrl.createAdminLogin = async(req, res) => {
    const { idAdmin} = req.body;
    const newLoginAdmin = new LoginAdminModel({
        idAdmin
    })
    await newLoginAdmin.save();
    res.json({message:'Login Created'}) 
}

adminLoginCtrl.getAdminLogin = async (req, res) => {    
    const admin = await LoginAdminModel.findById(req.params.id);
    res.json(admin)
    //const admin = await LoginAdminModel.find({"idAdmin":req.params.idAdmin});
    //res.json(admin)
}

adminLoginCtrl.deleteAdminLogin = async(req, res) => {
    await LoginAdminModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin deleted'}) 
    //await LoginAdminModel.findByIdAndDelete(req.params.id);
    //res.json({message:'Admin deleted'}) 
}

module.exports = adminLoginCtrl;