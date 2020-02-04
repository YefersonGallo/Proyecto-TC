const { Schema, model } = require('mongoose');

const ARLSchema = new Schema({
    name: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = model('ARL', ARLSchema);