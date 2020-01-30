const userLoginCtrl = {};
const LoginUserModel = require('../models/LoginUser');

userLoginCtrl.getUsersLogin = async (req, res) => {
    const usersLogin = await LoginUserModel.find();
    res.json(usersLogin);
}

userLoginCtrl.createUserLogin = async(req, res) => {
    const { idUser} = req.body;
    const newLoginUser = new LoginUserModel({
        idUser
    })
    await newLoginUser.save();
    res.json({message:'Login Created'}) 
}

userLoginCtrl.getUserLogin = async (req, res) => {    
    const user = await LoginUserModel.findById(req.params.id);
    res.json(user)
    //const user = await LoginUserModel.find({"idUser":req.params.idUser});
    //res.json(user)
}

userLoginCtrl.deleteUserLogin = async(req, res) => {
    await LoginUserModel.findByIdAndDelete(req.params.id);
    res.json({message:'User deleted'}) 
    //await LoginUserModel.findByIdAndDelete(req.params.id);
    //res.json({message:'User deleted'}) 
}

module.exports = userLoginCtrl;