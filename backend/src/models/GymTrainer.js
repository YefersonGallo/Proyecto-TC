const { Schema, model } = require('mongoose');

const GymTrainerSchema = new Schema({
    idTrainer: {type: Number, required:true},
    codeGym: {type:String, required:true}
}, {
    timestamps: true
});

module.exports = model('GymTrainer', GymTrainerSchema);