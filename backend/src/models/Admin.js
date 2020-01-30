const { Schema, model } = require('mongoose');

const AdminSchema = new Schema({
    idAdmin: {type: Number, required: true},
    password: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = model('Admin', AdminSchema);