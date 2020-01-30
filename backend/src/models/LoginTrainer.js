const { Schema, model } = require('mongoose');

const LoginTrainerSchema = new Schema({
    idTrainer: Number
}, {
    timestamps: true
});

module.exports = model('TrainerUser', LoginTrainerSchema);