const { Schema, model } = require('mongoose');

const UserRoutineSchema = new Schema({
    idUser: {type: Number, required:true},
    routinesUser: [{type: Object, required:true}]
}, {
    timestamps: true
});

module.exports = model('UserRoutine', UserRoutineSchema);