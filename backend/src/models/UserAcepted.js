const { Schema, model } = require('mongoose');

const UserAceptedSchema = new Schema({
    idUser: {type: String, required: true},
    response: {type: Number, required: true}
}, {
    timestamps: true
});

module.exports = model('UserAcepted', UserAceptedSchema);