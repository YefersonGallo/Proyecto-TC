const { Schema, model } = require('mongoose');

const GymTrainerSchema = new Schema({
    codeGym: {type:Object, required:true},
    idTrainer: [{type: Object, required:true}]
}, {
    timestamps: true
});

module.exports = model('GymTrainer', GymTrainerSchema);