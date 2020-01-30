const { Schema, model } = require('mongoose');

const LoginUserSchema = new Schema({
    idUser: Number
}, {
    timestamps: true
});

module.exports = model('LoginUser', LoginUserSchema);