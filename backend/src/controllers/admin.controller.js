const adminCtrl = {};
const AdminModel = require('../models/Admin');

adminCtrl.getAdmins = async (req, res) => {
    const admins = await AdminModel.find();
    res.json(admins);
}

adminCtrl.createAdmin = async(req, res) => {
    const { idAdmin, password } = req.body;
    const newAdmin = new AdminModel({
        idAdmin,
        password
    })
    await newAdmin.save();
    res.json({message:'Admin Created'}) 
}

adminCtrl.updateAdmin = async(req, res) => {
    const {idAdmin, password} = req.body;
    await AdminModel.findOneAndUpdate(req.params.id, {
        idAdmin, password
    });
    res.json({message:'Admin updated'}) 
}

adminCtrl.getAdmin = async (req, res) => {    
    const admin = await AdminModel.find({"idAdmin":req.params.idAdmin});
    res.json(admin)
}

adminCtrl.getAdminId = async (req, res) => {    
    const admin = await AdminModel.findById(req.params.id);
    res.json(admin)
}

adminCtrl.deleteAdmin = async(req, res) => {
    await AdminModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin deleted'}) 
    //await AdminModel.findByIdAndDelete(req.params.id);
    //res.json({message:'User deleted'}) 
}

module.exports = adminCtrl;