const { Schema, model } = require('mongoose');

const TrainerSchema = new Schema({
    idTrainer: {type: Number, required: true},
    documentType: {type: String, required: true},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    code: {type: Number, required: true},
    password: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = model('Trainer', TrainerSchema);