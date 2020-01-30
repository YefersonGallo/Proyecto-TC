const { Schema, model } = require('mongoose');

const GymUserSchema = new Schema({
    idUser: {type: Number, required: true},
    codeGym: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = model('GymUser', GymUserSchema);