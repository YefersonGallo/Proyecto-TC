const { Schema, model } = require('mongoose');

const EPSSchema = new Schema({
    name: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = model('EPS', EPSSchema);