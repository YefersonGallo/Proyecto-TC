const { Schema, model } = require('mongoose');

const ParentSchema = new Schema({
    name: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = model('Parent', ParentSchema);