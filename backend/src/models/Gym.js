const { Schema, model } = require('mongoose');

const GymSchema = new Schema({
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    ubication: {type: String, required: true} 
}, {
    timestamps: true
});

module.exports = model('Gym', GymSchema);