const { Schema, model } = require('mongoose');

const LoginAdminSchema = new Schema({
    idAdmin: Number
}, {
    timestamps: true
});

module.exports = model('AdminUser', LoginAdminSchema);