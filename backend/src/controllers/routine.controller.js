const routineCtrl = {};
const RoutineModel = require('../models/Routine');

routineCtrl.getRoutines = async (req, res) => {
    const routines = await RoutineModel.find();
    res.json(routines);
}

routineCtrl.createRoutine = async(req, res) => {
    const { name, description} = req.body;
    const newRoutine = new RoutineModel({
        name, description
    })
    if(req.file){
        const {filename} = req.file
        newRoutine.setImgUrl(filename)
    }
    await newRoutine.save();
    res.json({message:'Routine Created'}) 
}

routineCtrl.updateRoutine = async(req, res) => {
    const {name, description} = req.body;
    await RoutineModel.findOneAndUpdate(req.params.id, {
        name, description
    });
    res.json({message:'Routine updated'}) 
}

routineCtrl.getRoutine = async (req, res) => {    
    const routine = await RoutineModel.findById(req.params.id);
    res.json(routine)
    //const user = await RoutineModel.find({"idUser":req.params.idUser});
    //res.json(user)
}

routineCtrl.deleteRoutine = async(req, res) => {
    await RoutineModel.findByIdAndDelete(req.params.id);
    res.json({message:'Routine deleted'}) 
    //await RoutineModel.findByIdAndDelete(req.params.id);
    //res.json({message:'User deleted'}) 
}

module.exports = routineCtrl;