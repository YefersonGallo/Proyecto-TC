const { Schema, model } = require('mongoose');

const UbicationSchema = new Schema({
    name: {type: String, required: true},
    code: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = model('Ubication', UbicationSchema);